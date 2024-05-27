import { Col, Row } from 'react-bootstrap';
import {
	SiAmazonaws,
	SiLinux,
	SiMacos,
	SiVisualstudiocode,
} from 'react-icons/si';

function Toolstack() {
	return (
		<Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
			<Col xs={4} md={2} className="tech-icons">
				<SiMacos />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiVisualstudiocode />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiLinux />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiAmazonaws />
			</Col>
		</Row>
	);
}

export default Toolstack;
