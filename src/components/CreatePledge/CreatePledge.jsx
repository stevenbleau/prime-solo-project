import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';



function CreatePledge() {

  const history = useHistory()
  const location = useLocation();

  //MUST PASS IN THESE VALUES FROM ANOTHER PAGE
  //grabs state data from CampaignDetailsPage history.push
  const itemId = location.state.item_id;
  const campaignId = location.state.campaign_id;
  const itemName = location.state.item_name;

  const user = useSelector(store => store.user)
  const [pledgeDescription, setPledgeDescription] = useState('');
  const [pledgeQuantity, setPledgeQuantity] = useState(0);
  const [pledgeMessage, setPledgeMessage] = useState('');
  const [pledgeImage, setPledgeImage] = useState('');
  



  const addPledge = event =>  {

    console.log('ITEM ID IS ', itemId);
    console.log('CAMPAIGN ID IS ', campaignId)

    axios({
          method: 'POST',
          url: '/api/pledge',
          data:{
            pledge_description: pledgeDescription,
            pledge_quantity: pledgeQuantity,
            pledge_message: pledgeMessage,
            pledge_image_url: pledgeImage,
            donor_id: user.id,
            item_id: itemId,
            campaign_id: campaignId,
          }
        }).then(response =>{
          console.log('New pledge created!');
        }).catch(error => {
          console.log(error);
          alert('Something went wrong!');
        })

    // pushes back to campaign page
    history.push(`/campaign/details/${campaignId}`)
  };

  return (
    <div className="detailPage">
      <h2>Create Pledge Page</h2>
      <h3>Item: {itemName}</h3>
      
        <form onSubmit={addPledge} className="formPanel">
        <label htmlFor="pledge-description-input">Description:</label>
        <input id="pledge-description-input" onChange={e => setPledgeDescription(e.target.value)} />
        <br/>
        <label htmlFor="pledge-quantity-input">Quantity:</label>
        <input id="pledge-quantity-input" onChange={e => setPledgeQuantity(e.target.value)} />
        <br/>
        <label htmlFor="pledge-message-input">Message:</label>
        <input id="pledge-message-input" onChange={e => setPledgeMessage(e.target.value)} />
        <br/>
        {/* Displays pasted image url */}
        <img src={pledgeImage}></img>
        <br/>
        <label htmlFor="pledge-image-input">Image url:</label>
        <input id="pledge-image-input" onChange={e => setPledgeImage(e.target.value)} />
        <br/>
        <br/>
        <button className="btn" type="submit">Submit</button>

        </form>
        <br/>
        <br/>
        <br/>
        <br/>

    </div>
  );
}

export default CreatePledge;

