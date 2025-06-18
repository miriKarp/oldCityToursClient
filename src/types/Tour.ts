import { Service } from './Service';

export type Tour = {
    _id: string,
    time: string,
    invitingName: string,
    phone: string,
    note: string,
    group: boolean,
    tourType: Service,
}

export type NewTour = Omit<Tour, '_id'>;