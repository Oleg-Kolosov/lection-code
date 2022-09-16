import { Account } from "pages/Account";
import { DetailsCountryPage } from "pages/DetailsCountryPage";
import { Route, Routes } from "react-router-dom";

import { MainTemplate, RequareAuth } from "./components";
import { FavoritesPage } from "./pages/FavoritesPage";
import { HomePage } from "./pages/HomePage";
import { SignInPage } from "./pages/SignInPage";
import { SignUpPage } from "./pages/SignUpPage";

export const App = () => {
  return (
    <Routes>
      <Route element={<MainTemplate />}>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/countries/:name"
          element={<DetailsCountryPage />}
        />
        <Route
          path="/sign-in"
          element={<SignInPage />}
        />
        <Route
          path="/sign-up"
          element={<SignUpPage />}
        />

        <Route element={<RequareAuth />}>
          <Route
            path="/favorites"
            element={<FavoritesPage />}
          />
          <Route
            path="/account"
            element={<Account />}
          />
        </Route>
      </Route>
    </Routes>
  );
};
