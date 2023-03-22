import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from './layouts';


function App() {
    return (

        <Router>
            <React.Fragment>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout: any = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = React.Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </React.Fragment>
        </Router>
    );

}



export default App;

