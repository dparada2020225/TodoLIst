import React from "react";
import { useAuth0 } from '@auth0/auth0-react'
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
import Modal from '@mui/material/Modal';
import MailIcon from '@mui/icons-material/Mail';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';
import TodoApp from "../TodoList/TodoApp"
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
              Todo-List of {user.name}
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

          <img src={user.picture} alt={user.name} />

          <Divider />

          <List>             
              <ListItem disablePadding>
                <ListItemButton onClick={handleOpen} >
                  <ListItemIcon>  
                    <ManageAccountsSharpIcon/>
                  </ListItemIcon>
                  <ListItemText primary='Profile' />
                </ListItemButton>  
                <div>
                  <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"> 
                    <Box sx={style}>
                    <img src={user.picture} alt={user.name} />
                      {/* <Typography id="keep-mounted-modal-description">
                        ID: {user.sub}
                      </Typography> */}
                      <Divider/>
                      <Typography id="keep-mounted-modal-description">
                        User: {user.nickname}
                      </Typography>
                      <Divider/>
                      <Typography id="keep-mounted-modal-description">
                        Names: {user.given_name}
                      </Typography>
                      <Divider/>
                      <Typography id="keep-mounted-modal-description">
                        Surnames: {user.family_name }
                      </Typography>
                      <Divider/>
                      <Typography id="keep-mounted-modal-description">
                        E-mail: {user.email}
                      </Typography>
                      <Divider/>
                      <Typography id="keep-mounted-modal-description">
                        Idiom: {user.locale}
                      </Typography>
                      <Divider/>
                      <Typography id="keep-mounted-modal-description">
                        Registred: {user.updated_at}
                        {/* Actualizado en : {user.updated_at} */}
                      </Typography>
                      <Divider/>
                    </Box>
                  </Modal>
                </div>

              </ListItem>    
          </List>

          <Divider />

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
            <TodoApp/>
        </Box>

      </Box>
    );
  }
  export default Nav;