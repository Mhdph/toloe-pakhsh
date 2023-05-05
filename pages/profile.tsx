import Navbar from "@/components/Navbar";
import Myorder from "@/components/profile/Myorder";
import ProfileInfo from "@/components/profile/ProfileInfo";
import ProfilePageList from "@/components/profile/ProfilePageList";
import React from "react";

function Profile() {
  return (
    <div>
      <Navbar />
      <ProfileInfo />
      <Myorder />
      <ProfilePageList />
    </div>
  );
}

export default Profile;
