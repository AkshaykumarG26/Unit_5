import React, { useState } from "react";

export const ConditionalRendering = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = () => {
    setIsLoading(true);
    setIsError(false)
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  const fetchDatawithError = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsError(true)
    }, 3000);
  };

  if (isLoading) {
    return (
      <>
        <h1>....loading</h1>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <h1>Something Went Wrong</h1>
        <button onClick={fetchData}>Do you want to fetch data again</button>
      </>
    );
  }

  return (
    <>
      <button onClick={fetchData}>Fetch Data</button>
      <br />
      <br />
      <button onClick={fetchDatawithError}>Fetch Data With Error</button>
    </>
  );

//   using turnry operator


/*
return isLoading ? 
      <>
        <h1>....loading</h1>
      </>: isError? 
            <>
        <h1>Something Went Wrong</h1>
        <button onClick={fetchData}>Do you want to fetch data again</button>
      </>:
    <>
      <button onClick={fetchData}>Fetch Data</button>
      <br />
      <br />
      <button onClick={fetchDatawithError}>Fetch Data With Error</button>
    </>

    */
};
