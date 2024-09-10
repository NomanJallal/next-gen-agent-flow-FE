import React from 'react';
import SelectBox from '../common/SelectBox';
import GroupsIcon from '@mui/icons-material/Groups';
import useStyles from './sidebar-jss';

const TeamSelector = () => {
    const { classes, cx } = useStyles();
    const [team, setTeam] = React.useState(1);

    const dummyoptions = [
        { label: 'Team Moon', value: 1 },
        { label: 'Team Star', value: 2 },
        { label: 'Team Galaxy', value: 3 },
    ]
    return (
        <div className={classes.teamSelector}>
            <GroupsIcon fontSize='large' className='teamIcon' sx={{ color: 'text.secondary' }} />
            <SelectBox
                value={team}
                onChnage={(e) => setTeam(e.target.value)}
                options={dummyoptions}
                fullWidth
            />
        </div>
    )
}

export default TeamSelector