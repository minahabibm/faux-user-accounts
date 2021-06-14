import React, {useState, useEffect} from 'react';
import axios from 'axios';
import WebFont from 'webfontloader';

import './App.css';
import Profile from './views/profile/profile';
import ContactMe from './views/contact-me/contact-me';
import SocailMedia from './components/social-media/social-media';

function App() {
  const [data, setData] = useState({});

  // Pulling Data from URL 
  useEffect(() => {
    axios
    .get('https://randomuser.me/api').then(res => {
      const { picture, name, location, email, cell, dob, login } = res.data.results[0]
      setData({
        imageUrl: picture,
        name: name,
        location: location,
        email: email,
        cell: cell,
        dob: dob,
        login:login,
      });
    })
    .catch(err => console.log(err));
  }, []);

  //Loading Fonts
  useEffect(() => { 
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Courgette']
      }
    });
  }, []);
  
  return (
    <div className="App">

      <div className="profile">
        <Profile data={data} ></Profile>
      </div>

      <hr/>

      <div className={'conatctMe'}>
        <ContactMe></ContactMe>
      </div>
      
      <hr/>
      
      <div className={"socialMedia"}>
        <SocailMedia></SocailMedia>
      </div>

    </div>
  );
}

export default App;
