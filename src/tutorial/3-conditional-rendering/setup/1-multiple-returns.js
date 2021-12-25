import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarsons";
const MultipleReturns = () => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [user, setUser] = useState("default user");
  useEffect(() => {
    fetch(url).then((res) => {
      if (res.status >= 200 && res.status <= 299) {
        return res.json();
      } else {
        setLoading(false);
        setError(true);
        throw new Error(res.statusText);
      }
    });
    fetch(url)
      .then((res) => res.json())
      .then((user) => {
        const { login } = user;
        setUser(login);
        setLoading(false);
        console.log(user);
      })
      .catch((error) => console.log("error"));
  }, []);
  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;
