import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from "axios";
import UserPage from '../UserPage/UserPage';
import { useParams, useHistory } from 'react-router-dom';


function PledgeDetailsPage() {

  let [campaignDetails, setCampaignDetails] = useState([]);
  const [pledge, setPledge] = useState([]);
  const {id} = useParams();
  const history = useHistory();
  const campaignId = useSelector(store => store.campaign)


  //ORIGINALLY CALLED TO TEST REDUCER
  // const campaign = useSelector(store => store.campaign)

  // GET REQUEST ORIGINALLY USED TO GET CAMPAIGN DETAILS BEFORE USING REDUCER

  const fetchCampaign = () => {
    axios({
        method: 'GET',
        url: `/api/campaign/${campaignId}`
    }).then (response => {
      console.log('the campaign response.data is ', response.data);
      setCampaignDetails(response.data);
    }).catch (error => {
      console.log('error in fetchCampaigns')
      console.log(error);
      alert('Something went wrong!')
    })
  }



  const fetchPledges = () => {
    axios({
        method: 'GET',
        url: `/api/pledge/details/${id}`
    }).then (response => {
      console.log('the PLEDGE response.data is ', response.data);
      setPledge(response.data);
    }).catch (error => {
      console.log('error in fetchPledges')
      console.log(error);
      alert('Something went wrong!')
    })
  }

  useEffect(() => {
    fetchPledges();
    fetchCampaign();
  }, []);

 const handleClick = event =>  {
    console.log('pitch in button clicked', event.target.value);
    // history.push(`/create/pledge/${id}`)
  };



  return (
    <div className="container">
      
      <div>
        {pledge.map(pledge => {
          return(
            <div key={pledge.pledge_id}>
              {/* <img src={pledge.campaign_image_url}></img> */}
              <h1>{pledge.title}</h1>
              <h3>{pledge.item_name} {pledge.pledge_count}/{pledge.item_quantity}</h3>
              <br/>
            </div>
          );
        })}
      </div>


  {/* Used to test Campaign Detail Reducer */}
        {/* <img src={campaign.campaign.campaign_image_url} />
        <h2>{campaign.campaign.title}</h2>
        <h5>{campaign.campaign.location}</h5>
        <h3>{campaign.campaign.description}</h3> */}

      <div>
          {pledge.map(pledge => {
            return (
              <div key={pledge.pledge_id}>
                <img src={pledge.pledge_image_url}></img>
                <h2>{pledge.pledge_description}</h2>
                <h4>Quantity: {pledge.pledge_quantity}</h4>
                <p>{pledge.pledge_message}</p>
              </div>
            );
          })}
      </div>
      
    </div>
  );
}

export default PledgeDetailsPage;