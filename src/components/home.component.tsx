import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { logoutUser } from '../redux/actions/userAction';
import { useNavigate } from 'react-router-dom';
import { Button, IconButton } from "@mui/material"
import { Link } from "react-router-dom"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HikingOutlinedIcon from '@mui/icons-material/HikingOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

export const Home = () => {

    const isConnected: Boolean = true;
    const user = JSON.parse(localStorage.getItem("Name")!);

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        dispatch(logoutUser());
        navigate('/home');
    };

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
            <IconButton aria-label="להתנתקות" onClick={handleLogout} className="homeIcon" sx={{ color: "white" }}>
                <LogoutIcon />
            </IconButton>
        </div>
    </>
}