import './App.css';
import Navbar from './component/Navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './theme/darkTheme';
import Home from './component/Home/Home';
import RestaurantDetails from './component/restaurant/RestaurantDetails';
import Cart from './component/cart/Cart';
import Profile from './component/profile/Profile';
import CustomerRoute from './component/routers/CustomerRoute';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline></CssBaseline>
    <div className="App">
      {/* <Navbar></Navbar> */}
      {/* <Home></Home> */}
      {/* <RestaurantDetails></RestaurantDetails> */}
      {/* <Cart></Cart> */}
      {/* <Profile/> */}
      <CustomerRoute/>
    </div>
    </ThemeProvider>
  );
}

export default App;
