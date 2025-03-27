export interface Person {

    name: string;
    dob: string;
    email: string;
    verified: boolean;
    salary: number;
    [key: string]: any;
}