import { AppBar, Avatar, Button, Container, Stack, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { IconButton } from '@mui/material';
// import { DataGrid } from '@mui/x-data-grid';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import { Badge } from '@mui/material';
import { Box } from '@mui/system';

export default function NavBar() {
  return (
      <React.Fragment>
       
          <AppBar style={{background:'#ffffff'}}>
             <Container maxWidth='xl' xs={{flex:0}}>
              <Toolbar>
                  
                       <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
                      </Typography>
                       <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
         
              color="inherit"
                      >
                          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                          <Button style={{color:'#000000',fontWeight:'bold',fontSize:16}}>
                              PATIENTS
                          </Button>
                          <Button style={{color:'#000000',fontWeight:'bold',fontSize:16}}>
                            CALENDERS
                          </Button>,
                          <Button style={{color:'#000000',fontWeight:'bold',fontSize:16}}>
                             USERS
                          </Button>
                          <Button style={{color:'#000000',fontWeight:'bold',fontSize:16}}>
                              BILLINGS
                          </Button>
                       </Box>
            </IconButton>
            <Stack>
            
            <Badge badgeContent={3} color='primary' style={{size:16 }}>
                  <NotificationsRoundedIcon fontSize='large' style={{color:'#000000'}}/>
                        </Badge>
            
            </Stack>
                      
                      <Avatar
                          alt="AB Devlliers"
                          src='https://wallpaperaccess.com/full/5015378.jpg'
                          sx={{width:34,height:34}}
                      />
              </Toolbar>
          </Container>
          </AppBar> 
          
      </React.Fragment>
  )
}




