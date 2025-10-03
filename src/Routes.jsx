import { Routes, Route } from 'react-router-dom';
import Layout from '@components/Layout';
import GameView from '@views/GameView';
import SettingsView from '@views/SettingsView';
import PrivacyView from '@views/PrivacyView';

const ROUTES = {
    Game: {
        path: '/',
        Component: GameView,
        withLayout: true,
    },
    Settings: {
        path: '/settings',
        Component: SettingsView,
        withLayout: true,
    },
    Privacy: {
        path: '/privacy',
        Component: PrivacyView,
        withLayout: false,
    },
};

const RoutesList = Object.keys(ROUTES).map((route) => ({ 
    id: route, 
    ...ROUTES[route] 
}));

export default function AppRoutes() {
    return (
        <Routes>
            {RoutesList.map(({ id, path, Component, withLayout }) => (
                <Route
                    key={id}
                    path={path}
                    element={
                        withLayout ? (
                            <Layout>
                                <Component />
                            </Layout>
                        ) : (
                            <Component />
                        )
                    }
                />
            ))}
        </Routes>
    );
}

export { ROUTES };
