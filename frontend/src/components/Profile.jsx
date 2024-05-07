import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
const Profile = () => {
  const { user } = useAuthContext();
  return (
    <header>
      {user && (
        <div
          className=" 
       px-5  mt-11 justify-content-center"
        >
          <span>{user.email}</span>
        </div>
      )}
    </header>
  );
};

export default Profile;
