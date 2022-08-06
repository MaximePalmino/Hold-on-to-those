export default interface Resto {

    name: String,
    location: String,
    categories: [string, string, string, string]
    starterMenu: [string, string, string, string]
    mainMenu: [string, string, string]
    order: any
    openingHours: {
        thu: {
            open: Number,
            close: Number,
        },
        fri: {
            open: Number,
            close: Number,
        },
        sat: {
            open: Number,
            close: Number,
        },

    }
}