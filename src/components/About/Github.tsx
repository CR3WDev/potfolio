import { Row } from 'react-bootstrap';
import GitHubCalendar from 'react-github-calendar';

function Github() {
	return (
		<Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
			<h1 className="project-heading" style={{ paddingBottom: '20px' }}>
				Days I <strong className="purple">Code</strong>
			</h1>
			<GitHubCalendar username="CR3WDev" />
		</Row>
	);
}

export default Github;
