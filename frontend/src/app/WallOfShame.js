'use client'

import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

export default function WallOfShame({ data}) {
    return (
        <TableContainer component={Paper} style={{ overflowX: 'auto', maxWidth: '85vw' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Rank</TableCell>
                        <TableCell>Season</TableCell>
                        <TableCell>Week</TableCell>
                        <TableCell>User</TableCell>
                        <TableCell>Team</TableCell>
                        <TableCell>Score</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.rank}>
                            <TableCell>{row.rank}</TableCell>
                            <TableCell>{row.season}</TableCell>
                            <TableCell>{row.week}</TableCell>
                            <TableCell>{row.user_name}</TableCell>
                            <TableCell>{row.team_name}</TableCell>
                            <TableCell>{row.score}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}