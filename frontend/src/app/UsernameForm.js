'use client';

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import RocketLaunch from '@mui/icons-material/RocketLaunch';

export default function UsernameForm({ setLeagueDialogOpen, setLeagues, setLoading, setLoadingText }) {
    const [username, setUsername] = useState('');

    const handleUsernameSubmit = () => {
        fetch('/api/get_leagues?username=' + username, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            }
        })
        .then(response => {
            if (response.status === 404) {
                throw new Error("Something went wrong. Please try a different username or try again later.");
            }
            return response.json();
        })
        .then(data => {
            let leagues = [];
            for (let league in data) {
                leagues.push({ name: data[league], id: league });
            }
            setLeagues(leagues);
            setLeagueDialogOpen(true);
            setLoading(false);
            setLoadingText('');
        })
        .catch((error) => {
            setLoading(false);
            setLoadingText('');

            alert(error);
        });

        setLoading(true);
        setLoadingText('Loading your leagues...');

    };

    return (
        <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '5px' }}>
            <Stack direction='row' spacing={2} >

                <TextField
                    label="Sleeper Username"
                    variant="outlined"
                    fullWidth
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleUsernameSubmit();
                        }
                    }}
                />

                <Button disabled={username.length > 0 ? false : true} variant='contained' onClick={handleUsernameSubmit}><RocketLaunch /></Button>

            </Stack>

        </div>
    );
}