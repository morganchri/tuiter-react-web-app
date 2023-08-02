import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./tuits/index";
import ExploreScreen from "./explore-screen/index";
import BookmarksScreen from "./navigation-sidebar/bookmarks-screen";
import Profile from "./navigation-sidebar/profile-screen";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import ProfileScreen from "./user/profile";
import LoginScreen from "./user/login";
import RegisterScreen from "./user/register";
import authReducer from "./reducers/auth-reducer";
const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer, user:  authReducer}});


function Tuiter() {
    return (
        <Provider store={store}>
            <div>
                <Nav />
                <div className="row">
                    <div className="col-2">
                        <NavigationSidebar />
                    </div>
                    <div className="col-7">
                        <Routes>
                            <Route path="/login"    element={<LoginScreen    />} />
                            <Route path="/register" element={<RegisterScreen />} />
                            <Route path="/profile"  element={<ProfileScreen  />} />
                            <Route path="/home" element={<HomeScreen/>} />
                            <Route path="/explore" element={<ExploreScreen/>} />
                            <Route path="/notifications" element={<h1>Notifications</h1>}/>
                            <Route path="/messages" element={<h1>Messages</h1>}/>
                            <Route path="/bookmarks" element={<BookmarksScreen/>}/>
                            <Route path="/lists" element={<h1>Lists</h1>}/>
                            <Route path="/profile" element={<ProfileScreen/>}/>
                            <Route path="/more" element={<h1>More</h1>}/>
                        </Routes>
                    </div>
                    <div className="col-3">
                        <WhoToFollowList />
                    </div>
                </div>
            </div>
        </Provider>
    );
}
export default Tuiter;