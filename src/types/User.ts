import { Tour } from "./Tour"

export type User = {
    name: string,
    password: string,
    email: string,
    phone: string,
    toursList: Tour[],
}