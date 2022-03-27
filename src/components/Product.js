import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import {Button, Card} from 'react-bootstrap';
import productStussy from '../image/product_stussy_bluegray.webp'

export default function Product() {
	const userApiState = useSelector(state => state.userAPIreducer)

	return (
	<>
	<Card style={{ width: '18rem' , margin: '20px'}}>
  		<Card.Img variant="top" src={productStussy} />
  		<Card.Body>
    		<Card.Title>STUSSY</Card.Title>
    		<Card.Text>
			Футболка PIG. DYED INSIDE OUT CREW
			LAVENDER
    		</Card.Text>
    		<Button variant="flat">Добавить в корзину</Button>
  		</Card.Body>
	</Card>
	</>
	)
}