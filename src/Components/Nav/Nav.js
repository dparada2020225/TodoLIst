import React from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';

import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';

import './Nav.css'

import { useAuth0 } from '@auth0/auth0-react'
import {LoginButton} from "../Login/Login"
import {LogoutButton} from "../Logout/Logout"
import {Profile} from "../Profile/Profile"

const drawerWidth = 240;

export function Nav() {
    const { user, isAuthenticated } = useAuth0();
    const {logout} = useAuth0();
    const {loginWithRedirect} = useAuth0();
    
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Todo List
            </Typography>
          </Toolbar>
        </AppBar>
        asdasdasd
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          
          <Toolbar />
          <Divider />
          <img src={user.picture} alt={user.name} />
          
          <List>
            

              {isAuthenticated ? (
                <>{[user.name,user.email, 'Profile'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton >
                  <ListItemIcon>
                    {index === 0 ? <PersonIcon /> : <></>}
                    {index === 1 ? <MailIcon /> :<></>}
                    {index === 2 ? <ManageAccountsSharpIcon/> :<></>}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}</>
              ) : (
                <>{["Login"].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton onClick={()=>loginWithRedirect()}>
                      <ListItemIcon>
                        {index === 0 ? <LoginIcon /> : <></>}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}</>
              )}
           
          </List>

          
          <Divider />
          <List>
          {isAuthenticated ? (
          <>
            {['Logout'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={() => logout({ returnTo: window.location.origin })} >
                  <ListItemIcon>
                    {index % 2 === 0 ? <LogoutIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
            
          </>
        ) : (
          <></>
        )}
            
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          <Typography paragraph>
          
          <div >
          {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
            
          </>
        ) : (
          <LoginButton />
          
        )}
        </div>
          </Typography>
        </Box>
      </Box>
    );
  }