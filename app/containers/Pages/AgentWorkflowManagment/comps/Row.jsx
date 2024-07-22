import React from 'react';
import propTypes from 'prop-types';
import { TableCell, TableRow, Collapse, Chip } from '@mui/material';
import { IconButton } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import WorkflowTable from './WorkflowTable';
import useStyles from './table-jss';

const Row = ({ row }) => {
    const [show, setShow] = React.useState(false);
    const { classes } = useStyles();
    return (
        <>
            <TableRow>
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

            {/* {row?.subflow?.length && show ? ( */}
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
            {/* ) : null} */}
        </>
    )
}


Row.propTypes = {
    rows: propTypes.object.isRequired,
}

export default Row