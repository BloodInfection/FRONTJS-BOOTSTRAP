import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import  ReactDOM from 'react-dom';
import {Button, Card} from 'react-bootstrap';
import productStussy from '../image/product_stussy_bluegray.webp'

export default function Product() {
	const userApiState = useSelector(state => state.userAPIreducer)

	class ContentFeed extends React.Component{
		constructor(){
			super();

			this.state = {
				'items':[]
			}
		}

		componentDidMount(){
			this.getItems();

		}
		getItems(){
			fetch('')
			.then (results => results.json())
			.then (results => this.setState({'items': results}));

		}

		render(){
			return(
				<ul>
					{this.state.tmens.map(function(item,index){
						return <h1>{item.title}</h1>
					}
					)}
				</ul>
			)
		}
	}
	

	return (
	<>
	<Card style={{ width: '16rem' , margin: '20px'}}data-testid="product-card"> 
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