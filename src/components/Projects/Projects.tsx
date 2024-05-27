import { Col, Container, Row } from 'react-bootstrap';
import advogapp from '../../Assets/Projects/advogapp.png';
import omnichannel from '../../Assets/Projects/omnichannel.png';
import Particle from '../Particle';
import ProjectCard from './ProjectCards';

function Projects() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					My Recent <strong className="purple">Works </strong>
				</h1>
				<p style={{ color: 'white' }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={advogapp}
							isBlog={false}
							title="Advogapp"
							description="Buscador de advogados Com sistema de authenticação completo e integração com sistema de emails do google. Feito com Spring boot e React.js"
							ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
						/>
					</Col>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={omnichannel}
							isBlog={false}
							title="Omnichannel"
							description="Sistema de chatbot de agendamentos para prestadores de serviço com integração da API da meta e comunicação realtime com os clientes"
							ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
