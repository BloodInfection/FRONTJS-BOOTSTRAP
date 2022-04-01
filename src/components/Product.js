import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import  ReactDOM from 'react-dom';
import {Button, Card} from 'react-bootstrap';

export default function Product(props) {
	const userApiState = useSelector(state => state.userAPIreducer)

	

	return (
	<>
	<Card style={{ width: '16rem' , margin: '20px'}}data-testid="product-card"> 
  		<Card.Img variant="top" src={props.image} />
  		<Card.Body>
    		<Card.Title>{props.name}</Card.Title>
    		<Card.Text>
			{props.description}
    		</Card.Text>
    		
			
			<Button variant="flat">Добавить в корзину</Button>
			
  		</Card.Body>
	</Card>
	</>
	)
}