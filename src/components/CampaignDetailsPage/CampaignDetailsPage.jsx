import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from "axios";
import UserPage from '../UserPage/UserPage';
import { useParams } from 'react-router-dom';


function CampaignDetailsPage() {

  const dispatch = useDispatch();
  const [campaignArray, setCampaignArray] = useState([]);
  const user = useSelector(store => store.user)
  const {id} = useParams();



  const fetchCampaigns = () => {
    axios({
        method: 'GET',
        url: `/api/campaign/${id}`
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
      
      <img src={campaignArray.image_url} />
      <h2>{campaignArray.title}</h2>
      <h5>{campaignArray.location}</h5>
      <h3>{campaignArray.description}</h3>
      

    </div>
  );
}

export default CampaignDetailsPage;