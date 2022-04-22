import * as React from 'react';

import Box from '@mui/material/Box';

import { Search } from '@mui/icons-material';

export default function Body() {

  const mapDataArray = [
    {
      'name': 'Sara Smith',
      'dob':'15 Aug 2020'
    },
     {
      'name': 'James Johnson',
      'dob':'No Clearance'
    },
      {
      'name': 'Patrice Page',
      'dob':'19 Aug 2020'
    },
       {
      'name': 'Derek Diamon',
      'dob':'21 Aug 2020'
  }

  ];




  return (
    <React.Fragment >
  
      <Box>
         <Box sx={{ bgcolor: '#e8f5fe', height: '100vh', width:'17%',paddingLeft:2,paddingTop:1 }} >
        
        
         <h4 >Patients</h4>
       
          <Search/>
        
         </Box>
      
      </Box>
       
       
    
   
      
    </React.Fragment>
  );
}


