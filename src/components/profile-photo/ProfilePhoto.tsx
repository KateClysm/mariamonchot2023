import React from "react";
import './profile-photo.scss';
import profileilustration from '../../assets/profile.png';
import profilepic from '../../assets/profileme.png';

const ProfilePhoto: React.FC<{ isRotated: boolean }> = ({ isRotated }) => {

  
  return (
    // <div className="profile-flip" style={{ transform: isRotated ? "rotateY(180deg)" : "rotateY(0deg)" }}>

    <div className={`profile-flip ${isRotated ? 'rotate' : 'stoprotate'}`}>
      <img src={profileilustration} alt="Character_photo" />
      <img src={profilepic} alt="Character_photo" />
    </div>
  );
};

export default ProfilePhoto;