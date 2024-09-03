import Footer from './components/common/Footer';
import { Outlet } from 'react-router-dom';
import Header from './components/common/Header';
// import Testing from './pages/testing/index';
import styles from './index.css';
import Box from '@mui/material/Box';
import './App.css'

function App() {
  return (
    <>
      <Header />
      {/* <Testing />  */}
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Outlet />
      </Box>
      <Footer />
    </>

  )
}

export default App