import { IconButton } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

export const OrderTour = () => {
    return <>
        <IconButton aria-label="add">
            <AddIcon />
        </IconButton>

        <IconButton aria-label="delete">
            <DeleteIcon />
        </IconButton>

        <IconButton aria-label="edit">
            <EditIcon />
        </IconButton>
    </>
}