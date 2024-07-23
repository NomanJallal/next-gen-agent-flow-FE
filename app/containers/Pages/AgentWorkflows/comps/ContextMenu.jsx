import React from 'react';
import propTypes from 'prop-types';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import {
    EditOutlined,
    DriveFileRenameOutlineOutlined,
    OpenInNewOutlined,
    PauseCircleOutlined,
    DriveFileMoveOutlined,
    FileCopyOutlined,
    ContentCopyOutlined,
    DeleteOutlined,
} from '@mui/icons-material';
import useStyles from './contextMenu-jss';

const ContextMenu = (props) => {
    const {
        anchorEl,
        setAnchorEl,
        row,
        setRow,
    } = props
    const { classes } = useStyles();

    const handleClose = () => {
        setAnchorEl(null);
    };

    const menu = [
        {
            label: 'Edit Workflow',
            icon: <EditOutlined />,
            action: () => { console.log('Context Menu Clicked'); }
        },
        {
            label: 'Rename Workflow',
            icon: <DriveFileRenameOutlineOutlined />,
            action: () => { console.log('Context Menu Clicked'); }
        },
        {
            label: 'Open in new Window',
            icon: <OpenInNewOutlined />,
            action: () => { console.log('Context Menu Clicked'); }
        },
        {
            label: 'Draft Workflow',
            icon: <PauseCircleOutlined />,
            action: () => { console.log('Context Menu Clicked'); }
        },
        {
            label: 'Move to Folder',
            icon: <DriveFileMoveOutlined />,
            action: () => { console.log('Context Menu Clicked'); }
        },
        {
            label: 'Duplicate Workflow',
            icon: <FileCopyOutlined />,
            action: () => { console.log('Context Menu Clicked'); }
        },
        {
            label: 'Copy to Sub-Account',
            icon: <ContentCopyOutlined />,
            action: () => { console.log('Context Menu Clicked'); }
        },
        {
            label: 'Delete Workflow',
            icon: <DeleteOutlined />,
            action: () => { console.log('Context Menu Clicked'); }
        }
    ];

    return (
        <Menu
            open={anchorEl !== null}
            onClose={handleClose}
            anchorReference="anchorPosition"
            anchorPosition={
                anchorEl !== null
                    ? { top: anchorEl.mouseY, left: anchorEl.mouseX }
                    : undefined
            }
            componentsProps={{
                root: {
                    onContextMenu: (e) => {
                        e.preventDefault();
                        handleClose();
                    }
                }
            }}
        >
            <Box sx={{ minWidth: '220px' }}>
                <List sx={{ py: 0, px: 1 }}>
                    {menu.map((item, i) => (<div key={i}>
                        <ListItem
                            className={classes.listItem}
                            disablePadding
                            onClick={() => {
                                if (!item?.action) return
                                item?.action();
                            }}
                        >
                            <ListItemButton>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.label}
                                />
                            </ListItemButton>
                        </ListItem>
                        {i === 1 || i === 3 || i === 6 ? (
                            <Divider sx={{ my: 1 }} />
                        ) : null}
                    </div>))}
                </List>
            </Box>
        </Menu>
    )
}

ContextMenu.propTypes = {
    anchorEl: propTypes.object,
    setAnchorEl: propTypes.func,
    row: propTypes.object,
    setRow: propTypes.func,
}

export default ContextMenu