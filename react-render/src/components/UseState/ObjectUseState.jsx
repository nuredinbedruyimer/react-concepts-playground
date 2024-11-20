import React, { useState } from "react";

const ObjectUseState = () => {
  const intialUserName = {
    firstName: "Monkey D",
    lastName: "Luffy",
  };

  const [username, setUserName] = useState(intialUserName);
  console.log(username);

  const handleClick = () => {
    //  Because this not Change the ref of the obejct the no chage in state that lead to no re render

    // username.firstName = "Naruto";
    // username.lastName = "Uzumaki";
    setUserName(username);

    const newUserName = { ...username };
    newUserName.firstName = "Naruto";
    newUserName.lastName = "Uzumaki";
    setUserName(newUserName);
  };
  console.log("UserName : ", username);
  console.log("Object Use State Render : ");
  return (
    <div className="object-use-state">
      <h1>
        {username.firstName} : {username.lastName}
      </h1>
      <div>
        <button onClick={handleClick}>Change Name</button>
      </div>
    </div>
  );
};

export default ObjectUseState;
