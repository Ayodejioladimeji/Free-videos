import React from 'react';
// import logo from './logo.svg';
import { useGlobalContext } from './context';
import { FaTimes, FaYoutube } from 'react-icons/fa';
import { social, links } from './data';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside style={{ zIndex:'111'}} 
    className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>

        <div className='sidebar-header'>
            <img src="" className='logo' alt='' />
            <h2 className="free"><FaYoutube />Free Videos</h2>
            <button className='close-btn' onClick={closeSidebar}>
            <FaTimes />
            </button>
        </div>

        {/* THE SECTION OF THE LINKS */}
        <ul className='links'>
            {links.map((link) => {
            const { id, url, text, icon } = link;
            return (
                <li key={id}>
                <a href={url}>
                    {icon}
                    {text}
                </a>
                </li>
            );
            })}
        </ul>

        {/* THE SECTION OF THE SOCIAL ICONS */}
        <ul className='social-icons'>
            {social.map((link) => {
            const { id, url, icon } = link;
            return (
                <li key={id}>
                <a href={url}>{icon}</a>
                </li>
            );
            })}
        </ul>
        <small style={{textAlign:'center',paddingBottom:'20px',color:'red'}}>Work in progress</small>
    </aside>
  );
};

export default Sidebar;
