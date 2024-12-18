'use client';

import { Dialog, DialogContent, DialogTitle, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

export default function UsernameForm({ dialogOpen, setDialogOpen, leagues, setLoading, setLoadingText, generator }) {

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const handleLeagueSelect = (league_id) => {
        setDialogOpen(false);

        generator(league_id);
    };

    return (
        <Dialog onClose={handleDialogClose} open={dialogOpen}>
            <DialogTitle>Select League</DialogTitle>
            <DialogContent dividers>
                <List>
                    {leagues.map((league) => (
                        <ListItem key={league.id} disablePadding>
                            <ListItemButton onClick={() => handleLeagueSelect(league.id)}>
                                <ListItemText primary={league.name} />
                            </ListItemButton>
                        </ListItem>   
                    ))}
                </List>
            </DialogContent>
        </Dialog>
    );
}