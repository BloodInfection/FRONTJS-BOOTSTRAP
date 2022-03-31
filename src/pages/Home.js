import React from 'react';
import Slider from '../components/Slider'
import ProductAPIservice from "../services/product-api.service";

export default function Home() { //экспорт по умолчанию ф-ию хоум(если не будет экспорта не смоогу вызвать в другом файле). Если ее не нужно экспортировать то без экспорт дефолт
 const number = 1;
 const limit = 10;
 const id = 2;	
 const message = "Леша мой любименький покажи пипиську"
 const productId = 2;
//ProductAPIservice.productList(page,limit).then =  a = ProductAPIservice.productList(page,limit); a.then, у переменной a есть ф-ия then. 
//promice(это типа а) - это переменная у которой есть ф-ия класса/метод класса(then), куда можно положить 2 ф-ии (успех и нет)
//ProductAPIservice - кдасс
	ProductAPIservice.listProducts(number, limit).then( // then - есть штучка promice. Хочу вызвать продукт лист он возвращает ф-ию promice. эту ф-ию нет смысла куда то присваивать(асинхронность). Выполнится продукт лист и после возвращения результата я обращусь к вернувшейся переменной по точке
		(response) => { //круглые скобки - параметр функции, то что принимает. = function name(responce)
//результат выполнения productList
			console.log("listProducts",response)
			return Promise.resolve(); //промис успешно завершен, остановка выполнения ф-ии
		},
		(error) => {
			console.log('ошибка listProducts',error)
			return Promise.reject();
		});

	ProductAPIservice.brand(id).then( 
		(response) => { 
			console.log("brand",response)
			return Promise.resolve(); //промис успешно завершен, остановка выполнения ф-ии
		},
		(error) => {
			console.log('ошибка brand',error)
			return Promise.reject();
		});

	ProductAPIservice.listBrand().then( 
		(response) => { 
			console.log("listBrand",response)
			return Promise.resolve(); //промис успешно завершен, остановка выполнения ф-ии
		},
		(error) => {
			console.log('ошибка listBrand',error)
			return Promise.reject();
		});
	
	ProductAPIservice.category(number, limit).then( 
		(response) => { 
			console.log("category",response)
			return Promise.resolve(); //промис успешно завершен, остановка выполнения ф-ии
		},
		(error) => {
			console.log('ошибка category',error)
			return Promise.reject();
		});

	ProductAPIservice.color(id).then( 
		(response) => { 
			console.log("color", response)
			return Promise.resolve(); //промис успешно завершен, остановка выполнения ф-ии
		},
		(error) => {
			console.log('ошибка color если что калора с id=1 пока нет',error)
			return Promise.reject();
		});



	ProductAPIservice.listColor().then( 
		(response) => { 
			console.log("listColor",response)
			return Promise.resolve(); //промис успешно завершен, остановка выполнения ф-ии
		},
		(error) => {
			console.log('ошибка listColor',error)
			return Promise.reject();
		});

	ProductAPIservice.echo(message).then( 
		(response) => { 
			console.log("echo",response)
			return Promise.resolve(); //промис успешно завершен, остановка выполнения ф-ии
		},
		(error) => {
			console.log('ошибка echo',error)
			return Promise.reject();
		});

	ProductAPIservice.final_roduct(id).then( 
		(response) => { 
			console.log("final_roduct",response)
			return Promise.resolve(); //промис успешно завершен, остановка выполнения ф-ии
		},
		(error) => {
			console.log('ошибка final_roduct',error)
			return Promise.reject();
		});
	ProductAPIservice.final_roductList(productId).then( 
		(response) => { 
			console.log("final_roductList",response)
			return Promise.resolve(); //промис успешно завершен, остановка выполнения ф-ии
		},
		(error) => {
			console.log('ошибка final_roductList',error)
			return Promise.reject();
		});

	ProductAPIservice.sizeList().then( 
		(response) => { 
			console.log("sizeList",response)
			return Promise.resolve(); //промис успешно завершен, остановка выполнения ф-ии
		},
		(error) => {
			console.log('ошибка sizeList',error)
			return Promise.reject();
		});

	ProductAPIservice.full_product(productId).then( 
		(response) => { 
			console.log("full_product",response)
			return Promise.resolve(); //промис успешно завершен, остановка выполнения ф-ии
		},
		(error) => {
			console.log('ошибка full_product',error)
			return Promise.reject();
		});
	ProductAPIservice.size(4).then(  //ПРОСТО ДЛЯ ПРИМЕРА id = 4 
		(response) => { 
			console.log("size",response)
			return Promise.resolve(); //промис успешно завершен, остановка выполнения ф-ии
		},
		(error) => {
			console.log('ошибка size',error)
			return Promise.reject();
		});

	/*ProductAPIservice.colorDelete(7).then(  //ПРОСТО ДЛЯ ПРИМЕРА id 
		(response) => { 
			console.log("colorDelete",response)
			return Promise.resolve(); //промис успешно завершен, остановка выполнения ф-ии
		},
		(error) => {
			console.log('ошибка colorDelete',error)
			return Promise.reject();
		}); */
	

	return(
		<>
	<Slider/>
	</>
	)
	}