import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';



function CreateCampaign() {

  const history = useHistory()
  const location = useLocation();

  // //pulls unique id from pass from "useHistory()"" on previous page using "useLocation()"
  // const createCampaignId = location.state.createCampaignId;

  const createCampaignId = useParams();
  console.log('createCampaignId is: ', createCampaignId)


  const user = useSelector(store => store.user)
  
  const userId = user.id;
  const userLocation = user.location;

  const [campaignTitle, setCampaignTitle] = useState('');
  const [campaignDescription, setCampaignDescription] = useState('');
  const [campaignImage, setCampaignImage] = useState('');
  



  const addCampaign = event =>  {

    axios({
          method: 'POST',
          url: '/api/campaign',
          data:{
            campaign_title: campaignTitle,
            campaign_description: campaignDescription,
            campaign_image_url: campaignImage,
            user_id: userId,
            location: userLocation,
            create_campaign_id: createCampaignId.createCampaignId,
          }
        }).then(response =>{
          console.log('New campaign created!');
        }).catch(error => {
          console.log(error);
          alert('Something went wrong!');
        })

    // pushes to create items page
    history.push({pathname:`/create/campaign/items/${createCampaignId.createCampaignId}`, state: {createCampaignId: createCampaignId}});
  };

 
  const fetchCampaignId = () => {
    axios({
        method: 'GET',
        url: '/api/campaign'
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

  return (
    <div className="container">
      <h2>Create Campaign Page</h2>

        <form onSubmit={addCampaign}>
        <label htmlFor="campaign-title-input">Title:</label>
        <input id="campaign-description-input" onChange={e => setCampaignTitle(e.target.value)} />
        <br/>
        <label htmlFor="campaign-description-input">Description:</label>
        <input id="campaign-description-input" onChange={e => setCampaignDescription(e.target.value)} />
        <br/>

        <img src={campaignImage}></img>
        <label htmlFor="campaign-image-input">Image url:</label>
        <input id="campaign-image-input" onChange={e => setCampaignImage(e.target.value)} />
        <br/>

        <button type="submit" >Next</button>
        </form>

    </div>
  );
}

export default CreateCampaign;




// const addPerson = (evt) => {
//   evt.preventDefault();
//   console.log(`The person is ${famousPersonName} and they're famous for ${famousPersonRole}`);
  
//   // TODO: create POST request to add this new person to the database
//   axios({
//     method: 'POST',
//     url: '/people',
//     data:{
//       name: famousPersonName,
//       role: famousPersonRole,
//     }
//   }).then(response =>{
//     fetchPeople();
//   }).catch(error => {
//     console.log(error);
//     alert('Something went wrong!');
//   })
//   // HINT: the server is expecting a person object 
//   //       with a `name` and a `role` property

// }

//   return (
//     <section className="new-person-section">
//       <form onSubmit={addPerson}>
//         <label htmlFor="name-input">Name:</label>
//         <input id="name-input" onChange={e => setPersonName(e.target.value)} />
//         <label htmlFor="role-input">Famous for:</label>
//         <input id="role-input" onChange={e => setPersonRole(e.target.value)} />
//         <button type="submit">Done</button>
//       </form>
//       <ul>
//         {famousPeopleArray.map((people) => {
//           return <li>"{people.name}"" is famous for "{people.role}"</li>
//         })}
//       </ul>
//     </section>
//   );
// }