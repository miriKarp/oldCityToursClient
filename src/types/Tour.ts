import { ToursTypes } from "../enums/toursTypes"

export type Tour = {
    id: number,
    time: string,
    invitingName: string,
    phone: string,
    note: string,
    group: boolean,
    tourType: ToursTypes,
}