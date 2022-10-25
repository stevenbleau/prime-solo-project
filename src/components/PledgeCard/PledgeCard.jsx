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



function PledgeCard(pledge) {

  const dispatch = useDispatch();
  const history = useHistory();




  console.log('The PLEDGE data is: ', pledge);

  const handleClick = event => { 
    console.log('div clicked', event.target);
    // dispatch({type: 'SET_CAMPAIGN', payload: campaign});
    // history.push(`/campaign/details/${campaign.campaign.id}`);
  };


  return (

    <div className="container" onClick={handleClick} key={pledge.id}>
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            alt="Donation Drive"
            height="140"
            image={pledge.pledge.pledge_image_url}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {pledge.pledge.pledge_description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {pledge.pledge.pledge_message}
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

export default PledgeCard;