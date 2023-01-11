import { Canvas } from '@react-three/fiber';
import { Scene } from './Scene';
import { Physics } from '@react-three/cannon';
import { useState } from 'react';
import './index.css';

function App() {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<>
			<div
				style={{
					position: 'relative',
					height: '100vh',
					width: '100vw',
					background: 'red',
				}}>
				<Canvas>
					<Physics broadphase="SAP" gravity={[0, -2.6, 0]}>
						<Scene setIsLoading={(value) => setIsLoading(value)} />
					</Physics>
				</Canvas>
			</div>

			{isLoading && (
				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						minHeight: '100vh',
						minWidth: '100vw',
						background: 'red',
					}}>
					Loading
				</div>
			)}

			<div className="controls">
				<p>press w a s d to move</p>
				<p>press k to swap camera</p>
				<p>press r to reset</p>
				<p>press arrows for flips</p>
			</div>
		</>
	);
}

export default App;
