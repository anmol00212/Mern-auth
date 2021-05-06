import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';

const Layout = (props) => {
    return (
        <div className="containerMain">
          <Navbar />
          {props.children}
        </div>
      );
    };
    export default connect(null)(Layout);