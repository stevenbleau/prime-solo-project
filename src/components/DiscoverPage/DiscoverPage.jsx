import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from "axios";
import CampaignCard from '../CampaignCard/CampaignCard';
import UserPage from '../UserPage/UserPage';

function DiscoverPage() {

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


  useEffect(() => {
    fetchCampaigns();
  }, []);


  return (
    <div id='discover-page'>
      <img className="bannerImg" src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjIxMWJhdGNoMTEta2liLTMwNC1jaGFyaXR5XzIuanBn.jpg?s=W1GJFDeuEvSSIB1z_lCs4JP7ptGo_cecHQGi5OM7DaA"></img>
      <div className="container">
        <h4>Hello {user.first_name}, let's help someone today.</h4>
        <span> <input id="search-input"/> <button id="search-button">Search</button> </span>
        <h2>Campaigns in {user.location}</h2>
        <ul>
          {
            campaignArray.map(campaign => {
              return <CampaignCard campaign={campaign} key={campaign.id}/>
            })
          }
        </ul>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </div>
  );
}

export default DiscoverPage;