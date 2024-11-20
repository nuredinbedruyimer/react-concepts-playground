import React, { useState } from "react";

const ArrayUseState = () => {
  const intialUsers = ["Monkey D Luffy", "Naruto Uzumaki", "Midoriya Uzumaki"];

  const handleClick = () => {
    // This is ot work becaus no chamge in ref then no chamge in state then no re render
    // users.push(namehere)

    const newUserList = [...users];
    newUserList.push("Ronana Zoro");
    newUserList.push("GOn Frics");
    setUsers(newUserList);
  };
  console.log("Array Use State Render");

  const [users, setUsers] = useState(intialUsers);
  return (
    <div className="names">
      {users.map((user, index) => (
        <div key={index}>{user}</div>
      ))}
      <div>
        <button className="btn" onClick={handleClick}>
          Add User
        </button>
      </div>
    </div>
  );
};

export default ArrayUseState;
