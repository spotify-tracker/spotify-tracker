'use client';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';

import Profile from '../../components/profile/Profile';

import Footer from '../../components/footer/footer'

// http://localhost:3000/
// http://localhost:3000/home
// http://localhost:3000/home

export default function HomePage() {
  const theme = useTheme();

  const boxStyle = {
    background: theme.palette.background.box,
    borderRadius: '8px',
    height: '100%',
    maxWidth: '100%',
    p: '8px',
  };

  return (
    <>

      <Grid container spacing={1} sx={{ height: '95vh', mt: 0, p: '8px' }}>
        <Grid
          container
          direction="column"
          spacing={1}
          item
          xs={4}
          sm={3}
          sx={{
            height: '100%',
            pt: '0 !important',
            mt: '0 !important',
          }}
        >
          <Grid item xs={3}>
            <Profile style={boxStyle} />
          </Grid>
          <Grid item xs={9}>
            <Box sx={boxStyle}>VOCE ESTA NA PAGINA HOME</Box>
          </Grid>
        </Grid>
        <Grid item xs={8} sm={9}>
          <Box sx={boxStyle}>teste1</Box>
        </Grid>
      </Grid>
      <Footer></Footer>
    </>
  );
}
