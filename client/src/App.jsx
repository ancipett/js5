import styles from './App.module.css';
import Navigation from './components/Navigation';
import Create from './scenes/Create';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './scenes/Home';

const App = () => {
  return (
    <div className={styles.app}>
      <Navigation />
      
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/create" element={<Create></Create>}></Route>
        <Route path="/update/:id" element={<Create></Create>}></Route>
      </Routes>
    </div>
  );
}

export default App;