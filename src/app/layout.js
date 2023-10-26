import * as React from 'react';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import { Box, Grid, Card } from '@mui/material';

import Footer from '../components/footer/footer'

export default function RootLayout({ children }) {

  const boxStyle = {
    background: '#121212',
    borderRadius: '8px',
    height: '100%',
    maxWidth: '100%',
    p: '8px',
  };

  return (
    <html lang="en">
      <body style={{ height: '100%' }}>
        <ThemeRegistry>
            <Grid container spacing={1} sx={{ maxHeight: '100vh', mt: 0, p: '0 8px', position: 'relative'}}>
              
              {/* ------------------------ SIDE BAR ---------------------- */ }

              <Grid
    
                container
                direction="column"
                spacing={1}
                item
                xs={2.62}
                sm={2.62}
                sx={{
                  height: '100%',
                  pt: '0 !important',
                  mt: '0 !important',
                  position: 'fixed',
                  pb: '56px !important'
                }}
              >
                <Grid item xs={2.54}>
                  <Box sx={boxStyle}>sex</Box>
                </Grid>
                <Grid item xs={9.46}>
                  <Box sx={boxStyle}>sex</Box>
                </Grid>
              </Grid>

              {/* ----------------------- BOX DO CONTEÚDO ------------------------ */ }

              <Grid  item xs={9.38} sm={9.38} sx={{ml: 'auto', pb: '56x !important', maxHeight: '100vh'}}>
                <Box sx={{
                  background: '#121212',
                  borderRadius: '8px',
                  maxHeight: '100%',
                  p: '8px',
                  overflow: 'auto',
                }}>{children}</Box>
              </Grid>

              <Footer/>
            </Grid>
          
        </ThemeRegistry>
      </body>
    </html>
  );
}
