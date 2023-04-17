import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import {Provider} from "react-redux";
import HomeScreen from "./components/HomeComponent/index";
import {configureStore}
  from '@reduxjs/toolkit';
import userReducer from "./reducers/user-reducer";
import CurrentUser from "./components/CurrentUser";
import Register from "./components/register";

const store = configureStore({
  reducer: {
      userData: userReducer
  },
});

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
            <CurrentUser>
                <div>
                  <Routes>
                    <Route index element={<HomeScreen/>}/>
                      <Route path="/register" element={<Register/>}/>
                  </Routes>
                </div>
            </CurrentUser>
        </BrowserRouter>
      </Provider>
  )
}

export default App;