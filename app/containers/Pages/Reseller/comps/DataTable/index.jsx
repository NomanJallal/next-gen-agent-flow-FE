import React from 'react';
import { Papper } from 'enl-components';
import { Stack, Box, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { SearchInput } from '../../../../../components/common';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DownloadIcon from '@mui/icons-material/Download';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const DataTable = () => {

    const rows = [
        { id: 1, client_id: '55.21454685', client_name: 'John Testing a...', call_pause: false, inbound_quote: 0.30, outbound_quote: 0.30, acct_balance: 9.30, projected_outbound: 31.02, projected_inbound: 31.02, total_min: 4.40 },
        { id: 2, client_id: '55.21454685', client_name: 'John Testing a...', call_pause: false, inbound_quote: 0.30, outbound_quote: 0.30, acct_balance: 9.30, projected_outbound: 31.02, projected_inbound: 31.02, total_min: 4.40 },
        { id: 3, client_id: '55.21454685', client_name: 'John Testing a...', call_pause: true, inbound_quote: 0.30, outbound_quote: 0.30, acct_balance: 9.30, projected_outbound: 31.02, projected_inbound: 31.02, total_min: 4.40 },
        { id: 4, client_id: '55.21454685', client_name: 'John Testing a...', call_pause: false, inbound_quote: 0.30, outbound_quote: 0.30, acct_balance: 9.30, projected_outbound: 31.02, projected_inbound: 31.02, total_min: 4.40 },
    ];

    const columns = [
        { field: 'client_id', headerName: 'Client ID', width: 150, flex: 1 },
        { field: 'client_name', headerName: 'Client Name', width: 150, flex: 1 },
        { field: 'call_pause', headerName: 'Call Pause', width: 150, flex: 1, renderCell: (params) => <Checkbox checked={params.row.call_pause} /> },
        { field: 'inbound_quote', headerName: 'Inbound Quote', width: 150, flex: 1 },
        { field: 'outbound_quote', headerName: 'Outbound Quote', width: 150, flex: 1 },
        { field: 'acct_balance', headerName: 'Account Balance', width: 150, flex: 1 },
        { field: 'projected_outbound', headerName: 'Projected Outbound', width: 150, flex: 1 },
        { field: 'projected_inbound', headerName: 'Projected Inbound', width: 150, flex: 1 },
        { field: 'total_min', headerName: 'Total Minutes', width: 150, flex: 1 },
        {
            field: 'actions',
            headerAlign: 'center',
            align: 'center',
            headerName: 'Actions',
            maxWidth: 150,
            minWidth: 150,
            flex: 1,
            renderCell: () => (
                <IconButton size='small'>
                    <MoreVertIcon sx={{ fontSize: 18, color: 'text.primary' }} />
                </IconButton>
            )
        },
    ];

    return (
        <Papper disablePadding sx={{ minHeight: 'unset !important' }}>
            <Stack
                direction={'row'}
                alignItems={'center'}
                gap={1.5}
                sx={{
                    p: 3,
                }}
            >
                <SearchInput
                    value=""
                    onChange={() => { }}
                    placeholder="Search"
                />
                <Button
                    variant="outlined"
                    size='small'
                    sx={{ borderColor: 'divider', color: 'text.secondary' }}
                    startIcon={<FilterListIcon fontSize='small' />}
                    endIcon={<ArrowDropDownIcon fontSize='small' />}
                >
                    Filter
                </Button>
                <Button
                    variant="outlined"
                    size='small'
                    sx={{ borderColor: 'divider', color: 'text.secondary' }}
                    startIcon={<DownloadIcon fontSize='small' />}
                >
                    Download
                </Button>
            </Stack>
            <Box sx={{ width: '100%', height: 400, px: 3, pb: 3 }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    disableColumnMenu
                    disableColumnFilter
                    disableColumnSorting
                    disableRowSelectionOnClick
                    hideFooter
                    columnHeaderHeight={42}
                    sx={{
                        ".MuiDataGrid-columnHeader": {
                            ".MuiDataGrid-columnHeaderTitle": {
                                fontWeight: 500,
                                fontFamily: 'inter',
                            },
                            "&:not(:last-child)": {
                                borderRight: 1,
                                borderRightColor: 'divider',
                            },
                        },
                        ".MuiDataGrid-cell": {
                            "&:not(:last-child)": {
                                borderRight: 1,
                                borderRightColor: 'divider',
                            },
                        },
                    }}
                />
            </Box>
        </Papper>
    )
}

export default DataTable
