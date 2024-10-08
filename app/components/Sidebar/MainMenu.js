import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Icon from '@mui/material/Icon';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import useStyles from './sidebar-jss';
import { Stack } from '@mui/material';

// const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
//   return <NavLink to={props.to} {...props} />; // eslint-disable-line
// });

// eslint-disable-next-line
function MainMenu(props) {
  const { classes, cx } = useStyles();
  const location = useLocation();
  const {
    openSubMenu,
    open,
    dataMenu,
    toggleDrawerOpen,
    loadTransition
  } = props;

  const handleTransition = () => {
    toggleDrawerOpen();
    loadTransition(false);
  };

  const getMenus = (menuArray, paddingLevel) => menuArray.map((item, index) => {
    if (item.child || item.linkParent) {
      return (
        <div key={index.toString()}>
          <ListItem
            button
            to={item.linkParent ? item.linkParent : '#'}
            sx={{ marginLeft: !item.icon ? paddingLevel : 0 }}
            className={
              cx(
                classes.head,
                item.icon ? classes.iconed : '',
                open.indexOf(item.key) > -1 ? classes.opened : '',
              )
            }
            onClick={() => openSubMenu(item.key, item.keyParent)}
          >
            {item.icon && (
              <ListItemIcon className={classes.icon}>
                <Icon>{item.icon}</Icon>
              </ListItemIcon>
            )}
            <ListItemText classes={{ primary: classes.primary }} primary={item.name} />
            {!item.linkParent && (
              <span>
                {open.indexOf(item.key) > -1 ? <ExpandLess /> : <ExpandMore />}
              </span>
            )}
          </ListItem>
          {!item.linkParent && (
            <Collapse
              component="div"
              className={cx(
                classes.nolist,
                (item.keyParent ? classes.child : ''),
              )}
              in={open.indexOf(item.key) > -1}
              timeout="auto"
              unmountOnExit
            >
              <List className={classes.dense} component="nav">
                {getMenus(item.child, item.level)}
              </List>
            </Collapse>
          )}
        </div>
      );
    }
    if (item.title) {
      return (
        <ListSubheader
          disableSticky
          key={index.toString()}
          component="div"
          className={classes.title}
        >
          {item.name}
        </ListSubheader>
      );
    }
    if (item.parent) {
      return (
        <ListItem
          sx={{ marginLeft: !item.icon ? paddingLevel : 0 }}
          key={index.toString()}
          className={
            cx(
              classes.parantLink,
              item.icon ? classes.iconed : '',
              (item.link === '/app' && location.pathname !== '/app') ? 'rootPath' : ''
            )
          }
          component={NavLink}
          to={item.link}
          onClick={() => handleTransition()}
        >
          {item.icon && (
            <ListItemIcon className={classes.icon}>
              <Icon className='material-icons-outlined'>{item.icon}</Icon>
            </ListItemIcon>
          )}
          <ListItemText classes={{ primary: classes.primary }} primary={item.name} />
        </ListItem>
      )
    }
    return (
      <ListItem
        key={index.toString()}
        className={cx(classes.nested, (item.link === '/app' && location.pathname !== '/app') ? 'rootPath' : '')}
        component={NavLink}
        to={item.link}
        onClick={() => handleTransition()}
      >
        <Box
          sx={{
            flex: 1,
            pl: paddingLevel,
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <ListItemText classes={{ primary: classes.primary }} primary={item.name} />
          {item.badge && (
            <Chip color="primary" label={item.badge} className={classes.badge} />
          )}
        </Box>
      </ListItem>
    );
  });

  return (
    <Stack className={classes.navWrapper} gap={2}>
      {getMenus(dataMenu)}
    </Stack>
  );
}

MainMenu.propTypes = {
  open: PropTypes.array.isRequired,
  openSubMenu: PropTypes.func.isRequired,
  toggleDrawerOpen: PropTypes.func.isRequired,
  loadTransition: PropTypes.func.isRequired,
  dataMenu: PropTypes.array.isRequired,
};

const openAction = (key, keyParent) => ({ type: 'OPEN_SUBMENU', key, keyParent });

const mapStateToProps = state => ({
  open: state.ui.subMenuOpen
});

const mapDispatchToProps = dispatch => ({
  openSubMenu: bindActionCreators(openAction, dispatch)
});

const MainMenuMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMenu);

export default MainMenuMapped;
