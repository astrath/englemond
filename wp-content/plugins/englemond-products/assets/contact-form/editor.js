/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
/**
 * Register block
 */
registerBlockType('englemond/contact-form', {
	edit: ({ attributes, setAttributes }) => {
		const { display, contactEmail } = attributes;
		const blockProps = useBlockProps({
			className: 'wp-block-englemond-contact-form',
		});

		return (
			<>
				<InspectorControls>
					<PanelBody title={__('Display Settings', 'englemond-products')}>
						<SelectControl
							label={__('Display Type', 'englemond-products')}
							value={display}
							options={[
								{ label: __('Block', 'englemond-products'), value: 'block' },
								{ label: __('Popup', 'englemond-products'), value: 'popup' },
							]}
							onChange={(value) => setAttributes({ display: value })}
						/>
					</PanelBody>
					<PanelBody title={__('Form Settings', 'englemond-products')}>
						<TextControl
							label={__('Contact Email', 'englemond-products')}
							value={contactEmail || ''}
							onChange={(value) => setAttributes({ contactEmail: value })}
							placeholder={__('Enter email address', 'englemond-products')}
							type="email"
							help={__('Email address where form submissions will be sent', 'englemond-products')}
						/>
					</PanelBody>
				</InspectorControls>

				<div {...blockProps}>
					{display=='popup'?<ContactFormPopup attributes={attributes} setAttributes={setAttributes} /> : <ContactFormBlock attributes={attributes} setAttributes={setAttributes} />}
				</div>
			</>
		);
	},

	save: () => {
		// Server-rendered blocks return null in save
		return null;
	},
});


const ContactFormPopup = ({attributes, setAttributes}) => {
	return (
		<>
			<RichText 
			tagName="button" 
			onChange={(value) => 
			setAttributes({ buttonText: value })} 
			value={attributes.buttonText} 
			placeholder={__('Contact Us', 'englemond-products')} 
			className="wp-block-button__link" />
		</>
	);
};

const ContactFormBlock = () => {
	return <div className="wp-block-englemond-contact-form__form">
			<div className="wp-block-englemond-contact-form__field">
				<label className="wp-block-englemond-contact-form__label" for="name">{__('Name', 'englemond-products')}</label>
				<div className="wp-block-englemond-contact-form__input" />
			</div>
			<div className="wp-block-englemond-contact-form__field">
				<label className="wp-block-englemond-contact-form__label" for="email">{__('Email', 'englemond-products')}</label>
				<div className="wp-block-englemond-contact-form__input" />
			</div>
			<div className="wp-block-englemond-contact-form__field">
				<label className="wp-block-englemond-contact-form__label" for="subject">{__('Subject', 'englemond-products')}</label>
				<div className="wp-block-englemond-contact-form__input" />
			</div>
			<div className="wp-block-englemond-contact-form__field">
				<label className="wp-block-englemond-contact-form__label" for="message">{__('Message', 'englemond-products')}</label>
				<div className="wp-block-englemond-contact-form__textarea" />
			</div>
			<div className="wp-block-englemond-contact-form__field">
				<button className="wp-block-englemond-contact-form__submit">{__('Send', 'englemond-products')}</button>
			</div>
		</div>
};