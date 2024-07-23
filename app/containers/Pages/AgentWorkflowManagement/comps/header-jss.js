import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const useStyles = makeStyles()((theme, _params, classes) => ({
    tabList: {
        borderRadius: 0,
        ".MuiTabs-flexContainer": {
            gap: 24,
        },
        ".MuiTab-root": {
            paddingInline: 0,
            paddingBlock: 16,
            width: 'auto',
            minWidth: 'unset',
            fontSize: 16,
            fontWeight: 500,
            textTransform: 'capitalize',
            color: '#3F4A5D',
            borderBottom: `2px solid ${alpha('#3F4A5D', 0.5)}`,
            '&.Mui-selected': {
                color: theme.palette.primary.main,
            }
        },
        ".MuiTabs-indicator": {
            borderRadius: 0,
            height: 2,
        }
    }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
