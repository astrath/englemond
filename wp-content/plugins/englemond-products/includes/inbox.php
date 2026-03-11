<h1><?php esc_html_e('Contact Inbox', 'englemond-products'); ?></h1>
<?php $inbox = get_option('englemond_contact_messages', []); ?>

<div class="wrap">
    <form method="post" name="englemond_contact_messages_bulk_action">
        <input type="hidden" name="action" value="englemond_contact_messages_bulk_action" />
        <input type="hidden" name="nonce" value="<?php echo wp_create_nonce('englemond_contact_messages_bulk_action'); ?>" />
        <input type="hidden" name="mesageIds" value="" />
        <select name="bulk_action" required class="bulk-action">
        <option value=""><?php esc_html_e('Bulk action', 'englemond-products'); ?></option>
        <option value="delete"><?php esc_html_e('Delete', 'englemond-products'); ?></option>
        </select>
        <button type="submit" class="button"><?php esc_html_e('Apply', 'englemond-products'); ?></button>
    </form>
<table class="wp-list-table widefat fixed striped">
        <thead>
            <tr>
                <th scope="col" class="check-column" style="vertical-align: middle;">
                    <input type="checkbox" id="select-all" class="select-all"  style="vertical-align: middle;" />
                </th>

                <th class="column-status">
                    <?php esc_html_e('Status', 'englemond-products'); ?>
                </th>
                <th class="column-date">
                    <?php esc_html_e('Date', 'englemond-products'); ?>
                </th>
                <th class="column-ip"><?php esc_html_e('IP', 'englemond-products'); ?></th>
                <th class="column-name"><?php esc_html_e('Name', 'englemond-products'); ?></th>
                <th class="column-email"><?php esc_html_e('Email', 'englemond-products'); ?></th>
                <th class="column-subject"><?php esc_html_e('Subject', 'englemond-products'); ?></th>
                <th class="column-message"><?php esc_html_e('Message', 'englemond-products'); ?></th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($inbox as $item) : ?>
                <tr>
                    <th class="check-column">
                        <input type="checkbox" class="message-checkbox" data-id="<?php echo $item['id']; ?>" />
                    </td>
                    <td class="column-status">
                        <span class="badge-<?= $item['status'] ?>"><?= $item['status'] ?></span>
                    </td>
                    <td class="column-date"><?php echo $item['date']; ?></td>
                    <td class="column-ip"><?php echo $item['ip']; ?> <br> 
                    <small style="line-height: 1;display: block;"><?php echo $item['user_agent']; ?></small></td>
                    <td class="column-name"><?php echo $item['name']; ?></td>
                    <td class="column-email"><?php echo $item['email']; ?></td>
                    <td class="column-subject"><?php echo $item['subject']; ?></td>
                    
                    <td class="column-message">
                        <details>
                            <summary clss="button button-small"><?php esc_html_e('Show message', 'englemond-products'); ?></summary>
                            <div class="message-content">
                                <?php echo nl2br($item['message']); ?>
                            </div>
                        </details>
                </tr>
            <?php endforeach; ?>
            <?php if (empty($inbox)) : ?>
                <tr>
                    <td colspan="4"><?php esc_html_e('No messages found', 'englemond-products'); ?></td>
                </tr>
            <?php endif; ?>
        </tbody>
    </table>
</div>

<script>
jQuery(document).ready(function($) {
    $('#select-all').change(function() {
        $('.message-checkbox').prop('checked', $(this).prop('checked'));
    });
    $('form[name="englemond_contact_messages_bulk_action"]').submit(function(e) {
        const messageIds = $('.message-checkbox:checked').map(function() {
            return $(this).data('id');
        }).get();
        $('input[name="mesageIds"]').val(messageIds.join(','));
    });
});

</script>
<style>
    .badge-pending {
        background-color: #ffc107;
        color: #fff;
        display: inline-block;
        padding: 0.125rem 0.25rem;
        border-radius: 0.125rem;
    }
    .badge-sent {
        background-color: #28a745;
        color: #fff;
        display: inline-block;
        padding: 0.125rem 0.25rem;
        border-radius: 0.125rem;
    }
    .badge-error {
        background-color: #dc3545;
        color: #fff;
        display: inline-block;
        padding: 0.125rem 0.25rem;
        border-radius: 0.125rem;
    }
    .column-date,
    .column-status {
        width: 100px;
    }
    .column-ip {
        width: 200px;
    }
    .column-name {
        width: 100px;
    }
    .column-email {
        width: 200px;
    }
    .column-subject {
        width: 120px;
    }
    .column-message {
        width: 500px;
    }
</style>