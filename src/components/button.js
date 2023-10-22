import React from 'react';
import PropTypes from 'prop-types';
import { CONSTANTS } from 'src/bootstrap/constants';
import { Button } from '@mui/material';

export default function CustomButton({ children, ...restProps }) {
  return (
    <Button
      size="large"
      variant="contained"
      {...restProps}
      style={{ backgroundColor: CONSTANTS.STRAVA_ORANGE }}
    >
      {children}
    </Button>
  );
}
CustomButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
};
