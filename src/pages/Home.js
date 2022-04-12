import {React, Component} from 'react';
import Slider from '../components/Slider'
import ProductAPIservice from "../services/product-api.service";
import {Container,} from 'react-bootstrap';
import Footer from '../components/Footer'

import Product from '../components/Product';

class Home extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
		number: 1,
		limit: 20,
		products: [
			
		],
		
	  }; 
	}
	componentDidMount(){
		ProductAPIservice.GetListProducts(this.state.number, this.state.limit).then( // then - есть штучка promice. Хочу вызвать продукт лист он возвращает ф-ию promice. эту ф-ию нет смысла куда то присваивать(асинхронность). Выполнится продукт лист и после возвращения результата я обращусь к вернувшейся переменной по точке
		(response) => { //круглые скобки - параметр функции, то что принимает. = function name(responce)
//результат выполнения productList
			console.log("listProducts",response)
			
			this.setState({
				products: response.products,
			});
			return Promise.resolve(); //промис успешно завершен, остановка выполнения ф-ии
		},
		(error) => {
			console.log('ошибка listProducts',error)
			return Promise.reject();
		});
	}	
	render() {  
		const buildItems = () => { 
			
			if (this.state.products.length ===0) {
				return <Container><h3>Товаров нет</h3></Container>
			}
			return this.state.products.map((item, index)=>{
				console.log(index);
				console.log(item.url);
				return (
				<Container>
				<Product name = {item.name}  url = {item.url}/> 
				
				</Container>)
				
			})
		}
		return (
			<>
					
				<Slider caption1="Levi's Skateboarding" caption2="Fred Perry" captiom3="Obey" caption4="Stussy"/>
				<Container>
				{buildItems()}
				</Container>
			</>
		);
	}
}




export default Home;

/*
	ProductAPIservice.GetListProducts(number, limit).then( // then - есть штучка promice. Хочу вызвать продукт лист он возвращает ф-ию promice. эту ф-ию нет смысла куда то присваивать(асинхронность). Выполнится продукт лист и после возвращения результата я обращусь к вернувшейся переменной по точке
		(response) => { //круглые скобки - параметр функции, то что принимает. = function name(responce)
//результат выполнения productList
			console.log("listProducts",response)
			return Promise.resolve(); //промис успешно завершен, остановка выполнения ф-ии
		},
		(error) => {
			console.log('ошибка listProducts',error)
			return Promise.reject();
		});
		*/