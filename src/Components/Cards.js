import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';







const Cards=({title ,cases ,update ,color ,type})=>{
    return(
        
<Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: "3rem", mb: 0 }} color={{color}} gutterBottom>
          {title}
        </Typography>
        <Typography sx={{ mb: 0.5 }} color={{color}}>
         {cases}
        </Typography>
        <Typography variant="body2" style={{color:color,fontWeight:900}}>
          +{update} {type}
        </Typography>
      </CardContent>
     
    </Card>
      
    )
}
export default Cards;