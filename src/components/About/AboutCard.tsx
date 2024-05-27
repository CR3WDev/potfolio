import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
	return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p style={{ textAlign: 'justify' }}>
						Eai beleza? Eu sou <span className="purple">Marcelo Távora </span>
						moro em <span className="purple"> Fortaleza, Brasil.</span>
						<br />
						Atualmente eu atuo como desenvolvedor full-stacks na Canix.
						<br />
						Sou formado em Análise e Desenvolvimento de Sistemas.
						<br />
						<br />
						Além de Programar, algumas atividades que eu gosto de fazer!
					</p>
					<ul>
						<li className="about-activity">
							<ImPointRight /> Jogar alguns jogos no computador
						</li>
						<li className="about-activity">
							<ImPointRight /> Ver animes
						</li>
						<li className="about-activity">
							<ImPointRight /> Viajar
						</li>
					</ul>

					<p style={{ color: 'rgb(155 126 172)' }}>
						"Eu sou um Programador ambicioso com apenas um objetivo simples:
						quero melhorar constantemente!"{' '}
					</p>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
