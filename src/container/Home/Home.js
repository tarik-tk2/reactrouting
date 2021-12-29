import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
const Home = (props) => {
 const {name,username, email,id}=props.data;

 
    return (
        <div className="user-decoration">
         <h3>{name}</h3>
         <p>{username}</p>
         <p>{email}</p>
        <Link  to={`/about/${id}`} > <button>Visit me</button></Link>
        </div>
    );
};

export default Home;