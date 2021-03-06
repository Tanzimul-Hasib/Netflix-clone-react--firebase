// import logo from './logo.svg';
import './App.css';
import Row from './Row'
import requests from './requests';
function App() {
  return (
    <div className="App">
      <h1>Hey claver Programmer</h1>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;

// https://api.themoviedb.org/3/movie/550?api_key=0014417194b35b2c9722086a021cd2de