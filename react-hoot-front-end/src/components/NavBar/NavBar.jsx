import { Link } from "react-router-dom";

const NavBar = (props) => {



  return (
    <>
      {props.user ? 

        <nav>
          <h2>Welcome {props.user.username}</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to='/hoots'>HOOTS</Link></li>
            <li><Link to="/hoots/new">NEW HOOT</Link></li>
            <li><Link to="/" onClick={props.hanldeSignOut}>Sign Out</Link></li>
          </ul>
        </nav>
      :
        <nav>
          <ul>
            <li><Link to="/sign-in">Sign In</Link></li>
            <li><Link to="/sign-up">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}
export default NavBar;