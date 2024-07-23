import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const useStyles = makeStyles()((theme, _params, classes) => ({
    tableHeader: {
        ".MuiTableRow-root": {
            border: 'none',
        },
        ".MuiTableCell-root": {
            borderBottom: 'none',
            fontSize: 16,
            fontWeight: 500,
            color: theme.palette.text.primary,
            paddingTop: 8,
            paddingInline: 0,
            width: 'calc(50% - 137px)',
            flex: 1,
            "&.firstCell": {
                width: 42,
                padding: 0,
            },
            "&.nameCell": {
                width: 90,
            },
            "&.lastCell": {
                width: 142,
            }
        }
    },
    noHeader: {
        opacity: 0,
        height: 0,
        visibility: 'hidden',
        display: 'table-footer-group',
        ".MuiTableCell-root": {
            padding: 0,
            height: 0,
        }
    },
    tableBody: {
        ".MuiTableRow-root": {
            border: 'none',
            position: 'relative',
            isolation: 'isolate',
            [`&:not(&.noHover)`]: {
                ".MuiTableCell-root": {
                    "&:after": {
                        left: 0,
                        top: 0,
                        content: "''",
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        zIndex: -1,
                        border: '1px solid transparent',
                        borderRadius: 60,
                    },
                    "&:hover": {
                        "&:after": {
                            borderColor: theme.palette.divider,
                        }
                    },
                }
            },
            ".MuiTableCell-root": {
                width: 'calc(50% - 137px)',
                borderBottom: 'none',
                position: 'static',
                '.Draft': {
                    backgroundColor: '#FCFCFE',
                    color: theme.palette.primary.main,
                },
                ".Publish": {
                    backgroundColor: '#DAF2EE',
                    color: '#2A7166',
                },
                "&.firstCell": {
                    width: 42,
                    padding: 0,
                    paddingLeft: 18
                },
                "&.nameCell": {
                    width: 90,
                },
                "&.lastCell": {
                    width: 142,
                }
            }
        },
    }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;