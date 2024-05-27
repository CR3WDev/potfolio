import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsGithub } from 'react-icons/bs';

const ProjectCards = (props: any) => {
	return (
		<Card className="project-card-view">
			<Card.Img variant="top" src={props.imgPath} alt="card-img" />
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text style={{ textAlign: 'justify' }}>
					{props.description}
				</Card.Text>
				{props.ghLinkBack && (
					<Button variant="primary" href={props.ghLinkBack} target="_blank">
						<BsGithub /> Backend
					</Button>
				)}
				{props.ghLinkFront && (
					<>
						&nbsp; &nbsp;
						<Button
							className="pl-2"
							variant="primary"
							href={props.ghLinkFront}
							target="_blank"
						>
							<BsGithub /> &nbsp; Frontend
						</Button>
					</>
				)}
			</Card.Body>
		</Card>
	);
};
export default ProjectCards;
