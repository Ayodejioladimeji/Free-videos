import React from 'react'

import {
    FaBehance,
    FaFacebook,
    FaLinkedin,
    FaTwitter,
    FaSketch,
    FaHome,
    FaGripfire,
    FaFolderOpen,
    FaCalendarAlt,
    FaWpforms,
} from 'react-icons/fa';


export const links = [
    {
        id:1,
        url:'/',
        text:'home',
        icon:<FaHome/>
    },
    {
        id:2,
        url:'/',
        text:'Trending',
        icon:<FaGripfire/>
    },
    {
        id:3,
        url:'/',
        text:'Subscriptions',
        icon:<FaFolderOpen/>
    },
    {
        id:4,
        url:'/',
        text:'Library',
        icon:<FaCalendarAlt/>
    },
    {
        id:5,
        url:'/',
        text:'History',
        icon:<FaWpforms/>
    },
];


// THE SECTION OF THE SOCIAL ICONS 

export const social = [
    {
        id:1,
        url: '/',
        icon:<FaFacebook />
    },
    {
        id:2,
        url: '/',
        icon:<FaTwitter />
    },
    {
        id:3,
        url: '/',
        icon:<FaLinkedin />
    },
    {
        id:4,
        url: '/',
        icon:<FaBehance />
    },
    {
        id:5,
        url: '/',
        icon:<FaSketch />
    },
]
