'use client';
import Component from '@/components/remotion/Component';
import { Input } from '@/components/ui/input';
import { Player, RenderLoading } from '@remotion/player';
import { useCallback, useState } from 'react';
import { AbsoluteFill } from 'remotion';

export default function Home() {
	const renderLoading: RenderLoading = useCallback(({ height, width }) => {
		return (
			<AbsoluteFill style={{ backgroundColor: 'gray' }}>
				Loading player ({height}x{width})
			</AbsoluteFill>
		);
	}, []);

	const [name, setName] = useState('Wylou');

	const { fps, seconds } = { fps: 30, seconds: 120 };
	return (
		<main>
			<div className='flex items-center justify-center max-h-screen w-screen overflow-x-hidden flex-row'>
				<Player
					fps={fps}
					component={() => <Component title={name} />}
					durationInFrames={fps * seconds}
					renderLoading={renderLoading}
					controls
					autoPlay
					loop
					compositionWidth={720}
					compositionHeight={1280}
					className='max-h-screen'
				/>
			</div>
			<div className='flex justify-between gap-10'>
				<Input
					type='text'
					placeholder='Type your name'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
		</main>
	);
}
