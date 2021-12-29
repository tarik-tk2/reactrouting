import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import NotFound from '../NotFound/NotFound';

const About = () => {
    const[user,setUser]=useState([]);
  const params=  useParams();
console.log(params.id)
     useEffect(()=>{
         fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
         .then(response => response.json())
         .then(data=>setUser(data))
     },[])
     console.log(user===true)
     if(params.id){
        return (
            <div>
               <h3>Name: {user.name}</h3>
                <p>{user.username}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>Address:</p>
                <p>Street:{user.address?.street}</p>
                <p>city:{user.address?.city}</p>
                <p>zipcode:{user.address?.zipcode}</p>
                <p>Company:</p>
                <p>Name:{user.company?.name}</p>
                <p>catchPhrase:{user.company?.catchPhrase}</p>
            </div>
        );
     }
    return<NotFound></NotFound>
   
};

export default About;