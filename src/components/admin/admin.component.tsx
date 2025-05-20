import { CustomersList } from "./customersList.component";
import { ToursList } from "./toursList.component";
import { BusinessDetails } from "./businessDetails.component";

export const Admin = () => {

    return <>
        <CustomersList />
        <ToursList />
        <BusinessDetails />
    </>
}