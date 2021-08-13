import React from "react";
import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {MyInfo} from "./pages/MyInfo/MyInfo";

export const AppRouter = () => {
    let location = useLocation();

    return (
        <TransitionGroup className={'page-wrapper'}>
            <CSSTransition
                key={location.key}
                classNames="fade"
                timeout={300}
            >
                <Switch location={location}>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/my-info">
                        <MyInfo/>
                    </Route>
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )
}