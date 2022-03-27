import React from 'react';
import {Badge} from 'react-bootstrap';
import {useSearchParams } from "react-router-dom";
import Product from '../components/Product'

export default function Categories() {
	const [searchParams, setSearchParams] = useSearchParams();
	let category = searchParams.get("category");
	let brand = searchParams.get("brand");
	searchParams.append("size", "43 RUS")

	return (

		<>

		<Badge bg="secondary">Страница категорий c категорией = {category} и брендом = {brand}</Badge>
		<Product/>
		</>
)}