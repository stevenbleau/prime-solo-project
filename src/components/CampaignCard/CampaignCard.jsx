import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from "axios";
import { useHistory } from 'react-router-dom'; 


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function CampaignCard(campaign) {

  const dispatch = useDispatch();
  const history = useHistory();
  console.log('The CAMPAIGN data is: ', campaign);
  console.log(campaign.campaign.title);

  const handleClick = event => { 
    console.log('div clicked', event.target);
    dispatch({type: 'SET_CAMPAIGN', payload: campaign});
    history.push(`/campaign/details/${campaign.campaign.id}`);
    
  };


  return (
    <div className="container" >
    <Card className="card" onClick={handleClick} sx={{
       maxWidth: 345,
       color: "rgb(1, 182, 175)",
       borderRadius: "20px",
       boxShadow: "0 1px 20px rgb(0, 0, 0, 0.1)"
       }} >
      
        <CardMedia
            component="img"
            alt="Donation Drive"
            height="140"
            image={campaign.campaign.campaign_image_url}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {campaign.campaign.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {campaign.campaign.description}
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