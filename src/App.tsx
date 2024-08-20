import Footer from './components/common/Footer';
import { Outlet } from 'react-router-dom';
import './App.css'
import styles from './index.css';
import Header from './components/common/Header';

function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>

  )
}

export default App