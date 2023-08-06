import {Link,Outlet} from "react-router-dom"
function Navbar() {
  return (
    <>
      <div className="nav">
      <Link to="/home" >home</Link>
         <Link to="/about" >About</Link>
         <Link to="/items" >items</Link>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
