import * as React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;

const Testing = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    // <Drawer
    //   variant="permanent"
    //   sx={{
    //     width: drawerWidth,
    //     flexShrink: 0,
    //     '& .MuiDrawer-paper': {
    //       width: drawerWidth,
    //       boxSizing: 'border-box',
    //     },
    //   }}
    // >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6">Dashboard</Typography>
        <List>
          <ListItem button component={Link} to="/admin">
            <ListItemText primary="Doctors Info" />
          </ListItem>
          <ListItem button component={Link} to="/about">
            <ListItemText primary="Patient Info" />
          </ListItem>
        </List>
      </Box>
    // </Drawer>
  );
};



export default Testing;
