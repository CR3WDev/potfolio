// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Pre = (props: any) => {
	return <div id={props.load ? 'preloader' : 'preloader-none'}></div>;
};

export default Pre;
