import React from 'react';
import {
    CakeOutlined,
    GroupOutlined,
    PersonAddAlt1Outlined,
    BlockOutlined,
    LabelOutlined,
    DateRangeOutlined,
    NoteOutlined,
    FileCopyOutlined,
    CheckOutlined,
} from "@mui/icons-material"

export const triggers = [
    {
        label: 'Birthday reminder',
        icon: <CakeOutlined />,
    },
    {
        label: 'Contact Changed',
        icon: <GroupOutlined />,
    },
    {
        label: 'Contact Created',
        icon: <PersonAddAlt1Outlined />,
    },
    {
        label: 'Contact DND',
        icon: <BlockOutlined />,
    },
    {
        label: 'Contact Tag',
        icon: <LabelOutlined />,
    },
    {
        label: 'Custom Date Reminder',
        icon: <DateRangeOutlined />,
    },
    {
        label: 'Note Added',
        icon: <NoteOutlined />,
    },
    {
        label: 'Note Changed',
        icon: <FileCopyOutlined />,
    },
    {
        label: 'Task Added',
        icon: <CheckOutlined />,
    },
]