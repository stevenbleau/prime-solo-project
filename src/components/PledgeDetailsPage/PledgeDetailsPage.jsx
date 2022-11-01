import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from "axios";
import UserPage from '../UserPage/UserPage';
import { useParams, useHistory } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar';



function PledgeDetailsPage() {

  let [campaignDetails, setCampaignDetails] = useState([]);
  const [pledge, setPledge] = useState([]);
  const {id} = useParams();
  const history = useHistory();
  const campaignId = useSelector(store => store.campaign)
  const user = useSelector(store => store.user)
  const [pledgeCount, setPledgeCount] = useState();



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
      console.log('the PLEDGE count is ', response.data[0].pledge_count);
      setPledgeCount(response.data.pledge_count);
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

 const acceptPledge = event =>  {
    console.log('"accept donation" button clicked', event.target.value);
    console.log('pledge.pledge_count = ', pledge[0].pledge_count);

    axios({
      method: 'PUT',
      url: '/api/pledge/accept',
      data:{
        pledge_count: pledge[0].pledge_quantity,
        item_id: pledge[0].item_id,
      }
    }).then(response =>{
      console.log('Pledge Accepted!');
      //get updated pledge count value
      fetchPledges();
    }).catch(error => {
      console.log(error);
      alert('Something went wrong!');
    })

    // window.location.reload();
    // history.push(`/pledge/details/${id}`)
  };

  



  return (
    <div className="detailPage">
      
      <div>
        {pledge.map(pledge => {
          return(
            <div key={pledge.pledge_id}>
              {/* <img src={pledge.campaign_image_url}></img> */}
              <h1>{pledge.title}</h1>
              <h3>{pledge.item_name} {pledge.pledge_count}/{pledge.item_quantity}</h3>
              <ProgressBar  bgcolor={"#00695c"} completed={(pledge.pledge_count/pledge.item_quantity)*100} />
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

                {pledge.user_id === user.id &&
                  <button className="btn" onClick={acceptPledge}>Accept Donation</button>
                }

              </div>
            );
          })}
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default PledgeDetailsPage;