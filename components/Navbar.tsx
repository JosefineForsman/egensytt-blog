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
import logo from '../public/egensytt-logo.svg'
import Image from 'next/image';

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
    <AppBar sx={{ display: "flex", alignItems: "center", width: "100%", bgcolor:"#EEEEEE" }}>
    <Toolbar sx={{ justifyContent: 'space-between', width:"100%"}}>
      {!isMobile && <Image  alt="logo" src={logo} ></Image>}
      {!isMobile && (
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs "
          sx={{ fontFamily: "Poppins"}}
        >
          <Tab label="Om Egensytt" value="/about" sx={{color:"#151864", fontSize:"18px"}}/>
          <Tab label="Bloggen" value="/" sx={{color:"#151864", fontSize:"18px"}} />
          <Tab label="Kontakt" value="/contact" sx={{color:"#151864", fontSize:"18px"}}/>
          <Tab label="Kategorier" value="/categories" sx={{color:"#151864", fontSize:"18px"}} />
        </Tabs>
      )}
      {isMobile && (
        <IconButton
          aria-label="menu"
          onClick={handleDrawerToggle}
          sx={{width:"100%", display:"flex", justifyContent:"flex-end"}}
        >
          <MenuIcon sx={{color:"#151864", display:"flex", alignItems:"right", marginRight:"14px"}}/>
        </IconButton>
      )}
    </Toolbar>
      <Drawer
        open={drawerOpen}
        onClose={handleDrawerToggle}
        variant="temporary"
        anchor="right"
        PaperProps={{ 
          style: { 
            width: '100%', 
            height: '100%', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          } 
        }}
      >
        <List sx={{color: "#151864"}}>
          <ListItem component={ButtonBase} onClick={() => handleChange(null, "/about")}>
            <ListItemText primary="Om Egensytt" sx={{textTransform:"uppercase"}}/>
          </ListItem>
          <ListItem component={ButtonBase} onClick={() => handleChange(null, "/")}>
            <ListItemText primary="Bloggen" sx={{textTransform:"uppercase"}} />
          </ListItem>
          <ListItem component={ButtonBase} onClick={() => handleChange(null, "/contact")}>
            <ListItemText primary="Kontakt" sx={{textTransform:"uppercase"}}/>
          </ListItem>
          <ListItem component={ButtonBase} onClick={() => handleChange(null, "/categories")}>
            <ListItemText primary="Kategorier" sx={{textTransform:"uppercase"}} />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;