import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Loading from '../Loading';

const Example = React.lazy(() => import('../Example'));
const NotFound = React.lazy(() => import('../NotFound'));

export const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route path="/" exact>
                        <Example />
                    </Route>
                    <Route path="/404" exact>
                        <NotFound />
                    </Route>

                    <Route path="*">
                        <Redirect to="/404" />
                    </Route>
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;
