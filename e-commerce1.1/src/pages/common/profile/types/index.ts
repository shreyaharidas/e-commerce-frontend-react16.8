export interface ProfileProps {
    profileData: {
      full_name: string|null;
      e_mail: string|null;
      registration_id: string|null;
      registration_time_stamp: string|null;
      profile_pic: string|null;
    };
    resetPassword:()=>void
  }