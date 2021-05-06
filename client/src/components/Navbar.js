import React  from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/action.auth';


const Navbar = ({ logout }) => {
   return(
    <>
       <nav>
        <ul>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
           <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
         </li>
         <li>
        <Link to="/" onClick={logout}>
          Logout
        </Link>
      </li>
         
          </ul>
      </nav>
    </>

   );
};



export default connect(null, { logout })(Navbar);