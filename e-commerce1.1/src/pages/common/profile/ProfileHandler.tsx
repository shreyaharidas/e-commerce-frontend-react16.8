import React, { useEffect, useState } from 'react'
import ProfilePage from './ProfilePage';
import { getProfile } from './api/getProfile';
import { ProfileProps } from './types';

const ProfileHandler = () => {

const [profileData, setProfileData]= useState<ProfileProps["profileData"]>(
    {
        "full_name": null,
        "e_mail": null,
        "registration_id": null,
        "registration_time_stamp": null,
        "profile_pic": null 
}
)

const fetchProfileData=async()=>{
    let response=await getProfile() as ProfileProps["profileData"];
    setProfileData({...response});
}

useEffect(()=>{
     fetchProfileData();
},[])


    const resetPassword = () => {
        // Implement your logic for password reset here
        console.log('Resetting password...');
      };
  return (
   <ProfilePage profileData={profileData} resetPassword={resetPassword}/>
  )
}

export default ProfileHandler
