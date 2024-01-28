import React, { useEffect, useRef, useState } from "react";
import ProfilePage from "./ProfilePage";
import { getProfile } from "./api/getProfile";
import { ProfileProps } from "./types";
import { patchResetPassword } from "./api/patchResetPassword";

const ProfileHandler = () => {
  const [profileData, setProfileData] = useState<ProfileProps["profileData"]>({
    full_name: null,
    e_mail: null,
    registration_id: null,
    registration_time_stamp: null,
    profile_pic: null,
  });

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const passwordRef = useRef(null);

  const fetchProfileData = async () => {
    let response = (await getProfile()) as ProfileProps["profileData"];
    setProfileData({ ...response });
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  const resetPassword = (new_password:string) => {
  let response;
  if(profileData?.e_mail && new_password)
     response=patchResetPassword(profileData?.e_mail, new_password);

     if(response) setModalOpen(false)
  };
  return (
    <ProfilePage
      profileData={profileData}
      passwordRef={passwordRef}
      setModalOpen={setModalOpen}
      resetPassword={resetPassword}
      modalOpen={modalOpen}
    />
  );
};

export default ProfileHandler;
