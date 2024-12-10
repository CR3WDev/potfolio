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
							Deixe-me <span className="purple"> APRESENTAR </span>
						</h1>
						<p className="home-about-body">
							Sou um programador apaixonado por programar que busca sempre se
							aperfeiçoar como programador
							<br />
							<br />
							Tenho expertise em linguágens clássicas como:
							<i>
								<b className="purple"> Java, Typescript e javascript</b>
							</i>
							<br />
							<br />
							Meus Interesses são produzir projetos que possam deixar meu legado
							na terra, &nbsp;
							<i>
								principalmente usando{' '}
								<b className="purple">novas técnologias do mercado</b>
							</i>
							<br />
							<br />
							Sempre que possível tento aplicar meus conhecimentos em{' '}
							<b className="purple">React.js</b> e{' '}
							<b className="purple">Node</b> em projetos reais
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
						<h1>Me encontre no</h1>
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
