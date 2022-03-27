import React from 'react';
import {Form, Button, Container} from 'react-bootstrap';

export default function Login() {
	return (
	<Container style={{width: "70vh"}} className="mt-3" >
		<Form >
		<Form.Group className="mb-3">
				<Form.Label>Имя</Form.Label>
				<Form.Control type="aria-label" placeholder="Имя" />	
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Фамилия</Form.Label>
				<Form.Control type="aria-label" placeholder="Фамилия" />
			
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Отчество</Form.Label>
				<Form.Control type="aria-label" placeholder="Отчество" />
			
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email</Form.Label>
				<Form.Control type="email" placeholder="Email адрес" />
				<Form.Text className="text-muted">
				Мы не делимся информацией с третьими лицами.
				</Form.Text>
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Пароль</Form.Label>
				<Form.Control type="password" placeholder="Пароль" />
			</Form.Group>
			
			
			<Button variant="flat" type="submit">
				Зарегистрироваться 
			</Button>
		</Form>
	</Container>
)}