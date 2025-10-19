import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Navbar } from './components/Navbar';
import { LoadingIndicator } from './components/LoadingIndicator';
import { Home } from './pages/Home';
import { Videos } from './pages/Videos';
import { Images } from './pages/Images';
import { PageNotFound } from './components/PageNotFound';

export const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Media Library MVP</title>
      </Helmet>
      <Navbar />
      <div className="main container-fluid">
        <Suspense fallback={<LoadingIndicator />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/videos" component={Videos} />
            <Route path="/images" component={Images} />
            <Route component={PageNotFound} />
          </Switch>
        </Suspense>
      </div>
    </>
  );
};