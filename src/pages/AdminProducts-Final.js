import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import AdminNaviBar from '../components/AdminNavibar';

export default function AdminProductsFinal(){
    return(
		<>
	<Container>
		<Row>
			<Col> <AdminNaviBar></AdminNaviBar> </Col>
			<Col> Товары финал </Col>
			
		</Row>
		
		
	</Container>

	</>
	)
}