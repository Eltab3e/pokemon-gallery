import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// Components
import { Loader } from "./components/shared/index";
import { Navbar, BaseLayout } from "./components/layout/index";
// Pages
const Home = React.lazy(() => import("./pages/Home"));
const Pokemon = React.lazy(() => import("./pages/Pokemon"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
    return (
        <>
            <Navbar />
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route element={<BaseLayout />}>
                        <Route
                            path="/"
                            element={<Home />}
                        />
                        <Route
                            path="/pokemon/:pokemonId"
                            element={<Pokemon />}
                        />
                        <Route
                            path="*"
                            element={<NotFound />}
                        />
                    </Route>
                </Routes>
            </Suspense>
        </>
    );
}

export default App;
