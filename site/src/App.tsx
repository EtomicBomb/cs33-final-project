import React, {useState} from 'react';
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import PrivacySettings from "./routes/PrivacySettings";
import EditProfile from "./routes/EditProfile";
import ChangePassword from "./routes/ChangePassword";
import NotificationSettings from "./routes/NotificationSettings";
import FriendsList from "./routes/FriendsList";
import SignOut from "./routes/SignOut";
import DefaultPfp from "./images/PngItem_1503945.png";
import Home from "./routes/Home";
import NewSession from "./routes/NewSession";
import Unauthenticated from "./routes/Unauthenticated";
import SideBar from "./SideBar";
import AccMenuButton from "./AccMenuButton";
import PicLock from "./images/basebuttons/lock 1.png";
import WebPlayback from "./routes/WebPlayback";

type SidebarConfig = {
    profilePicturePath: string,
}

type Authentication = {
    sessionToken: string, // created by our browser to authenticate our requests
    accessToken: string, // needed to make direct requests to spotify
}

function App() {
    const [authentication, setAuthentication] = useState<Authentication>()
    const [sidebarConfig, setSidebarConfig] = useState<SidebarConfig>({
        profilePicturePath: DefaultPfp,
    })

    if (authentication) {
        return (
            <BrowserRouter>
                <SideBar sidebarConfig={sidebarConfig}/>
                <Routes>
                    <Route path={"/"} element={<Home authentication={authentication} setSidebarConfig={setSidebarConfig}/>}/>
                    <Route path={"playback"} element={<WebPlayback authentication={authentication}/>}/>
                    <Route path={"privacysettings"} element={<PrivacySettings/>}/>
                    <Route path={"editprofile"} element={<EditProfile/>}/>
                    <Route path={"changepassword"} element={<ChangePassword/> }/>
                    <Route path={"notificationsettings"} element={<NotificationSettings/>}/>
                    <Route path={"FriendsList"} element={<FriendsList/>}/>
                    <Route path={"signout"} element={<SignOut/>}/>
                </Routes>
            </BrowserRouter>
        )
    } else {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Unauthenticated />}/>
                    <Route path={"newSession"} element={<NewSession setAuthentication={setAuthentication}/>}/>
                </Routes>
            </BrowserRouter>
        )

    }
}

export type { SidebarConfig, Authentication }
export default App
