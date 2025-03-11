import { Col, Container, Row } from 'react-bootstrap';
import { AiFillGithub, AiFillYoutube } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import myImg from '../../Assets/avatar.svg';

const Home2 = () => {
	return (
		<Container fluid className="home-about-section" id="about">
			<Container>
				<Row>
				<Col md={8} className="home-about-description">
					<h1 style={{ fontSize: '2.6em' }}>
					Let me <span className="purple"> INTRODUCE </span> myself
					</h1>
					<p className="home-about-body">
					I am a programmer passionate about programming who always seeks to
					improve as a programmer
					<br />
					<br />
					I have expertise in classic languages such as:
					<i>
						<b className="purple"> Java, Typescript and JavaScript</b>
					</i>
					<br />
					<br />
					My interests are to produce projects that can leave my legacy
					on earth, &nbsp;
					<i>
						especially using{' '}
						<b className="purple">new market technologies</b>
					</i>
					<br />
					<br />
					Whenever possible I try to apply my knowledge in{' '}
					<b className="purple">React.js</b> and{' '}
					<b className="purple">Node</b> in real projects
					</p>
				</Col>
					<Col md={4} className="myAvtar">
						<Tilt>
							<img src={myImg} className="img-fluid" alt="avatar" />
						</Tilt>
					</Col>
				</Row>
				<Row>
					<Col md={12} className="home-about-social">
						<h1>Find me on</h1>
						<ul className="home-about-social-links">
							<li className="social-icons">
								<a
									href="https://github.com/CR3WDev"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<AiFillGithub />
								</a>
							</li>
							<li className="social-icons">
								<a
									href=""
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<AiFillYoutube />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://www.linkedin.com/in/marcelovtn/"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<FaLinkedinIn />
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};
export default Home2;
