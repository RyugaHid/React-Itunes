import '../src/App.css';
import Itunes from './Components/Itunes';
import Search from './Components/Search';
import {useState} from 'react'

function App() {
  const [query,setQuery]=useState('E');
  return (
    <div className="App">
      <Search search={query} onSubmit={(newQuery) => { setQuery(newQuery) }} />
      <Itunes search={query}/>
    </div>
  );
}

export default App;
