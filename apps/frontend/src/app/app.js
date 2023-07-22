import { Route, Routes } from 'react-router-dom';
import Login from './components/pages/login-page/login';
import Signup from './components/pages/signup-page/signup';
import LoginNavbar from './components/blocks/navbar/login-navbar';
import HomePage from './components/pages/home-page/home-page';
import { useAuth } from '../app/context/AuthContext'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { indigo } from '@mui/material/colors';
import Navbar from './components/blocks/navbar/app-navbar';


const theme = createTheme({
  palette: {
    primary: indigo,
    secondary: {
      main: '#e91e63',
    },
  },
});

export function App() {
  const { isLoggedIn } = useAuth(); 

  console.log(isLoggedIn);
  return (
    <div>
      {/* <NxWelcome title="store-frontend" /> */}


    
      <ThemeProvider theme={theme}>
        {' '}
        <div>
          {/* <Navbar/> */}
          {isLoggedIn?<Navbar />:<LoginNavbar />}
          {/* <LoginNavbar /> */}

          <Routes>
            <Route path={"/" } element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          {/* END: routes */}
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
