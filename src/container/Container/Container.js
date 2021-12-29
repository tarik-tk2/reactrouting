import React ,{ useEffect, useState } from 'react';
import Home from '../Home/Home';
import './Container.css'



const Container = () => {
  const [user,setUsers]= useState([]);
  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(data=>setUsers(data))
  })
  return (
    <div className="users" >
    {user.map(user=><Home key={user.id} data={user}/>)}

    </div>
  );
};

export default Container;