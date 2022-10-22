import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from "axios";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function CampaignCard(campaign) {

  
  const handleClick = event => { 
    console.log('div clicked', event.target);
  };


  return (
    <div className="container" onClick={handleClick}>
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            alt="Donation Drive"
            height="140"
            image="https://www.supportcaliforniahospital.org/image/ways-to-give/iStock-510150904.jpg"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            DME Donation Drive
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Looking for DME donations for hospital
        </Typography>
        </CardContent>
        <CardActions>
        {/* <Button size="small">Share</Button> */}
        {/* <Button size="small">Learn More</Button> */}
        </CardActions>
    </Card>
    </div>


  );
}

export default CampaignCard;