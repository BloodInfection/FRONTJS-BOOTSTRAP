import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import AdminNaviBar from '../components/AdminNavibar';

export default function AdminColors(){
    return(
		<>
	<Container>
		<Row>
			<Col> <AdminNaviBar></AdminNaviBar> </Col>
			<Col> Цвета </Col>
			
		</Row>
		
		
	</Container>

	</>
	)
}