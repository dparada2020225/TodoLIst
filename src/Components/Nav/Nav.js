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

import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';

import { useAuth0 } from '@auth0/auth0-react'
import {Profile} from "../Profile/Profile"

import Modal from '@mui/material/Modal';

import './Nav.css'


const drawerWidth = 240;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function Nav() {
    const { user, logout, isLoading } = useAuth0();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    if (isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Todo-List 
            </Typography>
          </Toolbar>
        </AppBar>

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
          anchor="left">
          
          {/* <Toolbar /> */}

          <img src={user.picture} alt={user.name} />
          <Divider />
          <List>
              <>
              <ListItem disablePadding>
                <ListItemButton onClick={handleOpen} >
                  
                  <div>
                  <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                  > 
                    <Box sx={style}>
                    <img src={user.picture} alt={user.name} />
                      <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                        ID: {user.sub}
                        <Divider />
                        Usuario: {user.nickname}
                        <Divider />
                        Nombres: {user.given_name}
                        <Divider />
                        Apellidos: {user.family_name }
                        <Divider />
                        Email: {user.email}
                        <Divider />
                        Idioma: {user.locale}
                        <Divider />
                        Actualizado en : {user.updated_at}
                      </Typography>
                      
                      
                    </Box>
                  </Modal>
                </div>
                  <ListItemIcon>  
                    <ManageAccountsSharpIcon/>
                  </ListItemIcon>
                  <ListItemText primary='Profile' />
                </ListItemButton>
              </ListItem>
            </>
          </List>

          

          <List>
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
        </List>
        </Drawer>

        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
          <Toolbar />
          <Typography paragraph>
          <div >    
            <Profile />   
          </div>
          </Typography>
        </Box>

      </Box>
    );
  }