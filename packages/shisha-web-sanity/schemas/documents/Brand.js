export default {
    title: "Brand",
    name: "brand",
    type: "document",
    fields: [
        {
            title: "Name",
            name: "name",
            type: "string",
        },
        {
            title: "Image",
            name: "image",
            type: "image",
        },
        {
            title: "Tabaccos",
            name: "tabaccos",
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: 'tabacco' }]
            }]
        }
    ]
}