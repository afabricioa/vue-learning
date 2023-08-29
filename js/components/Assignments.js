import AssignmentCreate from "./AssignmentCreate.js";
import AssignmentList from "./AssignmentList.js";

//can-hide é uma flag, aqui ela é usava para mostrar o X apenas no Completed assignments
//por causa da tag <slot></slot> no componente list ele add qualquer coisa no espaço
export default {
    components: {
        'assignments-list': AssignmentList,
        'assignment-create': AssignmentCreate
    },
    template: 
    `
        <section class="flex gap-8">
            <assignments-list :assignments="filters.inProgress" title="In Progress">
                <assignment-create @addAssignment="add"></assignment-create> 
            </assignments-list>
            <assignments-list :assignments="filters.completed" title="Completed Assignments" can-hide></assignments-list>
        </section>
    `,
    created(){ // dispara quando o componente tá sendo criado
        fetch(`http://localhost:3001/assignments`)
        .then(response => response.json())
        .then(data => this.assignments = data)
    }, 
    // mounted(){}, dispara quando o componente finaliza a montagem = componentDidMount
    data() {
        return {
            assignments: []
        }
    },
    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(a => !a.complete),
                completed: this.assignments.filter(a => a.complete)
            }
        }
    },
    methods: {
        add(name) {
            this.assignments.push({
                name: name, 
                complete: false, id: 
                this.assignments.length + 1
            });
        }
    }
}