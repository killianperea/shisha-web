export default {
    title: "Tabacco",
    name: "tabacco",
    type: "document",
    fields: [
        {
            title: "Name",
            name: "name",
            type: "string",
        },
        {
            title: "Description",
            name: "description",
            type: "localeString",
        },
        {
            title: "Image",
            name: "image",
            type: "image",
        },
        {
            title: "Brand",
            name: "brand",
            type: "reference",
            to: [{type: 'brand'}]
        },
        {
            title: "Flavors",
            name: "flavors",
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: 'flavor' }]
            }]
        }
    ]
}