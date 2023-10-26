'use client';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Grid, Typography, IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export default function footer() {
    return (
        <Grid container spacing={1} item xs={12} sx={{ 
          
        m: 0, 
        p: '18px 8px !important',
        width:'100%', 
        position: 'fixed', 
        bottom: '0px', 
        backgroundColor: '#000'}}>
            <Grid container item xs={3} sx={{justifyContent: 'space-between', alignItems: 'center', p: '0 !important'}}>
              <IconButton sx={{p: "0 !important"}}>
                <LogoutIcon sx={{width: '20px', height: '20px', }}></LogoutIcon>
              </IconButton>
              <Typography variant={"caption"}>© Spotify Tracker, 2023</Typography>
              <Typography variant={"caption"}>Version 1.0</Typography>
            </Grid>
            <Grid container item xs={9} sx={{justifyContent: 'center', p: '0 !important'}}>
              <Typography variant={"caption"} sx={{alignItems: 'center'}}>“She’s gonna be dead, I just got a magic wand. We can finally be together.”</Typography>
            </Grid>
        </Grid>
    )
}