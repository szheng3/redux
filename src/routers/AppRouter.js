import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import ContactPage from '../components/ContactPage';
import PortfolioItemPage from '../components/PortfolioItemPage';
import PortfolioPage from '../components/PortfolioPage';
import CreateEssay from "../components/CreateEssay";
import ReadPage from "../components/ReadPage";
import UpdatePage from "../components/UpdatePage";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/portfolio" component={PortfolioPage} exact={true}/>
                <Route path="/create" component={CreateEssay} exact={true}/>
                <Route path="/portfolio/:id" component={PortfolioItemPage}/>
                <Route path="/read" component={ReadPage}/>
                <Route path="/contact" component={ContactPage}/>
                <Route path="/update" component={UpdatePage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
