import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages and component
import Home from "./components/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Employee from "./components/Employee";
import Category from "./components/Category";
import Profile from "./components/Profile";
import AddCategory from "./components/AddCategory";
import AddEmployee from "./components/AddEmployee";


function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/"
              element={!user ? <InfoHome /> : <Navigate to="/dashboard" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/dashboard" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/dashboard" />}
            />

            <Route
              path="/logout"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
            <Route path="/info" element={<InfoHome />} />

            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="" element={<Home />} />
              <Route path="employee" element={<Employee />} />
              <Route path="category" element={<Category />} />
              <Route path="profile" element={<Profile />} />
              <Route path="add_category" element={<AddCategory />} />
              <Route path="add_employee" element={<AddEmployee />} />
              <Route path="edit_employee/:id" element={<EditEmployee />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
