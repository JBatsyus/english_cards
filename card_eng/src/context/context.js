import React, { useState, useEffect } from "react";
import Loader from "../components/loader/loader.jsx";
import ErrorServer from "../components/error/errorServer.jsx";

// создание контекста

const DataContext = React.createContext();

const DataContextProvider = props => {
  // данные
  const [dataWords, setDataWords] = useState([]);
  // спинер
  const [isLoading, setIsLoading] = useState(false);
  // состояние ошибки
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/words")
      // В первом then происходит получение объекта Response. Данный объект хранит в себе состояние нашего запроса
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(data => {
        setDataWords(data);
        setTimeout(() => setIsLoading(false), 3000);
      })
      // Для обработки ошибок в Promise вместе с then используется метод catch
      .catch(error => {
        if (error) return <ErrorServer />;
      });
  }, []);

  // функция для обновления  таблицы

  const UpdateRow = () => {
    () => {
      setIsLoading(true);
      fetch("/api/words")
        // В первом then происходит получение объекта Response. Данный объект хранит в себе состояние нашего запроса
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong ...");
          }
        })
        .then(data => {
          setDataWords(data);
          setTimeout(() => setIsLoading(false), 3000);
        })
        // Для обработки ошибок в Promise вместе с then используется метод catch
        .catch(error => {
          if (error) return <ErrorServer />;
        });
    };
  };

  if (isLoading || dataWords.length === 0) return <Loader />;

  return (
    <DataContext.Provider value={{ dataWords, setIsLoading, UpdateRow }}>
      {props.children}
    </DataContext.Provider>
  );
};
export { DataContextProvider, DataContext };
