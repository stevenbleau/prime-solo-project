import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from "axios";
import UserPage from '../UserPage/UserPage';
import { useParams } from 'react-router-dom';


function CampaignDetailsPage() {

  const dispatch = useDispatch();
  // let [campaign, setCampaign] = useState([]);
  const [itemList, setItemList] = useState([]);
  const user = useSelector(store => store.user)
  const campaign = useSelector(store => store.campaign)
  const {id} = useParams();



// GET REQUEST ORIGINALLY USED TO GET CAMPAIGN DETAILS BEFORE USING REDUCER
  // const fetchCampaign = () => {
  //   axios({
  //       method: 'GET',
  //       url: `/api/campaign/${id}`
  //   }).then (response => {
  //     console.log('the capaign response.data is ', response.data);
  //     setCampaign(response.data);
  //   }).catch (error => {
  //     console.log('error in fetchCampaigns')
  //     console.log(error);
  //     alert('Something went wrong!')
  //   })
  // }

  const fetchItems = () => {
    axios({
        method: 'GET',
        url: `/api/campaign/item/${id}`
    }).then (response => {
      console.log('the fetchItems response.data is ', response.data);
      setItemList(response.data);
      console.log('campaign details are', campaign.campaign.title);
    }).catch (error => {
      console.log('error in fetchCampaigns')
      console.log(error);
      alert('Something went wrong!')
    })
  }


  useEffect(() => {
    // fetchCampaign();
    fetchItems();
  }, []);



  return (
    <div className="container">
      


        
        <img src={campaign.campaign.campaign_image_url} />
        <h2>{campaign.campaign.title}</h2>
        <h5>{campaign.campaign.location}</h5>
        <h3>{campaign.campaign.description}</h3>

      <ul>
          {itemList.map(item => {
            return (
              <div key={item.item_id}>
                <h5>{item.item_name} {item.item_quantity}</h5>
                <h5>{item.item_description}</h5>
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