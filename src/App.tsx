import { Route, Routes } from 'react-router-dom';
import { MainTemplate, RequareAuth } from './components';
import { FavoritesPage } from './pages/FavoritesPage';
import { HomePage } from './pages/HomePage';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';

export const App = () => {
    return (
        <Routes>
            <Route element={<MainTemplate />}>
                <Route path="/" element={<HomePage />} />
                <Route element={<RequareAuth />}>
                    <Route path="/favorites" element={<FavoritesPage />} />
                </Route>
                <Route path="/sign-in" element={<SignInPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
            </Route>
        </Routes>
    );
};
