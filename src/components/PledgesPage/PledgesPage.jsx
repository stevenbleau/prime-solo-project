import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PledgeCard from '../PledgeCard/PledgeCard';
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";



function PledgesPage() {

  const user = useSelector(store => store.user)
  const {id} = useParams();
  let [pledgeList, setPledgeList] = useState([]);

  const fetchPledges = () => {
    axios({
        method: 'GET',
        url: `/api/pledge/user/${user.id}`
    }).then (response => {
      console.log('the PLEDGE response.data is ', response.data);
      setPledgeList(response.data);
    }).catch (error => {
      console.log('error in fetchPledges')
      console.log(error);
      alert('Something went wrong!')
    })
  }

  useEffect(() => {
    fetchPledges();
  }, []);

  return (
    <div className="container">
      <h2>My Pledges</h2>
      <ul>
          {pledgeList.map(pledge => {
            return <PledgeCard pledge={pledge} key={pledge.id}/>
          })}
      </ul> 
    </div>
  );
}

export default PledgesPage;