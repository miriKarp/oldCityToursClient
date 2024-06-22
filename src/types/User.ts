import { Tour } from "./Tour"

export type User = {
    name: string,
    email: string,
    phone: string,
    toursList: Tour[],
}