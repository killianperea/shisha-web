function serialize(object: any): any {
    return JSON.parse(JSON.stringify(object));
}

export const Utils = {
    serialize
}