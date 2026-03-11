/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InspectorControls, BlockControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, Button, SelectControl, ToolbarGroup, ToolbarButton, __experimentalNumberControl as NumberControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { SourceControlsPanel, ProductSelectionPanel, SourcePlaceholder, ProductSelectorModal } from './source';
import { SelectionTemplate } from './templates';

/**
 * Register block
 */

const getProducts = async (source) => {
	let url = '/wp-admin/admin-ajax.php?action=get_products';
	if (source.type === 'term' && source.term) {
		url += `&type=term&term=${encodeURIComponent(source.term)}&perPage=${source.perPage || 5}`;
	} 
	if (!source.type && source.ids?.length > 0) {
		url += `&type=ids&ids=${encodeURIComponent(source.ids.join(','))}`;
	}
	if (source.type === 'search' && source.search) {
		url += `&type=search&search=${encodeURIComponent(source.search)}`;
	}
	const response = await fetch(url);
	const data = await response.json();
	return data.data;	
};


registerBlockType('englemond/selection', {
	edit: ({ attributes, setAttributes, isSelected }) => {
		const { source, view, backgroundImage } = attributes;
		const [modalOpen, setModalOpen] = useState(false);
		const blockProps = useBlockProps({
			className: 'wp-block-englemond-selection',
			style: backgroundImage?.url ? {
				backgroundImage: `url(${backgroundImage.url})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat'
			} : {}
		});

		// Fetch products via AJAX
		const [selectedProducts, setSelectedProducts] = useState([]);
		const [isLoadingProducts, setIsLoadingProducts] = useState(false);

		useEffect(() => {
			const fetchProducts = async () => {
				if (!source) {
					setSelectedProducts([]);
					return;
				}
				setIsLoadingProducts(true);
				try {
					const products = await getProducts(source);
					setSelectedProducts(products);
				} catch (error) {
					console.error('Error fetching products:', error);
					setSelectedProducts([]);
				} finally {
					setIsLoadingProducts(false);
				}
			};

			fetchProducts();
		}, [source]);
		// View controls
		const viewType = view?.type || 'grid';
		const columnsCount = view?.columnsCount || 3;
		const viewAlign = view?.align || 'right';
		const aspectRatio = view?.aspectRatio || '1:1';

		const onViewTypeChange = (newType) => {
			setAttributes({
				view: {
					...view,
					type: newType,
					columnsCount: newType === 'grid' ? columnsCount : view.columnsCount
				}
			});
		};

		const onColumnsCountChange = (value) => {
			setAttributes({
				view: {
					...view,
					columnsCount: value ? parseInt(value) : 3
				}
			});
		};

		const onAlignChange = (newAlign) => {
			setAttributes({
				view: {
					...view,
					align: newAlign
				}
			});
		};

		

		const onRemoveProduct = (productId) => {
			if (source.type === 'term') {
				return;
			}
			const newIds = attributes.source.ids.filter(id => id !== productId);
			setAttributes({
				source: {...attributes.source, ids: newIds}
			});
		};

		const onSelectProduct = (product) => {
			if (source.ids?.includes(product.id)) {
				return;
			}
			const newIds = [...(attributes.source.ids || [])];
			newIds.push(product.id);
			setAttributes({
				source: {
					type: '',
					ids: newIds
				}
			});

			products.forEach(product => {
				if (!newIds.includes(product.id)) {
					newIds.push(product.id)
				}
			});
			setAttributes({
				source: {
					...source,
					ids: newIds
				}
			});
		};

		// Determine if we should show placeholder
		const shouldShowPlaceholder = selectedProducts.length === 0;

		return (
			<>
				{viewType === 'carousel' && (
					<BlockControls>
						<ToolbarGroup>
							<ToolbarButton
								icon={"align-pull-left"}
								label={__('Align Left', 'englemond-products')}
								isPressed={viewAlign === 'left'}
								onClick={() => onAlignChange('left')}
							/>
							<ToolbarButton
								icon={"align-pull-right"}
								label={__('Align Right', 'englemond-products')}
								isPressed={viewAlign === 'right'}
								onClick={() => onAlignChange('right')}
							/>
						</ToolbarGroup>
					</BlockControls>
				)}
				<InspectorControls>
					<SourceControlsPanel 
					attributes={attributes}
					setAttributes={setAttributes}
					selectedProducts={selectedProducts}
					/>
					<ProductSelectionPanel
					isEditable={source?.type != 'term'}
					onAddProduct={()=>setModalOpen(true)}
					onRemoveProduct={onRemoveProduct}
					selectedProducts={selectedProducts}
					/>



					<PanelBody title={__('View', 'englemond-products')}>
						<SelectControl
							label={__('Display Mode', 'englemond-products')}
							value={viewType}
							options={[
								{ label: __('Grid', 'englemond-products'), value: 'grid' },
								{ label: __('Carousel', 'englemond-products'), value: 'carousel' },
							]}
							onChange={onViewTypeChange}
						/>
					
						<NumberControl
							label={__('Number of columns', 'englemond-products')}
							value={columnsCount}
							onChange={onColumnsCountChange}
							min={1}
							max={6}
							help={__('Number of columns in the grid layout.', 'englemond-products')}
						/>
						<ToggleControl
						checked={view?.showSidebar}
						onChange={v=>setAttributes({ view: { ...view, showSidebar: v } })}
						label={__('Show sidebar', 'englemond-products')}
						help={__('Show the sidebar in the carousel.', 'englemond-products')}
						/>
						<ToggleControl
						checked={view?.showHeader}
						onChange={v=>setAttributes({ view: { ...view, showHeader: v } })}
						label={__('Show header', 'englemond-products')}
						help={__('Show the header in the carousel.', 'englemond-products')}
						/>
						<SelectControl
							label={__('Aspect Ratio', 'englemond-products')}
							value={aspectRatio}
							options={[
								{ label: '1:1', value: '1:1' },
								{ label: '4:3', value: '4:3' },
								{ label: '16:9', value: '16:9' },
								{ label: '2:1', value: '2:1' },
								{ label: '3:4', value: '3:4' },
							]}
							onChange={(value) => setAttributes({ view: { ...view, aspectRatio: value } })}
						/>
					</PanelBody>
					
				</InspectorControls>

				<SelectionTemplate
				isLoadingProducts={isLoadingProducts}
				setAttributes={setAttributes}
					attributes={attributes}
					selectedProducts={selectedProducts}
					isSelected={isSelected}
				/>
				{modalOpen && <ProductSelectorModal
					selection={selectedProducts}
					onSelect={onSelectProduct}
					onRequestClose={() => setModalOpen(false)}
				/>}
			</>
		);
	},

	save: () => {
		// Server-rendered blocks return null in save
		return null;
	},
});
