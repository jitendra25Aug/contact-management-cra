import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact, Dashboard, Error, NewContact, SharedLayout } from "./pages";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Contact />} />
            <Route path="/create-contact" element={<NewContact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
