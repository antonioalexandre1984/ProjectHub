export interface ClientsApi {
    id: {
        value: string;
    },
    name: {
        first: string;
        last: string;
    },
    email: string;
    login: {
        username: string;
    };
    dob: {
        age: number;
    }
    picture: {
        thumbnail: string;
    };
}