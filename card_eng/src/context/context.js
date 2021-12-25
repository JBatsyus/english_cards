import React, { useState, useEffect } from "react";
import Loader from "../components/loader/loader.jsx";

// создание контекста

const DataContext = React.createContext();

const DataContextProvider = props => {
  // данные
  const [data, setData] = useState([]);
  // спинер
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/words")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(data => {
        setData(data);
        setTimeout(() => setIsLoading(false), 5000);
      });
  }, []);

  if (isLoading) return <Loader />;
  return (
    <DataContext.Provider value={{ data, setIsLoading }}>
      {props.children}
    </DataContext.Provider>
  );
};
export { DataContextProvider, DataContext };
