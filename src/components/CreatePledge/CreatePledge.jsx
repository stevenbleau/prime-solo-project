import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

function CreatePledge() {


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

  return (
    <div className="container">
      <h2>Create Pledge Page</h2>
    </div>
  );
}

export default CreatePledge;