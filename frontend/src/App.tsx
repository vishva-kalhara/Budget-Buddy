import { Route, Routes } from "react-router-dom";
import CreateIncome from "./pages/CreateIncome";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Routes>
            <Route path="/create-income" element={<CreateIncome />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
