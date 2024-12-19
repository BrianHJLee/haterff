import Button from '@mui/material/Button';
import Diversity1Icon from '@mui/icons-material/Diversity1';

export default function ResetButton({ resetFunction }) {
    return (
        <div style={{ justifyContent: 'center', display: 'flex' }}>
            <Button variant='contained' onClick={resetFunction} startIcon={<Diversity1Icon />} >Shame another league</Button>
        </div>
    );
}
