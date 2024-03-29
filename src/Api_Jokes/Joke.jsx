import React, { useEffect, useState } from "react";

function Joke() {
  let [jokes, setjokes] = useState({});
  let url = "https://official-joke-api.appspot.com/random_joke";
  const getNewJoke = async () => {
    let response = await fetch(url);
    let data = await response.json();
    setjokes({
      setup: data.setup,
      punchline: data.punchline,
    });
  };
  useEffect(() => {
    getNewJoke();
  }, []);

  return (
    <>
      <h1 className="text-red-400 text-5xl pb-5">Joke's</h1>
      <h2 className="text-3xl font-bold underline pb-4">{jokes.setup}</h2>
      <h2 className="text-3xl font-bold underline pb-4">{jokes.punchline}</h2>
      <button onClick={getNewJoke}>Get Joke</button>
    </>
  );
}

export default Joke;
