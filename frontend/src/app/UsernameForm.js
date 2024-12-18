'use client';

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import RocketLaunch from '@mui/icons-material/RocketLaunch';

export default function UsernameForm() {
    const [username, setUsername] = useState('');

    const handleUsernameSubmit = () => {
        alert(`Username submitted: ${username}`);
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

                <Button variant='contained' onClick={handleUsernameSubmit}><RocketLaunch /></Button>

            </Stack>

        </div>
    );
}