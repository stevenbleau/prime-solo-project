import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from "axios";
import CampaignCard from '../CampaignCard/CampaignCard';





function MyCampaignsPage() {

  const dispatch = useDispatch();
  const [campaignArray, setCampaignArray] = useState([]);
  const array = [];


  const fetchCampaigns = () => {
    axios({
        method: 'GET',
        url: '/api/campaign'
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
      <button>Create Campaign</button>
      <ul>
        {
          campaignArray.map(campaign => {
            return <CampaignCard campaign={campaign}/>
          })
        }
      </ul>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default MyCampaignsPage;