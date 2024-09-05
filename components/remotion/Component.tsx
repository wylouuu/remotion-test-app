import { AbsoluteFill, Video } from 'remotion';

const BgVideo = () => (
	<AbsoluteFill>
		<Video
			src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
			className='w-full h-full object-cover object-center'
		/>
	</AbsoluteFill>
);

const OverlayDiv = ({ title }: { title: string }) => (
	<AbsoluteFill>
		<div className='w-full h-full flex justify-center items-center text-red-500 text-7xl font-bold'>
			<h1>Hello, {title}</h1>
		</div>
	</AbsoluteFill>
);

const Component = ({ title }: { title: string }) => {
	return (
		<>
			<BgVideo />
			<OverlayDiv title={title} />
		</>
	);
};

export default Component;
