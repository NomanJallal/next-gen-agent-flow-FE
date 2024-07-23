import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme, _params, classes) => ({
    listItem: {
        ".MuiButtonBase-root": {
            paddingInline: 12,
            paddingRight: 16,
            paddingBlock: 6,
            borderRadius: 8,
            ".MuiListItemIcon-root": {
                marginRight: 8,
                minWidth: 'unset',
            },
            ".MuiTypography-root": {
                fontSize: 16
            }
        }
    }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;