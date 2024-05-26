import Typewriter from 'typewriter-effect';

const Type = () => {
	return (
		<Typewriter
			options={{
				strings: [
					'Front-end Developer',
					'Back-end Developer',
					'Software Developer',
				],
				autoStart: true,
				loop: true,
				deleteSpeed: 50,
			}}
		/>
	);
};

export default Type;
