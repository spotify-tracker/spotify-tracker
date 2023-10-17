'use client';

import { Box } from '@mui/material';

export default function Profile({ style }) {
  const boxStyle = {
    ...style,
  };

  const contentStyle = {
    overflow: 'hidden',
  };

  return (
    <>
      <Box sx={boxStyle}></Box>
    </>
  );
}
