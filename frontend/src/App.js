import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
// pages and component

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Employee from "./components/Employee";
import Category from "./components/Category";
import Profile from "./components/Profile";
import AddCategory from "./components/AddCategory";
function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Dashboard /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
            <Route
              path="/dashboard"
              element={
                user ? <Dashboard /> : <Navigate to="/dashboard"></Navigate>
              }
            />

            <Route path="" element={<Home />}></Route>
            <Route path="/dashboard/employee" element={<Employee />}></Route>

            <Route path="/dashboard/category" element={<Category />}>
              <Route
                path="add_category"
                element={<h1></h1>}
                // <Home />}
              ></Route>
            </Route>

            <Route path="/dashboard/profile" element={<Profile />}></Route>
            <Route
              path="/dashboard/add_category"
              element={<AddCategory />}
            ></Route>
            <Route path="/dashboard/add_employee" element={<Home />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
