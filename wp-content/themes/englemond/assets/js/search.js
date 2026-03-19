import $ from 'jquery';

const SEARCH_MIN_LENGTH = 3;
const SEARCH_DEBOUNCE_MS = 300;

function englemondProductSearch() {
    const $searchBlocks = $('.wp-block-search');

    if (!$searchBlocks.length) {
        return;
    }

    $searchBlocks.each(function () {
        const $block = $(this);
        const $input = $block.find('.wp-block-search__input');
        const $submit = $block.find('[type="submit"], .wp-block-search__button').first();
        $submit.addClass('fa fa-chevron-right')
        if (!$input.length) {
            return;
        }
        $input.attr('autocomplete', 'off');

        // Avoid binding multiple times
        if ($block.data('englemond-search-bound')) {
            return;
        }
        $block.data('englemond-search-bound', true);

        // Create suggestions container
        const $suggestions = $('<div class="englemond-search-suggestions" aria-live="polite"></div>');
        $block.append($suggestions);

        // Create loader (CSS-based spinner, no Font Awesome)
        const $loader = $('<div class="englemond-search-loader" aria-hidden="true"><span class="englemond-search-loader__spinner"></span></div>');
        $block.append($loader);

        let debounceTimer = null;
        let lastQuery = '';

        // Remember original submit button position so it can be moved
        // into the suggestions popup and restored later.
        if ($submit.length) {
            if (!$submit.data('englemond-original-parent')) {
                $submit.data('englemond-original-parent', $submit.parent());
                $submit.data('englemond-original-next', $submit.next());
            }

            // Hidden by default; it will only be shown inside the popup
            // when the suggestions list contains exactly 5 items.
            $submit.hide();
        }

        function restoreSubmitPosition() {
            if (!$submit.length) {
                return;
            }

            const $originalParent = $submit.data('englemond-original-parent');
            const $originalNext = $submit.data('englemond-original-next');

            if (!$originalParent || !$originalParent.length) {
                return;
            }

            const $currentParent = $submit.parent();
            if ($currentParent && $currentParent.hasClass('englemond-search-suggestions__submit')) {
                if ($originalNext && $originalNext.length) {
                    $originalNext.before($submit);
                } else {
                    $originalParent.append($submit);
                }
            }

            $submit.hide();
        }

        function clearSuggestions() {
            restoreSubmitPosition();
            $suggestions.empty().removeClass('is-visible');
            $loader.removeClass('is-visible');
        }

        function renderSuggestions(items) {
            $suggestions.empty();
            restoreSubmitPosition();

            // Aucun résultat trouvé
            if (!items || !items.length) {
                const $empty = $('<div class="englemond-search-suggestions__empty"></div>')
                    .text('Aucun résultat trouvé');

                $suggestions
                    .append($empty)
                    .addClass('is-visible');

                return;
            }

            const $list = $('<ul class="englemond-search-suggestions__list"></ul>');

            items.forEach((item) => {
                const name = item.name || item.title?.rendered || '';
                const url = item.permalink || item.link || '#';
                const thumb = item.featured_media_url || item.image?.src || item.images?.[0]?.src || null;
                const reference = item.reference || item.sku || item.meta?.reference || '';

                if (!name || !url) {
                    return;
                }

                const $li = $('<li class="englemond-search-suggestions__item"></li>');
                const $a = $('<a class="englemond-search-suggestions__link"></a>').attr('href', url);

                if (thumb) {
                    const $icon = $('<span class="englemond-search-suggestions__icon"></span>');
                    const $img = $('<img alt="">')
                        .attr('src', thumb)
                        .attr('loading', 'lazy');
                    $icon.append($img);
                    $a.append($icon);
                }

                const $text = $('<span class="englemond-search-suggestions__text"></span>');
                const $title = $('<span class="englemond-search-suggestions__title"></span>').text(name);
                $text.append($title);

                if (reference) {
                    const $subtitle = $('<span class="englemond-search-suggestions__subtitle"></span>').text(reference);
                    $text.append($subtitle);
                }

                $a.append($text);

                $li.append($a);
                $list.append($li);
            });

            const showSubmitInPopup = items.length === 5 && $submit.length;

            if (showSubmitInPopup) {
                const $submitWrapper = $('<div class="englemond-search-suggestions__submit"></div>');
                $submitWrapper.append($submit);
                $submit.show();

                $suggestions
                    .append($list)
                    .append($submitWrapper)
                    .addClass('is-visible');
            } else {
                $suggestions
                    .append($list)
                    .addClass('is-visible');
            }
        }

        function fetchSuggestions(query) {
            // Default to the public WooCommerce Store API
            const endpoint =
                $block.data('searchEndpoint') ||
                '/wp-json/wp/v2/product?per_page=5&search=' + encodeURIComponent(query);

            $loader.addClass('is-visible');

            $.getJSON(endpoint)
                .done((data) => {
                    const items = Array.isArray(data) ? data : data?.products || [];
                    renderSuggestions(items);
                })
                .fail(() => {
                    clearSuggestions();
                })
                .always(() => {
                    $loader.removeClass('is-visible');
                });
        }

        $input.on('input', function () {
            const query = $(this).val().toString().trim();

            if (query === lastQuery) {
                return;
            }
            lastQuery = query;

            if (debounceTimer) {
                clearTimeout(debounceTimer);
            }

            if (query.length < SEARCH_MIN_LENGTH) {
                clearSuggestions();
                return;
            }

            debounceTimer = setTimeout(() => {
                fetchSuggestions(query);
            }, SEARCH_DEBOUNCE_MS);
        });

        // Hide suggestions when clicking outside the search block
        $(document).on('click', function (e) {
            if (!$.contains($block[0], e.target)) {
                clearSuggestions();
            }
        });
    });
}

$(function () {
    englemondProductSearch();
});

