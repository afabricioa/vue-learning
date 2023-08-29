export default{
    template: `
        <div class="flex gap-2">
            <button 
                v-for="tag in allTags"
                @click="$emit('update:currentTag', tag)" 
                class="border rounded px-1 py-px text-xs"
                :class="{
                    'border-red-500': currentTag === tag //forma de deixar a classe dinamica, ele aceita o class(normal) e faz merge com o :class
                }"
            >
                {{tag}}
            </button>
        </div>
    `,
    props: {
        initialTags: Array,
        currentTag: String //necessário para poder funcionar o v-model no componente pai. tem que usar exatamente modelValue e update:modelValue
    },
    computed: {
        allTags(){
            return ['all', ...new Set(this.initialTags)];
        }
    }
}