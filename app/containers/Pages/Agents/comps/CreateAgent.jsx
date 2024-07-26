import React from 'react';
import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Stack, Avatar, Typography, alpha, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';

const CreateAgent = ({ type }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/app/agents/creation');
    }

    if (type == 'button') {
        return (
            <Button
                variant='contained'
                startIcon={<AddIcon />}
                onClick={handleClick}
            >
                Create Agent
            </Button>
        )
    }
    return (
        <Stack
            justifyContent={'center'}
            alignItems={'center'}
            gap={3}
            sx={{
                borderRadius: 2,
                backgroundColor: (theme) => alpha(theme.palette.primary.light, 0.7),
                color: 'primary.main',
                p: 3,
                minHeight: '200px',
                height: '100%',
                cursor: 'pointer',
                transition: 'background-color 0.1s ease-in',
                '&:hover': {
                    backgroundColor: 'primary.light',
                }
            }}
            onClick={handleClick}
        >
            <Avatar
                sx={{
                    width: 80,
                    height: 80,
                    color: '#fff',
                    backgroundColor: 'primary.main'
                }}
            >
                <PersonIcon fontSize='large' />
            </Avatar>
            <Typography variant='h5' fontWeight={500}>
                Create Agent
            </Typography>
        </Stack>
    )
}

CreateAgent.propTypes = {
    type: propTypes.string
}

export default CreateAgent
