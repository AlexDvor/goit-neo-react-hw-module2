import './App.css';

import Description from './components/Description/Description';
import { useState } from 'react';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';

function App() {
	const [feedback, setFeedBack] = useState({ good: 0, neutral: 0, bad: 0 });
	return (
		<div className='container'>
			<Description
				title='Sip Happens Café'
				description='Please leave your feedback about our service by selecting one of the options below.'
			/>
			<Options />
			<Feedback />
		</div>
	);
}

export default App;
