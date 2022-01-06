import { makeAutoObservable } from "mobx";

class WordsStore {
  words = [];
  error = false;
  isLoading = false;

  // Когда у нас были контексты, мы загружали в первый раз данные, когда контекст создался первый раз (useEffect с пустым массивом зависимостей), здесь в mobX нужно сделать то же самое во время инициализации стора, то есть в конструторе
  constructor() {
    makeAutoObservable(this);
    this.loadData();
  }

  // загрузка данных с сервера
  loadData = () => {
    this.isLoading = true;
    this.error = false;
    fetch("/api/words")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(response => {
        this.words = response;
        this.isLoading = false;
      })
      .catch(() => {
        this.error = true;
        this.isLoading = false;
      });
  };

  // добавляем слово
  addWord = word => {
    fetch("/api/words/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(word),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(() => {
        this.words.push(word);
      });
  };

  // изменяем слово

  updateWord = (id, editWord) => {
    fetch(`/api/words/${id}/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(editWord),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(() => {
        //  Метод findIndex() возвращает индекс в массиве - это Number, то есть число. Чтобы извлечь элемент из массива по индексу - нужно воспользоваться квадратными скобками [], внутри них указать индекс.
        const index = this.words.findIndex(item => item.id === id);
        this.words[index] = editWord;
      })
      .catch(() => {
        this.error = true;
        this.isLoading = false;
      });
  };

  // удаляем слово

  deleteWord = props => {
    fetch(`/api/words/${props.id}/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(this.words),
      mode: "cors",
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(() => {
        // splice () можно использовать, когда требуется обновить исходные данные
        // this.words.splice(props.id, 1);
        this.words = this.words.filter(item => item.id !== props.id);
        // filter всегда возвращает новый массив с результатами и сохраняет исходный массив без изменений.
      })
      .catch(() => {
        this.error = true;
        this.isLoading = false;
      });
  };
}

export default WordsStore;
