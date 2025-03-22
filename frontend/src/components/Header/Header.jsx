import React,{useRef, useEffect,useContext} from "react";
import { Container,Row,Button} from 'reactstrap'
import {NavLink, Link,useNavigate} from 'react-router-dom'
import logo from '/images/logo.png'
import './header.css'
import {AuthContext} from '../../Context/AuthContext'

const nav_links=[
    {
    path:'/home',
    display:'Home'
    },
    {
    path:'/tours',
    display:'Tours'
    },
    {
    path:'/about',
    display:'About'
    },
]

const Header = () => {

const headerRef = useRef(null)
const menuRef = useRef(null) 
const navigate=useNavigate()
const {user,dispatch}=useContext(AuthContext)
const logout=()=>{
    dispatch({type:'LOGOUT'})
    navigate('/')
}
const stickyHeaderFunc = ()=>{
window.addEventListener('scroll',()=>{
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop >80){
    headerRef.current.classList.add('sticky__header')
    } else{
    headerRef.current.classList.remove('sticky__header')
    }
})
}
useEffect(()=>{
    stickyHeaderFunc()
    return window.removeEventListener('scroll',stickyHeaderFunc)
})


const toggleMenu =()=>{
    menuRef.current.classList.toggle('show__menu')
    }

    return (
    <header className="header" ref={headerRef}>
        <Container>
            <Row>
                <div className="nav__wrapper d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <img src={logo} alt="" />
                        {/* <a href="/"><i className="sitename"><b>Syria Tour Guide</b></i> </a> */}
                    </div>
                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <ul className="menu d-flex align-items-center gap-5">
                            {nav_links.map((item,index) => (
                                <li  className="nav_item" key={index}>
                                <NavLink to={item.path} className={navClass => navClass.isActive ? "active_link" : ""}>{item.display}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

            {/*                 menu end                */}

                    <div className="nav_right d-flex align-items-center gap-4">
                        <div className="nav_btns d-flex align-items-center gap-4">
                        {
                        user? ( <>
                            <h5 className="mb-0 usern">{user.username}</h5>
                            <Button className="btn btn-dark ml-2 mr-2" onClick={logout}>Logout</Button>
                        </> ) : ( <>
                            <Button className="btn secondary__btn auth__btn1"><Link to='/login' className="text-white">login</Link></Button>
                            <Button className="btn primary__btn auth__btn2"><Link to='/register' className="text-white">Register</Link></Button>
                            </>
                            )}
                        </div>
                        <span className="mobile__menu" onClick={toggleMenu}><i class="ri-menu-line"></i></span>
                    </div>
                </div>
            </Row>
        </Container>
    </header>);
};

export default Header