import * as React from 'react';

import Box from '@mui/material/Box';


import { Avatar, Badge, Typography } from '@mui/material';


export default function Body() {



  const mapDataArray = [
    {
      'name': 'Sara Smith',
      'dob': '15 Aug 2020',
      'image': 'https://0.academia-photos.com/1146626/7780576/16075834/s200_sara.smith.jpg',
      'phone': '302-857-9685',
      'email': 'sarasmith@gmail.com',
      'gender': 'Female',
      'age': 45,
      'surgery-type': 'Rotator Cuff Repair',
      'surgery-date': '15 Aug 2020',
      'height': 163,
      'bmi': 19,
      'anesthesiologist': 'Dr. Christina Hardaway',
      'anesthesiologist-phone': '301-896-8745',
       'anesthesiologist-email':'christina@h3a.com'
    },
     {
      'name': 'James Johnson',
       'dob': 'No Clearance',
       'image':'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3999.png&w=350&h=254'
        
    },
      {
      'name': 'Patrice Page',
        'dob': '19 Aug 2020',
      'image':'https://i.pinimg.com/550x/47/5c/ec/475cec3ef72d6d12a512a4f4bb4d8740.jpg'
    },
       {
      'name': 'Derek Diamon',
         'dob': '21 Aug 2020',
      'image':'https://m.media-amazon.com/images/M/MV5BZGE2NDQyNjMtMGZiNi00ZWQ2LTkwNzAtMGFlMjIxZjE3MWQ1XkEyXkFqcGdeQXVyNTc1NTAyODM@._V1_UX180_CR0,0,180,180_AL_.jpg'
  }

  ];
  return (
    <React.Fragment >
  
      <Box>
         <Box sx={{ bgcolor: '#e8f5fe', height: '100vh', width:'17%',paddingLeft:2,paddingTop:1 }} >
        
        
         <h4 >Patients</h4>
       
          {mapDataArray.map(item => 
            <Box sx={{background:'#ffffff',mr:2, my:1.5,height:80,alignItems:'center',borderRadius:1,display:'flex',px:2}}>
              <Avatar src={item.image} sx={{width:58,height:58}}/>
              <Box sx={{mx:3,width:150}}>
                <Typography sx={{fontSize:18}} >{item.name}</Typography>
                <Typography sx={{fontSize:14,fontWeight:300}}>{ item.dob}</Typography>
              </Box >
             
             
              <Badge color='success' badgeContent=' '/>
             
            </Box>
       )}
          
         </Box>
        
      </Box>
    </React.Fragment>
  );
}


