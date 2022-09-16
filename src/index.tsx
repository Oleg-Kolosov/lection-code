import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/store";
import { App } from "./App";
import { store } from "./store/store";
import "bootstrap/dist/css/bootstrap.css";
import "./firebase";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
);
