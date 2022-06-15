import React from "react";
import { useAuth0 } from '@auth0/auth0-react'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import Divider from '@mui/material/Divider';


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

export const Profile= ()=> {
    const { user, isLoading } = useAuth0();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


     if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    
        
      // <div>
      //   {/* <img src={user.picture} alt={user.name} />
      //   <h2>{user.name}</h2>
      //   <h2>{user.sub}</h2>
      //   <p>Email: {user.email}</p> */}
      //   <h2>1  {user.name}</h2>
      //   <h2>2  {user.given_name}</h2>
      //   <h2>3  {user.family_name}</h2>
      //   {/* <h2>4  {user.middle_name}</h2> */}
      //   <h2>5  {user.nickname}</h2>
      //   {/* <h2>6  {user.preferred_username}</h2>
      //   <h2>7  {user.profile}</h2> */}
      //   <h2>8  {user.picture}</h2>
      //   {/* <h2>9  {user.website}</h2> */}
      //   <h2>10 {user.email}</h2>
      //   {/* <h2>11 {user.email_verified}</h2>
      //   <h2>12 {user.gender}</h2>
      //   <h2>13 {user.birthdate}</h2>
      //   <h2>14 {user.zoneinfo}</h2> */}
      //   <h2>15 {user.locale}</h2>
      //   {/* <h2>16 {user.phone_number}</h2>
      //   <h2>17 {user.phone_number_verified}</h2>
      //   <h2>18 {user.address}</h2> */}
      //   <h2>19 {user.updated_at}</h2>
      //   <h2>20 {user.sub}</h2>
      //   {/* <h2>21 {user.key}</h2> */}

        
      // </div>

      <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
                    <img src={user.picture} alt={user.name} />
                      <Typography id="keep-mounted-modal-description">
                        ID: {user.sub}
                      </Typography>
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
      
    
  );
}
// 104768838818026288668       05:28 a.m   12/06/2022