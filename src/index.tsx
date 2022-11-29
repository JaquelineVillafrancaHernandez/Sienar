import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

//Esto lo agregué 
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import global_es from "./Translations/es/global.json";
import global_en from "./Translations/en/global.json";

i18next.init ({
	interpolation:{ escapeValue: false },
	lng:"en",
	resources:{
		es:{
			global:global_es
		},

		en:{
			global:global_en
		},
	},

});

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<BrowserRouter>
		<I18nextProvider i18n={i18next}>
			<App />

		</I18nextProvider>
	</BrowserRouter>
);
