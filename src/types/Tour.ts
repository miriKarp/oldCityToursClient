import { ToursTypes } from "../enums/toursTypes"

export type Tour = {
    id: number,
    time: String,
    invitingName: string,
    phone: string,
    note: string,
    group: boolean,
    tourType: ToursTypes,
}