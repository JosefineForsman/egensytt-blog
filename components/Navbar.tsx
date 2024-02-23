import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useRouter } from 'next/router';

const Navbar: React.FC = () => {
  const router = useRouter();
  const [value, setValue] = React.useState<string>(router.pathname);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    router.push(newValue);
  };

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
          <Tab label="Blog" value="/" />
          <Tab label="About Us" value="/about" />
          <Tab label="Contact" value="/contact" />
          <Tab label="Categories" value="/categories" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;