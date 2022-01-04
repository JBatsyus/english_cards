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
      // внутри класса обращение к полям класса происходит через  this, то есть words нужно поменять на this.words
      body: JSON.stringify(this.word),
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

  updateWord = props => {
    fetch(`/api/words/${props.id}/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(this.word),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(words => {
        console.log(words);
      })
      .catch(() => {
        this.error = true;
        this.isLoading = false;
      });
  };

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
        // this.words.splice(props.id, 1);
        this.words = this.words.filter(item => item.id !== props.id);
      })
      .catch(() => {
        this.error = true;
        this.isLoading = false;
      });
  };
}

export default WordsStore;
