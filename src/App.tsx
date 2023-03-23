import React from 'react';
import { useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import { publicRoutes, customerRoutes } from '~/routes';
import { DefaultLayout } from './layouts';
import { authSelector } from './redux/selectors/authSelector';

function App() {
    const { account } = useSelector(authSelector);
    if (account && account.roll === 'CUSTOMER') {
        return (
            <Router>
                <React.Fragment>
                    <Routes>
                        {customerRoutes.map((route, index) => {
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
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </React.Fragment>
            </Router>
        );
    } else {
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
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </React.Fragment>
            </Router>
        );
    }
}

export default App;
