import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages and component
import Home from "./components/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Employee from "./components/Employee";
import Category from "./components/Category";
import Profile from "./components/Profile";
import AddCategory from "./components/AddCategory";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import Main from "./pages/Main";
import EmployeeLogin from "./components/EmployeeLogin";
import EmployeeDashboard from "./components/EmployeeDash";
import EmployeeOption from "./components/LoginOption";
import Navbar from "./HomeComponent/Navigation";
import EmployeeProfile from "./components/EmployeeProfile";
import Assest from "./components/Assest";
import EditAsset from "./components/EditAsset";
import Learn from "./components/Learn";
import Calen from "./components/Calendar";
import EditTraning from "./components/EditTraning";
import LeaveManagement from "./components/LeaveManagement";
import EditLeave from "./components/EditLeave";
import EditLeavemain from "./components/EditLeavemain";
import Home1 from "./pages/Home1";
function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          {user ? null : <Navbar />}
          <Routes>
            {/* <Route path="" element={<Home />} /> */}
            <Route
              path="/"
              element={!user ? <Main /> : <Navigate to="/dashboard" />}
            />
            <Route
              path="/login"
              element={user ? <Navigate to="/dashboard" /> : <Login />}
            />

            <Route
              path="/signup"
              element={user ? <Navigate to="/dashboard" /> : <Signup />}
            />

            <Route path="/logout" element={<Main />} />
            <Route path="/loginoption" element={<EmployeeOption />} />
            <Route path="/main" element={<Main />} />

            <Route path="/employeelogin" element={<EmployeeLogin />} />

            <Route path="/employeedash" element={<EmployeeDashboard />}>
              <Route path="employeeProfile" element={<EmployeeProfile />} />
            </Route>

            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="" element={<Home />} />
              <Route path="employee" element={<Employee />} />
              <Route path="category" element={<Category />} />
              <Route path="asset" element={<Assest />} />
              <Route path="profile" element={<Profile />} />
              <Route path="traning" element={<Learn />} />
              <Route path="leavemanagenment" element={<LeaveManagement />} />

              <Route path="add_category" element={<AddCategory />} />
              <Route path="add_employee" element={<AddEmployee />} />
              <Route path="edit_employee/:id" element={<EditEmployee />} />
              <Route path="edit_asset/:id" element={<EditAsset />} />
              <Route path="edit_traning/:id" element={<EditTraning />} />
              <Route path="editleavemain" element={<EditLeavemain />} />
              <Route path="edit_leave/:id" element={<EditLeave />} />
              <Route path="calendar" element={<Calen />} />
              <Route path="todo" element={<Home1 />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
