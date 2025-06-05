import { CustomersList } from "./customersList.component";
import { ToursList } from "./toursList.component";
import { BusinessDetails } from "./businessDetails.component";
import { ServicesList } from "./servicesList.component";

export const Admin = () => {

    return <>
        <CustomersList />
        <ToursList />
        <BusinessDetails />
        <ServicesList/>
    </>
}