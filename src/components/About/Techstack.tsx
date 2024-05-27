import { Col, Row } from 'react-bootstrap';
import { BiLogoSpringBoot } from 'react-icons/bi';
import { DiGit, DiJava, DiJavascript1, DiReact } from 'react-icons/di';
import {
	SiJest,
	SiJunit5,
	SiPostgresql,
	SiRedis,
	SiTypescript,
} from 'react-icons/si';

function Techstack() {
	return (
		<Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
			<Col xs={4} md={2} className="tech-icons">
				<DiReact />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiJavascript1 />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiTypescript />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<BiLogoSpringBoot />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiJava />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiJest />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiJunit5 />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiGit />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiRedis />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiPostgresql />
			</Col>
		</Row>
	);
}

export default Techstack;
