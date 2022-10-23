import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from "axios";
import UserPage from '../UserPage/UserPage';

function CampaignDetailsPage() {

  const dispatch = useDispatch();
  const [campaignArray, setCampaignArray] = useState([]);
  const user = useSelector(store => store.user)




  const fetchCampaigns = () => {
    axios({
        method: 'GET',
        url: '/api/campaign/'
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




  return (
    <div className="container">
      
      <h2>Campaigns Details {user.location}</h2>

    </div>
  );
}

export default CampaignDetailsPage;