import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export default function ErrorModal({ open, setOpen, title, text }) {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog onClose={handleClose} open={open} maxWidth='xs' >
            <DialogTitle style={{ backgroundColor: '#e32b2b', color: 'white' }} >{title}</DialogTitle>
            <IconButton
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: '1%',
                    top: 10,
                }}
            >
                <CloseIcon style={{ color: 'white' }} />
            </IconButton>
            <DialogContent dividers>
                {text}
            </DialogContent>
        </Dialog>
    );
}
