import { ToursTypes } from "../enums/toursTypes"

export type Tour = {
    _id: string,
    time: string,
    invitingName: string,
    phone: string,
    note: string,
    group: boolean,
    tourType: ToursTypes,
}