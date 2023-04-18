import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import {Provider} from "react-redux";
import HomeScreen from "./components/HomeComponent/index";
import {configureStore}
  from '@reduxjs/toolkit';
import userReducer from "./reducers/user-reducer";
import CurrentUser from "./components/CurrentUser";
import Register from "./components/register";
import Login from "./components/login";
import adminReducer from "./reducers/admin-reducer";
import AdminLogin from "./components/AdminLogin";
import AdminHomePage from "./components/AdminHome";
import reviewerReducer from "./reducers/reviewer-reducer";

const store = configureStore({
  reducer: {
      userData: userReducer,
      adminData: adminReducer,
      reviewer: reviewerReducer,
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
                      <Route path="/login" element={<Login/>}/>
                      <Route path="/admin/login" element={<AdminLogin/>}/>
                      <Route path="/admin" element={<AdminHomePage/>}/>
                  </Routes>
                </div>
            </CurrentUser>
        </BrowserRouter>
      </Provider>
  )
}

export default App;