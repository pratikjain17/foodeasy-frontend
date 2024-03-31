import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './theme/darkTheme';
import CustomerRoute from './component/routers/CustomerRoute';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './component/State/Authentication/Action';

function App() {
  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt")
  const {auth} = useSelector(store => store)
  useEffect(()=>{
    if(auth.jwt || jwt){
      dispatch(getUser(auth.jwt || jwt))
    }
  }, [auth.jwt])
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline></CssBaseline>
    <div className="App">
      <CustomerRoute/>
    </div>
    </ThemeProvider>
  );
}

export default App;
