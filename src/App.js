import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import {Provider} from "react-redux";
import HomeScreen from "./components/HomeComponent/index";
import ProfileScreen from "./components/ProfileComponent/index";
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
import recipesReducer from "./reducers/recipes-reducer";
import searchReducer from "./reducers/search-reducer";
import UserSearch from "./components/UserSearch";
import OtherUserProfile from "./components/OtherUserProfile";
import SearchScreen from "./components/SearchComponent";
import recipeDetailReducer from "./reducers/recipe-detail-reducer";
import Detail from "./components/Details";
import Header from "./components/Header";
import reviewReducer from "./reducers/review-reducer";

const store = configureStore({
  reducer: {
      userData: userReducer,
      recipes: recipesReducer,
      adminData: adminReducer,
      reviewer: reviewerReducer,
      searchRecipes: searchReducer,
      recipeData: recipeDetailReducer,
      review: reviewReducer
  },
});

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
            <CurrentUser>
                <Header/>
                <div className="container">
                  <Routes>
                      <Route index element={<HomeScreen/>}/>
                      <Route path="/profile" element={<ProfileScreen/>}/>
                      <Route path="/register" element={<Register/>}/>
                      <Route path="/login" element={<Login/>}/>
                      <Route path="/follow/:usid" element={<Following/>}/>
                      <Route path="/searchUsers/:usid" element={<UserSearch/>}/>
                      <Route path="/profile/:usid" element={<OtherUserProfile/>}/>
                      <Route path="/admin/login" element={<AdminLogin/>}/>
                      <Route path="/admin" element={<AdminHomePage/>}/>
                      <Route path="/search" element={<SearchScreen/>}/>
                      <Route path="/detail/:id" element={<Detail/>}/>
                  </Routes>
                </div>
            </CurrentUser>
        </BrowserRouter>
      </Provider>
  )
}

export default App;