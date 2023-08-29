import AssignmentCreate from "./AssignmentCreate.js";
import AssignmentList from "./AssignmentList.js";

export default {
    components: {
        'assignments-list': AssignmentList,
        'assignment-create': AssignmentCreate
    },
    template: 
    `
        <section class="space-y-6">
            <assignments-list :assignments="filters.inProgress" title="In Progress"></assignments-list>
            <assignments-list :assignments="filters.completed" title="Completed Assignments"></assignments-list>
            <assignment-create @addAssignment="add"></assignment-create>
        </section>
    `,
    data() {
        return {
            assignments: [
                {name: 'Finish project', complete: false, id: 1},
                {name: 'Read Chapter 4', complete: false, id: 2},
                {name: 'Turn in homework', complete: false, id: 3}
            ]
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