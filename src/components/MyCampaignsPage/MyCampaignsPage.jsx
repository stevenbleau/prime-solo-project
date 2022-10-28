import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from "axios";
import CampaignCard from '../CampaignCard/CampaignCard';
import { useParams, useHistory } from 'react-router-dom';






function MyCampaignsPage() {

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(store => store.user)
  const [campaignArray, setCampaignArray] = useState([]);

  // Unique ID to link new campaign and new campaign items before SQL id is given
  //                      user ID   +     current number of campaigns + random number
  const createCampaignId = user.id + '.' + campaignArray.length + '.' + Math.random();
  console.log('create campaign id is : ', createCampaignId);



  const fetchCampaigns = () => {
    axios({
        method: 'GET',
        url: `/api/campaign/user/${user.id}`
    }).then (response => {
      console.log('the response.data is ', response.data);
      setCampaignArray(response.data);
      console.log('the campaignArray is: ', campaignArray);
    }).catch (error => {
      console.log('error in fetchCampaigns')
      console.log(error);
      alert('Something went wrong!')
    })
  }


  useEffect(() => {
    fetchCampaigns();
  }, []);


  return (
    <div className="container">
      
      <h2>My Campaigns</h2>
      <button onClick={() => history.push({pathname: '/create/campaign', state: {createCampaignId: createCampaignId}})}>Create Campaign</button>
      <ul>
          {campaignArray.map(campaign => {
            return <CampaignCard campaign={campaign} key={campaign.id}/>
          })}
      </ul>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default MyCampaignsPage;


