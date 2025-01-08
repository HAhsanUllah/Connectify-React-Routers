export type contact = {
    name : {
        first : string,
        last : string
        },
    login : {
        uuid : string   
    },    

    email: string,
    
    picture: {
        thumbnail: string,
        medium: string,
        large: string
    },
    phone: string,
    location: {
        city: string,
        state: string,
        country: string,
        postcode: number


    }
}