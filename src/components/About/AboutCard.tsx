import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hey, what's up? I'm <span className="purple">Marcelo Távora </span>
            and I live in <span className="purple"> Fortaleza, Brazil.</span>
            <br />
            Currently I work as a full-stack developer at Febracis.
            <br />
            I have a degree in Systems Analysis and Development.
            <br />
            <br />
            Besides programming, some activities that I enjoy doing!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing some computer games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching animes
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>
          <p style={{ color: 'rgb(155 126 172)' }}>
            "I am an ambitious programmer with just one simple goal:
            I want to constantly improve!"{' '}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;