import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from '@mui/material/styles';
import LoginNavbar from './components/blocks/navbar/LoginNavbar';
import Navbar from './components/blocks/navbar/AppNavbar';
import { CssVarsProvider as JoyCssVarsProvider } from '@mui/joy/styles';
import AppRoutes from './appRoutes';
import Sheet from '@mui/joy/Sheet';
import { useSelector } from 'react-redux';

const materialTheme = materialExtendTheme();

export function App() {
  const {accessToken} = useSelector(state=>state.auth)

  return (
    <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
        <JoyCssVarsProvider>
        <Sheet sx={{minHeight:'100vh'}}>
          {accessToken?.token ? (
            <Navbar user={accessToken?.user} />
          ) : (
            <LoginNavbar />
          )}
           <Sheet sx={{height:'100%',bgcolor:'#ffffff2b',py:5}}>
          <AppRoutes />
          </Sheet>
        </Sheet>
        </JoyCssVarsProvider>
      </MaterialCssVarsProvider>
  );
}

export default App;
