import React from 'react';
import { Box, Typography } from '@mui/material';
import { CONSTANTS } from 'src/bootstrap/constants';
import { CenteredDiv } from 'src/components/styleComponents';
import { Logo, Button } from 'src/components';

export default function Login() {
  return (
    <CenteredDiv>
      <Logo />
      <Box style={{ margin: '1.5rem 3rem 3rem' }}>
        <Typography variant="h5" style={{ marginBottom: '2rem' }}>
          *YOUR_APP*
        </Typography>
        <Typography variant="h5">
          *Description of what YOUR_APP does*
        </Typography>
      </Box>
      <Button href={CONSTANTS.STRAVA_AUTH_LINK}>Sign In With Strava</Button>
    </CenteredDiv>
  );
}
