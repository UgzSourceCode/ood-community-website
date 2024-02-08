import "./index.css";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HomeView } from "./views/HomeView";
import { BrowserRouter } from "react-router-dom";

import "./i18n.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Suspense fallback="loading...">
                <HomeView />
            </Suspense>
        </BrowserRouter>
    </React.StrictMode>,
);
