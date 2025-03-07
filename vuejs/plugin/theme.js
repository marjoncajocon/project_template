import { defineComponent } from "../vue.js";


const Panel = defineComponent({
    setup() {

    },
    props: [
        'title'
    ],
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">{{ title }}</div>
            <div class="panel-body">
                <slot></slot>
            </div>
        </div>
    `
});

export { Panel };
