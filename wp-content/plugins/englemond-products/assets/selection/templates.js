/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Spinner } from '@wordpress/components';
/**
 * Template component for rendering the selection block
 * Supports grid and carousel modes
 */
export function SelectionTemplate({ attributes, selectedProducts, setAttributes, isSelected, isLoadingProducts }) {
	const { view, source, title } = attributes;
	const viewType = view?.type || 'carousel';
	const sourceType = source?.type || '';
	const columnsCount = view?.columnsCount || 3;
	const aspectRatio = view?.aspectRatio || '1:1';
	const [activeIndex, setActiveIndex] = useState(0);
	const blockProps = useBlockProps({
		style: {
			'--aspect-ratio': aspectRatio.replace(':', '/')
		}
	});
	if (viewType === 'grid') {
		return (
				<div {...blockProps}>
					{selectedProducts.map((product) => (
						<Product product={product} />
					))}
				</div>
			);
	}
	const viewAlign = view.align || 'right';
	const activeTitle = selectedProducts[activeIndex]?.title?.rendered || selectedProducts[activeIndex]?.title || 'Selectiio Vide';
	const carouselStyle = {
		width: (selectedProducts.length * 100 / Math.max(columnsCount, 1)) + '%',
		marginLeft: (activeIndex * (-100 )/ Math.max(columnsCount, 1)) + '%',
	}
	return (
		<div {...blockProps}>
			{view.showHeader ? <div className="wp-block-englemond-selection__header">
			{isSelected?<RichText className="wp-block-englemond-selection__title" placeholder={__('Enter title', 'englemond-products')} value={attributes.title} onChange={title=>setAttributes({ title : stripTags(title) })} tagName="h3" />:<h3 className="wp-block-englemond-selection__title">{attributes.title}</h3>}
			{isSelected?<RichText className="wp-block-englemond-selection__description" placeholder={__('Enter description', 'englemond-products')} value={attributes.description} onChange={description=>setAttributes({ description : stripTags(description) })} tagName="p" />:<p className="wp-block-englemond-selection__description">{attributes.description}</p>}
			</div>:null}
			<div className={"wp-block-englemond-selection__carousel " + (viewAlign === 'left' ? 'align-left' : '')}>
				<div className="wp-block-englemond-selection__carousel-viewport">
					<div className="wp-block-englemond-selection__carousel-inner" style={carouselStyle}>
						{selectedProducts.map((product) => (
							<Product product={product} className="wp-block-englemond-selection__carousel-item" />
						))}
					</div>
					
				</div>
				<div className="wp-block-englemond-selection__carousel-controls">
						<button onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))} disabled={activeIndex === 0} className="wp-block-englemond-selection__carousel-control-prev"></button>
						<button onClick={() => setActiveIndex(Math.min(selectedProducts.length - columnsCount, activeIndex + 1))} disabled={activeIndex >= (selectedProducts-columnsCount.length)} className="wp-block-englemond-selection__carousel-control-next"></button>
				</div>
				{view.showSidebar ? <div className="wp-block-englemond-selection__side">
					<h5>{activeTitle}</h5>
					{isLoadingProducts && <Spinner />}
				</div>:null}
			</div>
		</div>
	);
}
const Product = ({ product , className }) => {
	return (
		<div className={"wp-block-englemond-selection__item " + className}>
			<span className="wp-block-englemond-selection__item-link">

			<img src={product.thumbnail} alt={product.title} />
			<h5 className="wp-block-englemond-selection__item-title">{product.title}</h5>
			</span>
		</div>
	);
};

const stripTags = (html) => {
	return html;
};