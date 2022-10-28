import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';



function CreateItem() {

    const history = useHistory()
    const location = useLocation();
    const [campaignDetails, setCampaignDetails] = useState([]);
  
            //pulls unique id from pass from "useHistory()"" on previous page using "useLocation()"
            // const createCampaignId = location.state.createCampaignId;

    const {createCampaignId} = useParams()

    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [itemQuantity, setItemQuantity] = useState(0);




    console.log('createCampaignId is: ', createCampaignId)



    const fetchCampaign = () => {
        axios({
            method: 'GET',
            url: `/api/campaign/create/${createCampaignId}`
        }).then (response => {
          console.log('the response.data is ', response.data);
          setCampaignDetails(response.data);
        //   console.log('the campaign details are: ', campaignDetails);
        }).catch (error => {
          console.log('error in fetchCampaigns')
          console.log(error);
          alert('Something went wrong!')
        })
      }


      useEffect(() => {
        fetchCampaign();
      }, []);



//   const user = useSelector(store => store.user)
  
//   const userId = user.id;
//   const userLocation = user.location;


//   const [itemName, setItemName] = useState('');
//   const [ItemDescription, setItemDescription] = useState('');
//   const [ItemQuantity, setItemQuantity] = useState('');
  


  const addCampaign = event =>  {

    axios({
          method: 'POST',
          url: '/api/campaign/item',
          data:{
            item_name: itemName,
            item_description: itemDescription,
            item_quantity: itemQuantity,
            campaign_id: campaignDetails.id,
          }
        }).then(response =>{
          console.log('New Item created!');
        }).catch(error => {
          console.log(error);
          alert('Something went wrong!');
        })

    // pushes back to campaign page
    // history.push(`/my/campaigns`);
  };

  return (
    <div className="container">

        <img src={campaignDetails.campaign_image_url}></img>
        <h2>Title: {campaignDetails.title}</h2>
        <h3>Description: {campaignDetails.description}</h3>

      <h2>Add Item:</h2>


        <form onSubmit={addCampaign}>
        <label htmlFor="item-name-input">Item Name:</label>
        <input id="item-name-input" onChange={e => setItemName(e.target.value)} />
        <br/>
        <label htmlFor="item-description-input">Item Description:</label>
        <input id="item-description-input" onChange={e => setItemDescription(e.target.value)} />
        <br/>
        <label htmlFor="item-quantity-input">Item Quantity:</label>
        <input id="item-quantity-input" onChange={e => setItemQuantity(e.target.value)} />
        <br/>

        <button type="submit">Next</button>
        </form>

    </div>
  );
}

export default CreateItem;

