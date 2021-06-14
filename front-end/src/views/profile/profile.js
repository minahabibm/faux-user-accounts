import React, {useState, useEffect} from 'react';

import './profile.css';
import ProfilePic from '../../components/profile-pic/profile-pic';
import DetailsButtons from '../../components/details-button/details-button';
import DetailsBox from '../../components/details-box/details-box';

export default function Profile(props) {
  const { imageUrl, name, location, email, cell, dob, login } = Object.keys(props.data ).length >= 1 ? props.data : "null";
  const [titleAndDescription, setTitleAndDescription] = useState(["", ""]);
  const [itemsObj, setItemsObj] = useState({});
  const [descriptionRendring, setDescriptionRendring] = useState(false);

  const callBackDescription = (detailsTitle, descriptionRendr) => {
    if (descriptionRendr !== null && descriptionRendr !== undefined) {
      setDescriptionRendring(!descriptionRendring);
    }
    if (detailsTitle !== null & detailsTitle !== undefined) {
      setTitleAndDescription([detailsTitle, itemsObj[detailsTitle]]);
    }
  }
  const getName = (name) => {
    return `${name.first}  ${name.last}`;
  }
  const getDob = (dob) => {
    const date = new Date(dob.date);
    return ` Date of Birth: ${date}\n Age: ${dob.age}`;
  }
  const getLocation = (location) => {
    return ` ${location.street.number} ${location.street.name},\n ${location.city},\n ${location.state} ${location.postcode},\n ${location.country}\n latitude: ${location.coordinates.latitude} | longitude: ${location.coordinates.longitude}`;
  }
  const getLogins = (login) => {
    return ` UUID: ${login.uuid}\n Username: ${login.username}\n Password: ${login.password}\n MD5: ${login.md5}\n sha1: ${login.sha1}\n sha256: ${login.sha256}\n salt: ${login.salt}\n`;
  }

  useEffect(() => {
    if (name && location ) {
      let title = "Description";
      let paragrapgh = `Hi, I'm ${getName(name)} and I live in ${location.city}, ${location.state}.`
      setTitleAndDescription([title, paragrapgh]);
    }

  }, [name, location, descriptionRendring]);

  useEffect(() => {
    if ( name && location && email && cell && dob && login ) {
      setItemsObj (prevState => ({
        ...prevState, 
        "Name": getName(name),
        "Location": getLocation(location),
        "E-mail": email,
        "Phone Number": cell,
        "Date of Birth": getDob(dob),
        "Logins Information": getLogins(login)
      }));
    }

  }, [name, location, email, cell, dob, login]);
   
  return (
    <div>
      <div className="profileDiv">
        <ProfilePic imageUrl={imageUrl} caller={callBackDescription}/>
        <DetailsButtons caller={callBackDescription} />
      </div>
      <DetailsBox title={titleAndDescription[0]} description={titleAndDescription[1]} />
    </div>
  );
}