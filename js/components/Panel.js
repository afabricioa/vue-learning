export default {
    template: `
        <div class="bg-gray-700 p-4 border border-gray-600 rounded-lg mt-2">
            <h2 class="font-bold">
                <slot name="heading"/>
            </h2>
            <slot name="default"/>
            <slot name="footer"/>
        </div>
    `,
    props: {
        heading: String
    }
}