import Navbar from "@/components/Navbar";
import Myorder from "@/components/profile/Myorder";
import ProfileInfo from "@/components/profile/ProfileInfo";
import React from "react";

function Profile() {
  return (
    <div>
      <Navbar />
      <ProfileInfo />
      <Myorder />
    </div>
  );
}

export default Profile;
