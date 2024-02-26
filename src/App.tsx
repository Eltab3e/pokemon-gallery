//Router
import { Route, Routes } from "react-router-dom";
// Components
import { Navbar, BaseLayout } from "./components/layout/index";
// Pages
import { Home, Pokemon, NotFound } from "./pages/index";

function App() {
    return (
        <>
            <Navbar />
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
        </>
    );
}

export default App;
