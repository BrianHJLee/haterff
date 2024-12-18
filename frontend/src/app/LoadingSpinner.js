'use client'

import { Backdrop, CircularProgress, Box, Typography } from "@mui/material";

export default function LoadingSpinner( { open, text }) {
    return (
        <div>
            <Backdrop open={open}>
                <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                    <CircularProgress size="5rem" />
                    <Box
                        sx={{
                        top: 0,
                        left: 0,
                        bottom: -200,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        whiteSpace: 'nowrap', // Prevent line breaks
                        }}
                    >
                        <Typography variant="h4" >
                            {text}
                        </Typography>
                    </Box>
                </Box>
            </Backdrop>
        </div>
    );
}