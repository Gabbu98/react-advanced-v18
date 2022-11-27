import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

//second argument

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    // setUsers(users); -> this will cause an
    // infinite loop; trigger rerender->useEffect triggered->rerender...
    // solution is to add a dependency list in the useEffect
    setUsers(users);
    console.log(users);
  };

  //useEffect cannot be async because it cannot return a Promise
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
