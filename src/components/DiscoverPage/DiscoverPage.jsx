import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CampaignCard from '../CampaignCard/CampaignCard';

function DiscoverPage() {

    const user = useSelector(store => store.user)

  return (
    <div className="container">
      <h2>Discover Page</h2>
      <h2>Campaigns in: {user.location}</h2>
      <CampaignCard />
    </div>
  );
}

export default DiscoverPage;