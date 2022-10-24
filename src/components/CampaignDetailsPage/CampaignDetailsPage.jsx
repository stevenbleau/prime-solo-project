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
      



        {/* <img src={campaignArray[0].campaign_image_url} />
        <h2>{campaignArray[0].title}</h2>
        <h5>{campaignArray[0].location}</h5>
        <h3>{campaignArray[0].description}</h3> */}


      <ul>
          {campaignArray.map(campaign => {
            return (
              <div key={campaign.item_id}>
                <h5>{campaign.item_name} {campaign.item_quantity}</h5>
                <h5>{campaign.item_description}</h5>
                <button>Pitch In</button>
              </div>
            );
          })}
      </ul>

      {/* <ul>
        {campaignArray.map(campaign => {
          return 
          <div>
            <h5>{campaign.item_name} {campaign.item_quantity}</h5>
            <h5>{campaign.item_description}</h5>
            <button>Pitch In</button>
          </div>    
        })}
      </ul> */}
      
    </div>
  );
}

export default CampaignDetailsPage;