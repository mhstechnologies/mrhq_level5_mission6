import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import TryItOut from "./pages/TryItOut";
import OrderHistory from "./pages/OrderHistory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signedin" element={<SignIn />} />
          <Route path="/tryitout" element={<TryItOut />} />
          <Route path="/orderhistory" element={<OrderHistory />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
