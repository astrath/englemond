const { addFilter } = wp.hooks;
const { PanelBody, ButtonGroup, Button } = wp.components;
const { InspectorControls } = wp.blockEditor;
const { __ } = wp.i18n;
const { Fragment } = wp.element;

/**
 * Clean className by removing all motif classes
 */
const cleanMotifClasses = (className) => {
	if (!className) return '';
	return className
		.split(/\s+/)
		.filter((cls) => !cls.match(/^has-bg-motif-[123]$/))
		.join(' ')
		.trim();
};

/**
 * Get current motif number from className
 */
const getCurrentMotif = (className) => {
	if (!className) return null;
	const motifMatch = className.match(/\bhas-bg-motif-([123])\b/);
	return motifMatch ? parseInt(motifMatch[1]) : null;
};

/**
 * Motif Selection Panel Component
 * Adds a panel to block settings to select motif classes (has-bg-motif-1, has-bg-motif-2, has-bg-motif-3)
 */
function MotifPanel({ attributes, setAttributes }) {
	const currentClassName = attributes?.className || '';
	const activeMotif = getCurrentMotif(currentClassName);

	/**
	 * Set the selected motif
	 */
	const setMotif = (motifNumber) => {
		// Clean existing motif classes
		let newClassName = cleanMotifClasses(currentClassName);

		// Add the new motif class if a motif is selected (not null)
		if (motifNumber !== null) {
			const motifClass = `has-bg-motif-${motifNumber}`;
			newClassName = newClassName
				? `${newClassName} ${motifClass}`
				: motifClass;
		}

		// Update the block attributes
		setAttributes({ className: newClassName });
	};

	return (
		<InspectorControls>
			<PanelBody
				title={__('Motif Selection', 'englemond')}
				initialOpen={true}
			>
				<ButtonGroup>
					<Button
						isPrimary={activeMotif === 1}
						isPressed={activeMotif === 1}
						onClick={() => setMotif(activeMotif === 1 ? null : 1)}
					>
						{__('Motif 1', 'englemond')}
					</Button>
					<Button
						isPrimary={activeMotif === 2}
						isPressed={activeMotif === 2}
						onClick={() => setMotif(activeMotif === 2 ? null : 2)}
					>
						{__('Motif 2', 'englemond')}
					</Button>
					<Button
						isPrimary={activeMotif === 3}
						isPressed={activeMotif === 3}
						onClick={() => setMotif(activeMotif === 3 ? null : 3)}
					>
						{__('Motif 3', 'englemond')}
					</Button>
				</ButtonGroup>
			</PanelBody>
		</InspectorControls>
	);
}

/**
 * Add motif panel to group blocks via filter
 */
addFilter(
	'editor.BlockEdit',
	'englemond/motif-selection',
	(BlockEdit) => {
		return (props) => {
			// Only show motif panel for group blocks
			if (props.name !== 'core/group') {
				return <BlockEdit {...props} />;
			}

			return (
				<Fragment>
					<BlockEdit {...props} />
					<MotifPanel
						attributes={props.attributes}
						setAttributes={props.setAttributes}
					/>
				</Fragment>
			);
		};
	}
);
