import React from 'react';
import propTypes from 'prop-types';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import useStyles from './table-jss';
import Row from './Row';

const WorkflowTable = ({ rows, hideHeader }) => {
    const { classes, cx } = useStyles();
    return (
        <Table sx={{ m: 0 }} aria-label="workflow table">
            <TableHead className={cx(hideHeader ? classes.noHeader : null, classes.tableHeader)}>
                <TableRow>
                    <TableCell className={'firstCell'} />
                    <TableCell className={'nameCell'} align="center">Name</TableCell>
                    <TableCell align="center">Current Status</TableCell>
                    <TableCell align="center">Total Enrolled</TableCell>
                    <TableCell align="center" className={'lastCell'}>Active Enrolled</TableCell>
                </TableRow>
            </TableHead>
            <TableBody className={classes.tableBody}>
                {rows?.length ? rows.map((row, index) => (
                    <Row key={index} row={row} />
                )) : (
                    <TableRow className={'noHover'}>
                        <TableCell align='center' colSpan={5}>No data</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}

WorkflowTable.propTypes = {
    rows: propTypes.array.isRequired,
    hideHeader: propTypes.bool,
}

export default WorkflowTable