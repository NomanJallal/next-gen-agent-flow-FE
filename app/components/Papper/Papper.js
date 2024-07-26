import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import useStyles from './papperStyle-jss';

function Papper(props) {
  const { classes, cx } = useStyles();
  const {
    children,
    whiteBg,
    disablePadding,
    noMargin,
    colorMode,
    overflowX,
    sx
  } = props;

  const color = mode => {
    switch (mode) {
      case 'light':
        return classes.colorLight;
      case 'dark':
        return classes.colorDark;
      default:
        return classes.none;
    }
  };
  return (
    <div>
      <Paper
        className={
          cx(
            classes.root,
            noMargin && classes.noMargin,
            disablePadding && classes.disablePadding,
            color(colorMode)
          )
        }
        elevation={0}
        sx={sx}
      >
        {children}
      </Paper>
    </div>
  );
}

Papper.propTypes = {
  children: PropTypes.node.isRequired,
  whiteBg: PropTypes.bool,
  colorMode: PropTypes.string,
  noMargin: PropTypes.bool,
  overflowX: PropTypes.bool,
};

Papper.defaultProps = {
  whiteBg: false,
  noMargin: false,
  colorMode: 'none',
  overflowX: false,
  icon: 'flag'
};

export default Papper;
