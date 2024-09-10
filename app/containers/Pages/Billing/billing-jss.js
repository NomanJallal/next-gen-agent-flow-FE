import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const useStyles = makeStyles()((theme, _params, classes) => ({
    inputEndAdornment: {
        borderLeft: '1px solid',
        borderColor: theme.palette.divider,
        height: '100%',
        width: 'fit-content',
        paddingInline: theme.spacing(2),
        paddingBlock: theme.spacing(1),
    }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
