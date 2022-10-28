import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from "axios";
import UserPage from '../UserPage/UserPage';
import { useParams, useHistory } from 'react-router-dom';


function CampaignDetailsPage() {

  let [campaignDetails, setCampaignDetails] = useState([]);
  const [itemList, setItemList] = useState([]);
  const {id} = useParams();
  const history = useHistory();

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

 const handleClick = event =>  {
    console.log('pitch in button clicked', event.target.value);
    history.push(`/create/pledge/${id}`)
  };



  return (
    <div className="container">
      
      <ul>
        {campaignDetails.map(campaign => {
          return(
            <div key={campaign.id}>
              <img src={campaign.campaign_image_url}></img>
              <h1>{campaign.title}</h1>
              <h4>{campaign.description}</h4>
              <h5>{campaign.location}</h5>
              <br/>
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
                <h3>{item.item_name} {item.pledge_count}/{item.item_quantity}</h3>
                <h5>{item.item_description}</h5>
                <button value={item.item_id} onClick={() => history.push({ pathname:`/create/pledge/${item.item_id}`, state: {item_id: item.item_id, item_name: item.item_name, campaign_id: item.campaign_id}})}>Pitch In</button>
              </div>
            );
          })}
      </ul>
      
    </div>
  );
}

export default CampaignDetailsPage;