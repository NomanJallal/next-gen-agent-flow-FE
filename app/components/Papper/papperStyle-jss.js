import { makeStyles } from 'tss-react/mui';
import { darken } from '@mui/material/styles';

const useStyles = makeStyles()((theme, _params, classes) => ({
  root: {
    height: 'auto',
    minHeight: 'calc(100svh - 96px)',
    padding: theme.spacing(2),
    boxShadow: theme?.shade?.light,
    color: theme.palette.text.primary,
    borderRadius: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: `${theme.spacing(3)} ${theme.spacing(3)}`
    },
    [`&.${classes.noMargin}`]: {
      margin: 0
    },
    [`&.${classes.disablePadding}`]: {
      padding: 0
    },
  },
  colorDark: {
    backgroundColor: theme.palette.mode === 'dark' ? darken(theme.palette.primary.dark, 0.5) : theme.palette.primary.main,
    [`& .${classes.title}`]: {
      color: theme.palette.grey[100],
    },
    [`& .${classes.description}`]: {
      color: theme.palette.grey[100],
    }
  },
  colorLight: {
    backgroundColor: theme.palette.mode === 'dark' ? darken(theme.palette.primary.dark, 0.5) : theme.palette.primary.light,
    [`& .${classes.title}`]: {
      color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.primary.dark,
    },
    [`& .${classes.description}`]: {
      color: theme.palette.text.primary,
    }
  },
  overflowX: {
    width: '100%',
    overflowX: 'auto',
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
