// eslint-disable-next-line
import IconButton from '@mui/material/IconButton';
import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ListSharpIcon from '@mui/icons-material/PlaylistAddCheckSharp';
import LoginSharpIcon from '@mui/icons-material/LoginSharp';
import { useAuth0 } from '@auth0/auth0-react'


const pages = ['Login'];
export const LoginButton= ()=> {
    const {loginWithRedirect} = useAuth0();
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ListSharpIcon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
            Home
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                onClick={()=>loginWithRedirect()}
                sx={{color: 'white', display: { xs: 'flex', md: 'none' }}}
                key={page}>
                {page}<LoginSharpIcon ></LoginSharpIcon>
              </Button>
            ))}
          </Box> 
          <Box >
              {/* <IconButton sx={{ p: 0 }}> */}
                {pages.map((page) => (
              <Button
                onClick={()=>loginWithRedirect()}
                key={page}
                sx={{color: 'white', display: { xs: 'none', md: 'flex' }}}>
                {page}<LoginSharpIcon ></LoginSharpIcon>
              </Button>
            ))}   
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
