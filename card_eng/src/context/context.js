import React, { useState, useEffect } from "react";
import Loader from "../components/loader/loader.jsx";
import ErrorServer from "../components/error/errorServer.jsx";

// создание контекста

const DataContext = React.createContext();

const DataContextProvider = props => {
  const [dataWords, setDataWords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  // функция для обновления  таблицы
  const updateData = () => {
    setIsLoading(true);
    setError(false);
    fetch("/api/words")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(data => {
        setDataWords(data);
        // setTimeout(() => setIsLoading(false), 3000);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
        setError(true);
      });
  };

  useEffect(() => {
    updateData();
  }, []);

  if (error) return <ErrorServer />;
  if (isLoading || !dataWords.length) return <Loader />;

  return (
    <DataContext.Provider value={{ dataWords, isLoading, updateData }}>
      {props.children}
    </DataContext.Provider>
  );
};
export { DataContextProvider, DataContext };
