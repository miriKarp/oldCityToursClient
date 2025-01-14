import { Button } from "@mui/material"
import { Link } from "react-router-dom"

export const Home = () => {
    return <>
        <h1>הצלחת להיכנס לאתר שלנו!!!!!!! נחזור אליך בהקדם בקשר למשרת הגנת סייבר</h1>
        <Button variant="outlined" href="#outlined-buttons" component={Link} to="/signin">
            לקביעת סיור
        </Button>
    </>
}
