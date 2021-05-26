import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import PostRouter from "./components/views/PostPage/PostRouter";
import KakaoLogin from "./components/views/LoginPage/KakaoLogin";
import NotFound from "./components/views/NotFoundPage/NotFound";
import HabitRouter from "./components/views/HabitPage/HabitRouter";
import UserRouter from "./components/views/UserPage/UserRouter";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "./hoc/auth";
import axios from "axios";
import firebase from "firebase";
import { firebaseConfig } from "./config";
import { getMessaging, getToken } from "firebase/messaging";

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onMessage(function (payload) {
  console.log(payload.notification.title);
  console.log(payload.notification.body);
});

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)}></Route>
          <Route exact path="/login" component={Auth(LoginPage, false)}></Route>
          <Route
            exact
            path="/register"
            component={Auth(RegisterPage, false)}
          ></Route>
          <Route path="/post" component={Auth(PostRouter, true)}></Route>
          <Route path="/kakao" component={Auth(KakaoLogin, false)}></Route>
          <Route path="/habit" component={Auth(HabitRouter, true)}></Route>
          <Route path="/manage" component={Auth(UserRouter, true)}></Route>
          <Route component={Auth(NotFound, null)}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
