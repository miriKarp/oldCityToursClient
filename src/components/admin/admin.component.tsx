import { Link, Route, Routes } from "react-router-dom";
import { CustomersList } from "./customersList.component";
import { ToursList } from "./toursList.component";
import { BusinessDetails } from "./businessDetails.component";
import { ServicesList } from "./servicesList.component";

export const Admin = () => {
    return (
        <div>
            <h2>איזור ניהול</h2>
            <nav style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <Link to="CustomersList">לקוחות</Link>
                <Link to="TourList">סיורים</Link>
                <Link to="BusinessDetails">פרטי העסק</Link>
                <Link to="ServicesList">שירותים</Link>
            </nav>

            <Routes>
                <Route path="CustomersList" element={<CustomersList />} />
                <Route path="TourList" element={<ToursList />} />
                <Route path="BusinessDetails" element={<BusinessDetails />} />
                <Route path="ServicesList" element={<ServicesList />} />
                <Route path="*" element={<p>בחר אפשרות מהתפריט</p>} />
            </Routes>
        </div>
    );
};