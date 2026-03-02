/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { Button, Placeholder, PanelBody, SearchControl, SelectControl, Modal, Spinner, __experimentalNumberControl as NumberControl, IconButton } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState, useCallback, useEffect } from '@wordpress/element';

export function SourceControlsPanel
({
    attributes,
    setAttributes
}) {
    const {source} = attributes;
    const onChangeProperty = (property) => (value) => {
        const newSource = {...(attributes.source   || {})}
        newSource[property] = value;
        setAttributes({ source: newSource });
    };
	return (
		<PanelBody title={__('Source', 'englemond-products')}>
			<SelectControl
				label={__('Product Source', 'englemond-products')}
				value={attributes.source?.type ||  ''}
				options={[
					{ label: __('Manual Selection', 'englemond-products'), value: '' },
					{ label: __('Product Category', 'englemond-products'), value: 'term' },
				]}
				onChange={ onChangeProperty('type') }
			/>
			
			
			{source?.type === 'meta' && (
				<p style={{ fontStyle: 'italic', color: '#666' }}>
					{__('Products will be loaded from the post meta field "productSelection".', 'englemond-products')}
				</p>
			)}
			
			{source?.type === 'term' && (
				<>
                <p style={{ fontStyle: 'italic', color: '#666' }}>
					{__('Products are automatically loaded from the selected category. This list is not editable.', 'englemond-products')}
				</p>
                <ProductCategorySelector value={attributes.source?.term || null} onChange={onChangeProperty('term')} />
                <NumberControl  
                    label={__('Maximum number of results', 'englemond-products')}
                    value={attributes.source?.perPage || 5}
                    onChange={onChangeProperty('perPage')}
                />
                </>
			)}
		</PanelBody>
    );
}

const ProductCategorySelector = ({ value, onChange }) => {
    
    const categories = useSelect(
        (select) => {
            return select('core').getEntityRecords('taxonomy', 'product_cat', { per_page: -1 }) || [];
        },
        []
    );

    // Build hierarchical options
    const buildHierarchicalOptions = (cats, parentId = 0, level = 0) => {
        const options = [];
        const prefix = '—'.repeat(level);
        
        // Filter categories by parent (handle both 0 and undefined/null)
        const parentValue = parentId || 0;
        cats
            .filter(cat => {
                const catParent = cat.parent || 0;
                return catParent === parentValue;
            })
            .forEach(cat => {
                options.push({
                    label: prefix + (prefix ? ' ' : '') + cat.name,
                    value: cat.id
                });
                // Recursively add children
                const children = buildHierarchicalOptions(cats, cat.id, level + 1);
                options.push(...children);
            });
        
        return options;
    };

    const options = categories && categories.length > 0 
        ? buildHierarchicalOptions(categories)
        : [];

    return (
        <SelectControl
            label={__('Product Category', 'englemond-products')}
            value={value}
            onChange={onChange}
            options={options}
        />
    );
};

/**
 * Product selection panel component
 */
export function ProductSelectionPanel({
    sourceType,
    selectedProducts,
    onAddProduct,
    onRemoveProduct,
}) {
    const isEditable = sourceType !== 'term';
    
    
	return (
		<PanelBody title={__('Products', 'englemond-products')}>
			{selectedProducts.length > 0 && (
				<div style={{ marginTop: '15px' }}>
					<p><strong>{__('Selected products:', 'englemond-products')} {selectedProducts.length}</strong></p>
					{selectedProducts.map((product) => (
                        <ProductItem key={product.id} product={product} onRemove={isEditable ? () => onRemoveProduct(product.id) : undefined} />
                    ))}
				</div>
            )}
            {!selectedProducts?.length && (
                <p>{__('No products selected.', 'englemond-products')}</p>
            )}
            {isEditable && <Button variant="secondary" onClick={onAddProduct}>{__('Add Product', 'englemond-products')}</Button>}
		</PanelBody>
    );
}

export function ProductSelectorModal({ selection, onSelect, onRequestClose }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    const [isResolving, setIsResolving] = useState(false);
    
    useEffect(() => {
        const fetchProducts = async () => {
            setIsResolving(true);
            try {
                let url = '/wp-admin/admin-ajax.php?action=get_products';
                url += `&type=search&search=${encodeURIComponent(searchTerm)}&perPage=20`;
                const response = await fetch(url);
                const data = await response.json();
                setProducts(data.data);
            } catch (error) {
                setProducts([]);
            } finally {
                setIsResolving(false);
            }
        };

        // Debounce search
        const timeoutId = setTimeout(() => {
            fetchProducts();
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [searchTerm]);
    
    const selectedIds = selection.map(p => p.id);
    return (<>
            <Modal onRequestClose={onRequestClose} title={__('Select Product', 'englemond-products')} size="large">
                <div style={{ position: 'relative' }}>
                <SearchControl
                    placeholder={__('Search for a product', 'englemond-products')}
                    label={__('Search for a product', 'englemond-products')}
                    value={searchTerm}
                    onChange={setSearchTerm}
                />
                {isResolving ? <span style={{position: 'absolute', top: '50%', right: '0', transform: 'translate(-50%, -50%)'}}> <Spinner /></span>:null}
                </div>
                {products.length === 0 ? (
                    <div style={{minHeight: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
                        {__('No products found.', 'englemond-products')}
                        </div>
                    </div>
                ) : (
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '10px', marginTop: '20px'}} className="englemond-products-modal__items">
                        {products.map((product) => (
                            <ProductModalItem 
                                key={product.id} 
                                product={product}
                                isSelected={selectedIds.includes(product.id)}
                                onClick={() => {
                                    onSelect(product);
                                }} 
                            />
                        ))}
                    </div>
                )}
        </Modal>
    </>);
};

const ProductItem = ({ product, onRemove }) => {
    return (
        <div style={{ padding: '8px', border: '1px solid #ddd', marginBottom: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <img src={product.thumbnail} alt={product.title} style={{ width: '40px', height: '40px', marginRight: '10px' }} />
            <span style={{width: '100%'}}>{product.title?.rendered || product.title}</span>
            <IconButton icon="minus" onClick={onRemove} />
        </div>
    );
};

const ProductModalItem = ({ product, isSelected, onClick }) => {
    // Use thumbnail directly from product if available
    const thumbnail = product.thumbnail || '';
    
    return (
        <div 
            onClick={onClick}
            style={{
                border: isSelected ? '2px solid #0073aa' : '1px solid #ddd',
                padding: '10px',
                cursor: 'pointer',
                textAlign: 'center',
                borderRadius: '4px'
            }}
        >
            {thumbnail && (
                <img 
                    src={thumbnail} 
                    alt={product.title?.rendered || product.title}
                    style={{ width: '100%', height: 'auto', marginBottom: '8px' }}
                />
            )}
            <div style={{ fontSize: '12px', fontWeight: isSelected ? 'bold' : 'normal' }}>
                {product.title?.rendered || product.title}
            </div>
        </div>
    );
};
/**
 * Source placeholder component
 */
export function SourcePlaceholder({ sourceType, postId, sourceTerm }) {
	const instructions = 
		sourceType === 'meta' 
			? __('Products will be loaded from post meta.', 'englemond-products')
			: sourceType === 'term'
			? __('Select a product category to display products.', 'englemond-products')
			: __('Use the sidebar to search and select products to display in this selection block.', 'englemond-products');

	return (
		<Placeholder
			label={__('Englemond Selection', 'englemond-products')}
			instructions={instructions}
		/>
	);
}
