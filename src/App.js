import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import {Provider} from "react-redux";
import HomeScreen from "./components/HomeComponent/index";
import ProfileScreen from "./components/ProfileComponent/index";
import {configureStore}
  from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {},
});

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
            <div>
              <Routes>
                <Route index element={<HomeScreen/>}/>
                <Route path="profile" element={<ProfileScreen/>}/>
              </Routes>
            </div>
        </BrowserRouter>
      </Provider>
  )
}

export default App;