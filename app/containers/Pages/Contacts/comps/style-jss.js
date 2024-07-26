import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const useStyles = makeStyles()((theme, _params, classes) => ({
    // sider
    listWrapper: {
        flexGrow: 1,
        height: 0,
        overflow: 'auto',
        paddingBlock: theme.spacing(2),
        [`.${classes.empty}`]: {
            justifyContent: 'center',
            alignItems: 'center',
            width: '80%',
            margin: 'auto',
            maxWidth: 160,
            padding: theme.spacing(4),
            borderRadius: theme.spacing(1),
            border: `1px solid ${theme.palette.divider}`,
            gap: theme.spacing(1),
            ".MuiSvgIcon-root": {
                fontSize: 56,
                color: theme.palette.primary.main
            }
        }
    }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
