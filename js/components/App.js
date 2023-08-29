import Assignments from "./Assignments.js";
import Panel from "./Panel.js";

export default {
    components: {
        'assignments': Assignments,
        'panel': Panel
    },
    template: `
        <div class="grid gap-6">  
            <assignments></assignments>
            <panel>
                <template v-slot:heading>
                    Heading content
                </template>
                <template v-slot:default>
                    Default content
                </template>
            </panel>
        </div>
    `
};