
import './englemond-modifs';
/*
const {registerBlockBindingsSource} = wp.blocks
const { __ } = wp.i18n;
wp.domReady(function(){
    const getValue = (args) => {
        return SHOPDATA[args.key] || args.key + 'Non configured' ;
    }
    wp.blocks.registerBlockBindingsSource( {
    name: 'englemond/shop',
    label: __( 'Shop Information', 'englemond' ),
    getValues({bindings}) {
        const newValues = {};
		for ( const [ attributeName, binding ] of Object.entries( bindings ) ) {
			newValues[ attributeName ] = getValue( binding.args );
		}
		return newValues;
    },
    canUserEditValue( { select, context } ) {
        return true;
    },
    getFieldsList(fieldListArgs) {
        const fields = [
            {
                default: SHOPDATA.phone,
                name: 'phone',
                args: {key: 'phone'},
                label: __( 'Phone', 'englemond' ),
                type: 'string',
            },
            {
                default: SHOPDATA.orderButtonText,
                name: 'order-text',
                args: {key: 'orderButtonText'},
                label: __( 'Order Text', 'englemond' ),
                type: 'string',
            },
        ];
        console.log({fields});
        return fields;
    },
});
});

*/