import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import AdminNaviBar from '../components/AdminNavibar';

export default function AdminCategories(){
    return(
		<>
	<Container>
		<Row>
			<Col> <AdminNaviBar></AdminNaviBar> </Col>
			<Col> Категории </Col>
			
		</Row>
		
		
	</Container>

	</>
	)
}