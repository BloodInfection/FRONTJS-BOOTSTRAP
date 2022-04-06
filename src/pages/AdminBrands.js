import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import AdminNaviBar from '../components/AdminNavibar';

export default function AdminBrands(){
    return(
		<>
	<Container>
		<Row>
			<Col> <AdminNaviBar></AdminNaviBar> </Col>
			<Col> Бренды </Col>
			
		</Row>
		
		
	</Container>

	</>
	)
}