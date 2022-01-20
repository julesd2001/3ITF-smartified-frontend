export interface User {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    token: string,
    profilePicture: string;
    isAdmin: boolean;
}