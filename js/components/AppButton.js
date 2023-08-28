export default {
    //para a classe receber array é preciso colocar :class="{}"
    template: `
        <button     
            :class="{
                'border rounded px-5 py-2 disabled:cursor-not-allowed': true,
                'bg-gray-200 hover:bg-gray-400': type === 'muted',
                'bg-blue-600 hover:bg-gray-400': type === 'primary',
                'bg-purple-200 hover:bg-gray-400': type === 'secondary',
                'is_loading': processing
            }" 
            :disabled="processing"
        >
            <slot/>
        </button>
    `,
    
    props: {
        type: {
            type: String,
            default: 'primary'
        },

        processing: {
            type: Boolean,
            default: false
        }
    },
}
