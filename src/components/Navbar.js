import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  makeStyles, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText 
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontWeight: 700,
  },
  navLinks: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  navLink: {
    color: 'white',
    marginLeft: theme.spacing(2),
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  menuButton: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerList: {
    width: 250,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Dashboard', path: '/dashboard' },
    { title: 'Recipes', path: '/recipes' },
    { title: 'Inventory', path: '/inventory' },
    { title: 'Financials', path: '/financials' },
  ];

  const drawerContent = (
    <List className={classes.drawerList}>
      {navLinks.map((link) => (
        <ListItem 
          button 
          key={link.title} 
          component={Link} 
          to={link.path}
          onClick={handleDrawerToggle}
        >
          <ListItemText primary={link.title} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Restaurant Manager
          </Typography>
          
          <div className={classes.navLinks}>
            {navLinks.map((link) => (
              <Button 
                key={link.title} 
                color="inherit" 
                component={Link} 
                to={link.path}
                className={classes.navLink}
              >
                {link.title}
              </Button>
            ))}
          </div>

          <Button color="inherit">Login</Button>
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {drawerContent}
      </Drawer>
    </div>
  );
};

export default Navbar;
