import { Button, IconButton } from "@mui/material"
import { Link } from "react-router-dom"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HikingOutlinedIcon from '@mui/icons-material/HikingOutlined';
// import Icon from '@mui/material/Icon';

export const Home = () => {

    const isConnected: Boolean = true;
    const user = JSON.parse(localStorage.getItem("Name")!);

    return <>
        <div id="home">
            <p id="text">{isConnected ? `שלום ${user}` : ""}</p>
            <Button variant="outlined" href="#outlined-buttons" component={Link} to="/BookATour" className="homeIcon" sx={{ color: "white", borderColor: "white" }}>
                לקביעת סיור
                <HikingOutlinedIcon />
            </Button>
            <IconButton aria-label="לאזור האישי" component={Link} to="/signin" className="homeIcon" sx={{ color: "white" }}>
                <PersonOutlineOutlinedIcon />
            </IconButton>
        </div>
    </>

}
