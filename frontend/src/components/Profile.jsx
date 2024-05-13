import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const Profile = () => {
  const { user } = useAuthContext();

  return (
    <header>
      {user && (
        <div className="px-5 mt-11 justify-content-center">
          <h2>Welcome, {user.name}</h2>

          <h1>{user.email}</h1>
        </div>
      )}
    </header>
  );
};

export default Profile;
