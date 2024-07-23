import React, { useState } from 'react';
import propTypes from 'prop-types';
import { TableCell, TableRow, Collapse, Chip } from '@mui/material';
import { IconButton } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import WorkflowTable from './WorkflowTable';
import ContextMenu from './ContextMenu';

const Row = ({ row }) => {
    const [show, setShow] = useState(false);
    const [contextMenu, setContextMenu] = useState(null);
    const [contextMenuData, setContextMenuData] = useState(null);

    const onContextMenu = (e, data) => {
        e.preventDefault();
        if (!e.currentTarget) return;
        if (!data) {
            setContextMenuData(null);
            return;
        }
        setContextMenuData(data);
        setContextMenu({ mouseX: e.clientX - 2, mouseY: e.clientY - 4 });
    };

    return (
        <>
            <TableRow onContextMenu={(e) => onContextMenu(e, row)}>
                <TableCell className={'firstCell'}>
                    {row?.subflow?.length ? (
                        <IconButton size='small' sx={{
                            border: 1,
                            borderColor: 'divider',
                            borderRadius: '4px',
                            width: '24px',
                            height: '24px',
                            color: 'text.primary'
                        }}
                            onClick={() => setShow(!show)}
                        >
                            {show ? <KeyboardArrowUp fontSize='small' /> : <KeyboardArrowDown fontSize='small' />}
                        </IconButton>
                    ) : null}
                </TableCell>
                <TableCell className={'nameCell'} align="center">{row.name}</TableCell>
                <TableCell align="center">
                    <Chip label={row.status} className={row.status} />
                </TableCell>
                <TableCell align="center">{row.totalEnrolled}</TableCell>
                <TableCell align="center" className='lastCell'>{row.activeEnrolled}</TableCell>
            </TableRow>

            <TableRow className={'noHover'}>
                <TableCell style={{ padding: 0 }} colSpan={5}>
                    <Collapse in={row?.subflow?.length && show} timeout="auto" unmountOnExit>
                        <WorkflowTable
                            hideHeader={true}
                            rows={row.subflow}
                        />
                    </Collapse>
                </TableCell>
            </TableRow>

            {/* Conntext Menu */}
            <ContextMenu
                anchorEl={contextMenu}
                setAnchorEl={setContextMenu}
                row={contextMenuData}
                setRow={setContextMenuData}
            />
        </>
    )
}


Row.propTypes = {
    rows: propTypes.object.isRequired,
}

export default Row