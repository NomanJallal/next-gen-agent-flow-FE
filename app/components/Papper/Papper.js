import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import useStyles from './papperStyle-jss';

function Papper(props) {
  const { classes, cx } = useStyles();
  const {
    children,
    whiteBg,
    noMargin,
    colorMode,
    overflowX,
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
            color(colorMode)
          )
        }
        elevation={0}
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
