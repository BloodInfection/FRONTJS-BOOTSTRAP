import React from 'react';
import {Navbar, Nav, Container, Dropdown, /*Button, ButtonGroup*/} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { logout } from '../actions/user-api.action';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
a, .navbar-brand, .navbar-nav, .nav-link{
	color:  #fff;
	text-decoration: none;
	&:hover {
		color: rgba(255, 255, 255, 0.445);
	}
	&:active {
		color: rgba(255, 255, 255, 0.445);
	}
}

.dropdown-item {
	color: black;
	&:hover {
		color: black;
	}
	&:active {
		background-color: white;
	}

}

`


export default function NaviBar() {
	const navigate = useNavigate()
	const dispath = useDispatch()
	const userApiState = useSelector(state => state.userAPIreducer)

	const logoutHandler = () => {
		dispath(logout());
	}
	const siginHandler = () => {
		navigate("/signin");
	}
	const singupHandler = () => {
		navigate("/signup");
	}
	const profileHandler = () => {
		navigate("/profile");
	}
	const cartHandler = () => {
		navigate("/cart");
	}
	const favoriteHandler = () => {
		navigate("/favorite");
	}

	

	
	
	return (
	<>
	<Styles>
		<Navbar sticky="top" collapseOnSelect expand="lg" >
			<Container>
				<Navbar.Brand><Link to="/">Wearell</Link></Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav"/>
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto" >
						
						<Nav.Link><Link to="/categories">Женское</Link></Nav.Link>
						<Nav.Link><Link to="/categories">Мужское</Link></Nav.Link>
						<Nav.Link><Link to="/brands">Бренды</Link></Nav.Link>
					</Nav>
					{!userApiState.isLoggedIn &&(
					<Nav>
						<Dropdown>
  							<Dropdown.Toggle variant="flat" id="dropdown-basic">
    							Авторизация
  							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item onClick={siginHandler}>Вход</Dropdown.Item>
								<Dropdown.Item onClick={singupHandler}>Регистрация</Dropdown.Item>
  							</Dropdown.Menu>
						</Dropdown>
						
					</Nav>)}
					{userApiState.isLoggedIn &&(
					<Nav>
						<Dropdown>
  							<Dropdown.Toggle variant="light" id="dropdown-basic">
								{userApiState.user.name}
  							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item onClick={profileHandler}>Профиль</Dropdown.Item>
								<Dropdown.Item onClick={logoutHandler}>Выход</Dropdown.Item>
							</Dropdown.Menu>

						</Dropdown>
						<Nav.Link><Link to="/favorite">Избранное</Link></Nav.Link>
						<Nav.Link><Link to="/cart">Корзина</Link></Nav.Link>
					</Nav>)}
					
					

				</Navbar.Collapse>
			</Container>
		</Navbar>
		</Styles>
	</>
)}