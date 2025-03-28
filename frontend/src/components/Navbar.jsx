import { Link } from "react-router-dom";
// import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
const Navbar = () => {
  // const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <header>
      {/* <div className="container"> */}
      {/* <Link to="/">
          <h1>HRMS</h1>
        </Link> */}
      <nav>
        {/* {user && (
          <div className=" m-2 justify-content-center">
            <span>{user.email}</span>
            <button onClick={handleClick}>Log out</button>
          </div>
        )} */}
        {!user && (
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        )}
      </nav>
      {/* </div> */}
    </header>
  );
};

export default Navbar;
