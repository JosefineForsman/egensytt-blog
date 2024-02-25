import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';
import ButtonBase from '@mui/material/ButtonBase';

const Navbar = () => {
  const router = useRouter();
  const [value, setValue] = React.useState(router.pathname);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event: React.SyntheticEvent | null, newValue: string) => {
    setValue(newValue);
    router.push(newValue);
    if (isMobile) setDrawerOpen(false);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar color="default" sx={{ display: "flex", alignItems: "center" }}>
    <Toolbar sx={{ justifyContent: 'space-between' }}>
  {!isMobile && (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="nav tabs example"
      sx={{ fontFamily: "Poppins" }}
    >
      <Tab label="Om Minifix" value="/about" />
      <Tab label="Bloggen" value="/" />
      <Tab label="Kontakt" value="/contact" />
      <Tab label="Kategorier" value="/categories" />
    </Tabs>
  )}
  {isMobile && (
    <IconButton
      edge="end"
      color="inherit"
      aria-label="menu"
      onClick={handleDrawerToggle}
    >
      <MenuIcon />
    </IconButton>
  )}
</Toolbar>
      <Drawer
        open={drawerOpen}
        onClose={handleDrawerToggle}
        variant="temporary"
        anchor="right"
      >
        <List>
          <ListItem component={ButtonBase} onClick={() => handleChange(null, "/about")}>
            <ListItemText primary="Om Minifix" />
          </ListItem>
          <ListItem component={ButtonBase} onClick={() => handleChange(null, "/")}>
            <ListItemText primary="Bloggen" />
          </ListItem>
          <ListItem component={ButtonBase} onClick={() => handleChange(null, "/contact")}>
            <ListItemText primary="Kontakt" />
          </ListItem>
          <ListItem component={ButtonBase} onClick={() => handleChange(null, "/categories")}>
            <ListItemText primary="Kategorier" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;