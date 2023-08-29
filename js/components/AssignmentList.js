import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
import Panel from "./Panel.js";

//pra usar v-model nos componentes é preciso adaptar o componente filho

//o conteudo vai no slot default do Panel quando não é explicitamente declarado
export default {
    components: {
        'assignment': Assignment,
        'assignment-tags': AssignmentTags,
        Panel
    },
    template: 
    `
        <Panel v-if="assignments.length > 0" class="w-80">
            <div class="flex justify-between items-start">
                <h2 class="font-bold mb-2">
                    {{title}} 
                    <span>({{assignments.length}})</span>
                </h2>

                <span v-show="canHide">&times</span>
            </div>
            
            <assignment-tags 
                v-model:currentTag="currentTag"
                :initialTags="assignments.map(a => a.tag)" 
                ></assignment-tags>
            <ul class="border border-gray-600 divide-y divide-gray-600 divide-gray-600 mt-6">
                <assignment 
                    v-for="assignment in filteredAssignments" 
                    :key="assignment.id"
                    :assignment="assignment"
                >
                </assignment>
            </ul>

            <slot></slot>
            <template #footer>
                Footer
            </template>
        </Panel>
    `,
    props: {
        assignments: Array,
        title: String,
        canHide: {type: Boolean, default: false}
    },
    data(){
        return {
            currentTag: 'all'
        }
    },
    methods: {
        changeTag(tag){
            this.currentTag = tag;
        }
    },

    computed: {
        filteredAssignments(){
            if(this.currentTag === 'all'){
                return this.assignments;
            }else{
                return this.assignments.filter(a => a.tag === this.currentTag);
            }
            
        }
    }
}