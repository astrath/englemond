/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { __experimentalUnitControl as UnitControl, Button, IconButton, Placeholder, Notice } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useState, useCallback } from '@wordpress/element';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * Helper function for class names
 */
const clsz = (className, active, activeClass) => {
	return 'wp-block-englemond-gallery__' + className + (active ? ' ' + activeClass : '');
};

/**
 * Gallery Placeholder Component
 */
const GalleryPlaceholder = ({ onSelectImages, notice }) => {
	return (
		<Placeholder
			className={clsz('placeholder')}
			label={__('Englemond Gallery', 'englemond-products')}
			instructions={__('Select images to display in the gallery.', 'englemond-products')}
		>
			{notice && <Notice className="wp-block-englemond-gallery__notice" isDismissible={false} type="warning">{notice}</Notice>}
			<MediaUploadCheck>
				<MediaUpload
					onSelect={onSelectImages}
					allowedTypes={['image']}
					multiple
					value={[]}
					render={({ open }) => (
						<Button variant="primary" onClick={open}>
							{__('Select Images', 'englemond-products')}
						</Button>
					)}
				/>
			</MediaUploadCheck>
		</Placeholder>
	);
};

/**
 * Register block
 */
registerBlockType('englemond/gallery', {
	edit: ({ attributes, setAttributes, isSelected }) => {
		const { images, iconSize } = attributes;
		const [active, setActive] = useState(images?.length ? 0 : null);
        let notice = null;
        if (images === undefined) {
            return <Placeholder
            icon="warning"
                label={__('Englemond Gallery', 'englemond-products')}
            >
                le post type courant ne  ne supporte pas la metadata gallery.
            </Placeholder>
        }
		const onSelectImages = (selectedImages) => {
			const imageData = [...images];
			selectedImages.map((image) => {
				if (imageData.find((img) => img.id === image.id)) return;
				imageData.push({
					id: image.id,
					url: image.url,
					alt: image.alt || '',
				});
			});
			setAttributes({ images: imageData });
			if (imageData.length > 0 && active === null) {
				setActive(0);
			}
		};

		const removeActiveImage = useCallback(() => {
			if (active === null || images.length === 0) return;
			const newImages = [...images];
			newImages.splice(active, 1);

			// Update active index after deletion
			if (newImages.length === 0) {
				setActive(null);
			} else if (active >= newImages.length) {
				// If we deleted the last item, select the new last item
				setActive(newImages.length - 1);
			} else {
				// Keep the same index (which now points to the next item)
				setActive(active);
			}

			setAttributes({ images: newImages });
		}, [active, images]);

		const onRemoveImage = (e) => {
			e.preventDefault();
			e.stopPropagation();
			removeActiveImage();
		};
		const blockProps = useBlockProps({
			className: 'wp-block-englemond-gallery',
			style: iconSize ? {
				'--thumbnail-size': iconSize
			} : {}
		});

		const activeImage = active !== null && images[active] ? images[active] : null;

		return (
			<>
				<InspectorControls group="dimensions">
					<UnitControl
						label={__('Icon Size', 'englemond-products')}
						value={iconSize}
						onChange={(value) => setAttributes({ iconSize: value })}
					/>
				</InspectorControls>

				<div {...blockProps}>
					<div className={clsz('inner')}>
						<div className={clsz('nav')}>
							{images?.map((image, index) => (
								<div
									key={image.id || index}
									onClick={() => setActive(index)}
									className={clsz('nav-item', active === index, 'active')}
									role="button"
									tabIndex="0"
									aria-label={__('View image', 'englemond-products') + ' ' + (index + 1)}
								>
									<img
										className={clsz('preview')}
										src={image.url}
										alt={image.alt}
										style={{ width: '100%', height: 'auto', display: 'block' }}
									/>
								</div>
							))}
							<MediaUploadCheck>
								<MediaUpload
									onSelect={onSelectImages}
									allowedTypes={['image']}
									multiple
									value={images?.map((img) => img.id) || []}
									render={({ open }) => (
										<IconButton
											icon="plus"
											className={clsz('nav-item')}
											onClick={open}
											label={__('Add images', 'englemond-products')}
										/>
									)}
								/>
							</MediaUploadCheck>
						</div>
						<div className={clsz('frame')}>
							<div className={clsz('frame-inner')}>
								{activeImage ? (
									<div className={clsz('frame-item')}>
										<img
											src={activeImage.url}
											alt={activeImage.alt}
											className={clsz('frame-image')}
										/>
										<Button
											variant="secondary"
											isDestructive
											onClick={onRemoveImage}
											className={clsz('frame-item-remove')}
										>
											<span className="dashicons dashicons-remove" /> {__('Remove', 'englemond-products')}
										</Button>
									</div>
								) : (
									<GalleryPlaceholder notice={notice} onSelectImages={onSelectImages} />
								)}
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