import React, { useState, useEffect } from "react";
import Loader from "../../loader/loader";

// создание контекста

const DataContext = React.createContext();

const DataContextProvider = props => {
  // данные
  const [data, setData] = useState([]);
  // спинер
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then(response => response.json())
      .then(data => {
        setData(data);
        setTimeout(() => setIsLoading(false), 5000);
        // setIsLoading(false);
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
