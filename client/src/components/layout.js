import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">LoginPage</Link>
          </li>
          <li>
            <Link to="/RegisterPage">RegisterPage</Link>
          </li>
          <li>
            <Link to="/GuestPage">GuestPage</Link>
          </li>
          <li>
            <Link to="/UserPage">UserPage</Link>
          </li>
          <li>
            <Link to="/AdminBookPage">AdminBookPage</Link>
          </li>
          <li>
            <Link to="/AdminUserPage">AdminUserPage</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;