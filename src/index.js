import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyAVYjWjgBtFUGUOkDADppMzuJjjKzut9k8';
// erzeugen einer Komponente
const App = () => {
  return <div> Hallo!</div>;
}
// JSX <App /> erzeugt Instanz der Komponente
// .container ist das Ziel in dass gerenderd wird
ReactDOM.render(<App />, document.querySelector('.container'));