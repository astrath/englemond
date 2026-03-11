/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl, ToggleControl, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
/**
 * Register block
 */
registerBlockType('englemond/browser', {
	edit: ({ attributes, setAttributes }) => {
		const { productsPerPage, showCategoryTree, showSearch, noresultText } = attributes;
		const blockProps = useBlockProps({
			className: 'wp-block-englemond-browser',
		});

		return (
			<>
				<InspectorControls>
					<PanelBody title={__('Display Settings', 'englemond-products')}>
						<RangeControl
							label={__('Products Per Page', 'englemond-products')}
							value={productsPerPage}
							onChange={(value) => setAttributes({ productsPerPage: value })}
							min={4}
							max={48}
							step={4}
						/>
						<ToggleControl
							label={__('Show Category Tree', 'englemond-products')}
							checked={showCategoryTree}
							onChange={(value) => setAttributes({ showCategoryTree: value })}
						/>
						<ToggleControl
							label={__('Show Search', 'englemond-products')}
							checked={showSearch}
							onChange={(value) => setAttributes({ showSearch: value })}
						/>
						<TextControl
							label={__('No result text', 'englemond-products')}
							value={noresultText}
							onChange={(value) => setAttributes({ noresultText: value })}
						/>
					</PanelBody>
				</InspectorControls>

				<div {...blockProps}>
     			 	<Sidebar show={showCategoryTree} />
					<div className="wp-block-englemond-browser__main">
						<div className="wp-block-englemond-browser__main-inner">
							<SearchFilter show={showSearch} />
							<div className="wp-block-englemond-browser__content">
								<div class="wp-block-englemond-browser__products" role="region" aria-live="polite">
									<Products />
									<Pagination />
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	},

	save: () => {
		// Server-rendered blocks return null in save
		return null;
	},
});

const CategoryPanel = ({ category }) => {
	return <div className="wp-block-englemond-browser__panel">
		<h3 className="wp-block-englemond-browser__panel-title">
			{category.name}
		</h3>
		<ul className="wp-block-englemond-browser__panel-list">
			{category.children.map((child) => {
				const childId = `wp-block-englemond-browser__category-checkbox-${child.term_id}`;
				return (<li key={childId} className="wp-block-englemond-browser__panel-list-item">
					<input type="checkbox" id={childId} className="wp-block-englemond-browser__category-checkbox" data-category-id={child.term_id} data-parent-category={category.term_id} />
					<label htmlFor={childId} className="wp-block-englemond-browser__category-link">
						{child.name}
					</label>
				</li>);
			})}
		</ul>
	</div>
}

const Sidebar = ({ show }) => {
	const [tree, setTree] = useState([]);
	useEffect(() => {
		const getTree = async () => {
			const response = await fetch( '/wp-admin/admin-ajax.php?action=englemond_browser_get_category_tree');
			const data = await response.json();
			setTree(data.data);
		}
		getTree();
	}, []);
	if (!show){
		return null;
	}
	

	return <div className="wp-block-englemond-browser__sidebar">
		{tree.map((category, index) => <CategoryPanel key={index} category={category} />)}
	</div>
}

const SearchFilter = ({ show }) => {
	if (!show){
		return null;
	}
	return <div className="wp-block-englemond-browser__filters">
		<input type="search" className="wp-block-englemond-browser__search-input" placeholder={__('Search products...', 'englemond-products')} />
	</div>
}

const Products = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	useEffect(() => {
		const getProducts = async () => {
			try{
			const response = await fetch( '/wp-admin/admin-ajax.php?action=englemond_browser_get_products');
			const data = await response.json();
			setProducts(data.data.products);
			} catch (error) {
				setError(error);
			} finally {
				setIsLoading(false);
			}
		}
		getProducts();
	}, []);
	if (isLoading) {
		return <div className="wp-block-englemond-browser__loading">
			{__('Loading products...', 'englemond-products')}
		</div>
	}
	return 	<div className="wp-block-englemond-browser__products-grid">
	{products.map((product) => <ProductPreview product={product} />)}
	</div>
}

const Pagination = () => {
	return (<div className="wp-block-englemond-browser__pagination">
		{[1, 2, 3, 4, 5].map((page) => <button className={`wp-block-englemond-browser__pagination-button ${page === 1 ? 'is-active' : ''}`} data-page={page}>
			{page}
		</button>)}
	</div>);
}

const ProductPreview = ({ product }) => {	return (
	<div className="wp-block-englemond-browser__product">
		<div className="wp-block-englemond-browser__product-link">
			<div className="wp-block-englemond-browser__product-thumbnail">
				<img src={product.thumbnail} alt={product.title} loading="lazy" />
			</div>
			<div className="wp-block-englemond-browser__product-content">
				<h3 className="wp-block-englemond-browser__product-title">{product.title}</h3>
				<div className="wp-block-englemond-browser__product-price">{product.price}</div>
			</div>
		</div>
	</div>
);
}