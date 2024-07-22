import React from 'react';
import { useLocation } from 'react-router-dom';
import CreateAgent from '../../containers/Pages/Agents/comps/CreateAgent';
import { Button } from '@mui/material';

const HeaderActions = () => {
    const location = useLocation();
    const history = { location };
    const parts = history?.location?.pathname?.split('/');
    const place = parts[parts?.length - 1]?.replace('-', ' ');

    switch (place) {
        case 'agents':
            return <CreateAgent type={'button'} />;
        case 'creation':
            return <Button variant="contained">Save & Continue</Button>;
        default:
            return null;
    }
}

export default HeaderActions