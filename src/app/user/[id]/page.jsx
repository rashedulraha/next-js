import React from "react";

const UserProfile = async (props) => {
  const userId = await props.params;

  console.log(userId);

  return (
    <div>
      <h1>Hello user {userId.id}</h1>
    </div>
  );
};

export default UserProfile;
