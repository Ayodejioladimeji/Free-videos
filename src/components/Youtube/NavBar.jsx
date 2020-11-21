import React, {useState} from 'react';

import { FaBars,FaYoutube } from 'react-icons/fa';
import { useGlobalContext } from '../Nav/context';
import './Searchbar.css'
import '../Nav/Nav.css'
import './Responsive.css'

import { Navbar, Form, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from '../Nav/Sidebar';

const NavBar = ({onSubmit}) => {
    const { openSidebar} = useGlobalContext();

    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event)=>{
      setSearchTerm(event.target.value)
    }

    const onKeyPress = (event)=>{
      if(event.key==='Enter'){
        event.preventDefault();
        onSubmit(searchTerm);
      }
    }

    return (
      <Navbar className="navbar" expand="lg">
        <button onClick={openSidebar} className="sidebar-toggle">
          <FaBars />
        </button>
        <Sidebar />

        <Navbar.Brand href="#">
          <div className="logo-brand">
            <FaYoutube /><span>Free Videos</span>
          </div>  
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="Navbar-toggle"/>

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center input-div">
        
          <Nav className="mr-auto">
            <Nav.Link className="nav-link" href="#">Home</Nav.Link>
            <Nav.Link className="nav-link" href="#">Link</Nav.Link>
          </Nav>
          
          <Form inline>
              <input type="text" name="text" placeholder="Search..." 
                value={searchTerm} onChange={handleChange} onKeyPress={onKeyPress}/>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBar
