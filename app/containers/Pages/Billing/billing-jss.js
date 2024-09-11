import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const useStyles = makeStyles()((theme, _params, classes) => ({
    label: {
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        "svg": {
            width: 15,
            height: 15,
        }
    },
    chip: {
        borderRadius: 6,
        backgroundColor: alpha(theme.palette.primary.main, 0.1),
        color: theme.palette.primary.main
    },
    input: {
        ".MuiInputBase-root:has(.MuiInputAdornment-positionStart)": {
            paddingLeft: 0,
        },
        ".MuiInputBase-input": {
            paddingInline: theme.spacing(1.5)
        },
        ".MuiInputAdornment-positionStart": {
            borderRight: '1px solid',
            borderColor: theme.palette.divider,
            height: '100%',
            width: 'fit-content',
            height: '39px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBlock: theme.spacing(1),
            paddingInline: theme.spacing(1),
            marginRight: theme.spacing(1.5),
        },
        ".MuiInputAdornment-positionEnd": {
            borderLeft: '1px solid',
            borderColor: theme.palette.divider,
            height: '100%',
            width: 'fit-content',
            height: '39px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBlock: theme.spacing(1),
            paddingInline: theme.spacing(2),

        }
    },
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
