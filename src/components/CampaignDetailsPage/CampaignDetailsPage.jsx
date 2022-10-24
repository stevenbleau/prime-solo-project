import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from "axios";
import UserPage from '../UserPage/UserPage';
import { useParams } from 'react-router-dom';


function CampaignDetailsPage() {

  let [campaignDetails, setCampaignDetails] = useState([]);
  const [itemList, setItemList] = useState([]);
  const {id} = useParams();

  //ORIGINALLY CALLED TO TEST REDUCER
  // const campaign = useSelector(store => store.campaign)

  // GET REQUEST ORIGINALLY USED TO GET CAMPAIGN DETAILS BEFORE USING REDUCER

  const fetchCampaign = () => {
    axios({
        method: 'GET',
        url: `/api/campaign/${id}`
    }).then (response => {
      console.log('the campaign response.data is ', response.data);
      setCampaignDetails(response.data);
    }).catch (error => {
      console.log('error in fetchCampaigns')
      console.log(error);
      alert('Something went wrong!')
    })
  }



  const fetchItems = () => {
    axios({
        method: 'GET',
        url: `/api/campaign/item/${id}`
    }).then (response => {
      console.log('the fetchItems response.data is ', response.data);
      setItemList(response.data);
    }).catch (error => {
      console.log('error in fetchItems')
      console.log(error);
      alert('Something went wrong!')
    })
  }


  useEffect(() => {
    fetchCampaign();
    fetchItems();
  }, []);



  return (
    <div className="container">
      
      <ul>
        {campaignDetails.map(campaign => {
          return(
            <div key={campaign.id}>
              <img src={campaign.campaign_image_url}></img>
              <h1>{campaign.title}</h1>
              <h3>{campaign.description}</h3>
            </div>
          );
        })}
      </ul>


  {/* Used to test Campaign Detail Reducer */}
        {/* <img src={campaign.campaign.campaign_image_url} />
        <h2>{campaign.campaign.title}</h2>
        <h5>{campaign.campaign.location}</h5>
        <h3>{campaign.campaign.description}</h3> */}

      <ul>
          {itemList.map(item => {
            return (
              <div key={item.item_id}>
                <h5>{item.item_name} {item.pledge_count}/{item.item_quantity}</h5>
                <h5>{item.item_description}</h5>
                <button>Pitch In</button>
              </div>
            );
          })}
      </ul>
      
    </div>
  );
}

export default CampaignDetailsPage;