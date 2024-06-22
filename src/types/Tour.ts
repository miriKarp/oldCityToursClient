import { ToursTypes } from "../enums/toursTypes"

export type Tour = {
    id: number,
    time: Date,
    invitingName: string,
    phone: string,
    note: string,
    group: boolean,
    tourType: ToursTypes,
}