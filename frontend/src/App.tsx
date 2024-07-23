import { Route, Routes } from "react-router-dom";
import CreateIncome from "./pages/CreateIncome";
import NotFound from "./pages/NotFound";
import Expenses from "./pages/Expenses";

function App() {
    return (
        <Routes>
            <Route path="/create-income" element={<CreateIncome />} />
            <Route path="/all-expenses" element={<Expenses />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
