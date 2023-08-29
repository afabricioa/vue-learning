export default {
    template: `
        <form @submit.prevent="add">
            <div class="border border-gray-600 text-black">
                <input v-model="newAssignment" placeholder="New Assignment" class="p-2"/>
                <button type="submit" class="bg-white p-2 border-l">Add</button>
            </div>

        </form>
    `,
    data() {
        return{
            newAssignment: ''
        }
    }
    ,
    methods: {
        add() {
            //usando o $emit é a forma do componente filho se comunicar com o componente pai sem precisar de props
            this.$emit('addAssignment', this.newAssignment);

            this.newAssignment = '';
        }
    }
}