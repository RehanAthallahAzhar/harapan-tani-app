// import logo from './assets/img/logo.svg';
import './assets/style/global.css';
import { Routes, Route, useNavigate} from 'react-router-dom'
import { Box, Container, SimpleGrid} from '@chakra-ui/react'

import Product from './pages/Product';
import NormalTable from './components/ui/NormalTable';
import { Navigation } from './components/ui/Navigation';

import Sidebar from './components/ui/Sidebar';
import Materials from './pages/Materials';

function App() {
  const navigate = useNavigate()
  const handleNav = (path) => {
    navigate(path)
  }

  return (

  <>
      <Box>
        <Routes>
          <Route path="/" element={<Sidebar content={<Materials />}/>} />
          <Route path="/product" element={<Sidebar content={<Product />}/>} />
          <Route path="/materials" element={<Sidebar content={<Materials />}/>} />
          <Route path="/history" element={<Product />} />
        </Routes>
      </Box>
      {/* <Box h="48px">
        <Navigation handleChange={handleNav} />
      </Box> */}
 
  </>

    
  );
}

export default App;
