import  React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import TabUser from './TabUser';





export default function ImageAvatars() {
  return (
  
    <Stack direction="row" spacing={2}>
 

      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 80, height: 80 ,  }}
      />
  
  
  <TabUser/>
    </Stack>



  );
}