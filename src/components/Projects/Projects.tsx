import { Col, Container, Row } from 'react-bootstrap';
import advogapp from '../../Assets/Projects/advogapp.png';
import api from '../../Assets/Projects/api.png';
import omnichannel from '../../Assets/Projects/omnichannel.png';
import Particle from '../Particle';
import ProjectCard from './ProjectCards';

function Projects() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					Meus <strong className="purple">Projetos Recentes </strong>
				</h1>
				<p style={{ color: 'white' }}>
					Aqui estão alguns projetos pessoais que eu fiz recentemente.
				</p>
				<Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={advogapp}
							isBlog={false}
							title="Advogapp"
							description="Buscador de advogados Com sistema de authenticação completo e integração com sistema de emails do google. Feito com Spring boot e React.js e Terraform para fazer o deploy usando ec2 e s3."
							ghLinkFront="https://github.com/CR3WDev/advogapp-front"
							ghLinkBack="https://github.com/CR3WDev/advogapp_back"
						/>
					</Col>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={omnichannel}
							isBlog={false}
							title="Omnichat"
							description="Sistema de chatbot de agendamentos para prestadores de serviço com integração da API da meta e comunicação realtime com os clientes. Feito com react.js e flask"
							ghLinkFront="https://github.com/CR3WDev/omnichat-front"
						/>
					</Col>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={api}
							isBlog={true}
							title="Kube"
							description="Sistema de Omnichannel com integração com a API de telegram. Feito em Nest.js"
							ghLinkBack="https://github.com/CR3WDev/kube-backend"
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
