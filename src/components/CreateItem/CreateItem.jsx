import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';



function CreateItem() {

    const history = useHistory()
    const location = useLocation();
  
            //pulls unique id from pass from "useHistory()"" on previous page using "useLocation()"
            // const createCampaignId = location.state.createCampaignId;

    const createCampaignId = useParams()

    console.log('createCampaignId is: ', createCampaignId)




//   const user = useSelector(store => store.user)
  
//   const userId = user.id;
//   const userLocation = user.location;


//   const [itemName, setItemName] = useState('');
//   const [ItemDescription, setItemDescription] = useState('');
//   const [ItemQuantity, setItemQuantity] = useState('');
  



//   const addCampaign = event =>  {

//     axios({
//           method: 'POST',
//           url: '/api/campaign',
//           data:{
//             campaign_title: campaignTitle,
//             campaign_description: campaignDescription,
//             campaign_image_url: campaignImage,
//             user_id: userId,
//             location: userLocation,
//           }
//         }).then(response =>{
//           console.log('New campaign created!');
//         }).catch(error => {
//           console.log(error);
//           alert('Something went wrong!');
//         })

//     // pushes back to campaign page
//     // history.push(`/my/campaigns`);
//   };

  return (
    <div className="container">
      <h2>Create Campaign Page</h2>

        {/* <form onSubmit={addCampaign}>
        <label htmlFor="campaign-title-input">Title:</label>
        <input id="campaign-description-input" onChange={e => setCampaignTitle(e.target.value)} />
        <br/>
        <label htmlFor="campaign-description-input">Description:</label>
        <input id="campaign-description-input" onChange={e => setCampaignDescription(e.target.value)} />
        <br/>
        <label htmlFor="campaign-image-input">Image url:</label>
        <input id="campaign-image-input" onChange={e => setCampaignImage(e.target.value)} />
        <br/>

        <button type="submit">Next</button>
        </form> */}

    </div>
  );
}

export default CreateItem;

