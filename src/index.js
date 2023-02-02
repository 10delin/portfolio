import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import reportWebVitals from "./reportWebVitals";
import "./styles/App.scss";
import translation_en from "./locales/en-GB/translation.json";
import translation_es from "./locales/es-ES/translation.json";

import App from "./components/App/App";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    en: {
      translation: translation_en,
    },
    es: {
      translation: translation_es,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
);

reportWebVitals();
