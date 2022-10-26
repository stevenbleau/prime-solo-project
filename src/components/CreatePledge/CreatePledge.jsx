import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';



function CreatePledge() {

  const history = useHistory()
  const location = useLocation();

  const itemId = location.state.item_id;
  const campaignId = location.state.campaign_id;
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
    <div className="container">
      <h2>Create Pledge Page</h2>

        <form onSubmit={addPledge}>
        <label htmlFor="pledge-description-input">Description:</label>
        <input id="pledge-description-input" onChange={e => setPledgeDescription(e.target.value)} />
        <br/>
        <label htmlFor="pledge-quantity-input">Quantity:</label>
        <input id="pledge-quantity-input" onChange={e => setPledgeQuantity(e.target.value)} />
        <br/>
        <label htmlFor="pledge-message-input">Message:</label>
        <input id="pledge-message-input" onChange={e => setPledgeMessage(e.target.value)} />
        <br/>
        <label htmlFor="pledge-image-input">Image url:</label>
        <input id="pledge-image-input" onChange={e => setPledgeImage(e.target.value)} />
        <br/>
        <button type="submit">Submit</button>
        </form>

    </div>
  );
}

export default CreatePledge;




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