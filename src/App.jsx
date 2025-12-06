import './App.css';

import Description from './components/Description/Description';
import { useState } from 'react';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

const initialState = {
	good: 0,
	neutral: 0,
	bad: 0,
};

function App() {
	const [feedback, setFeedBack] = useState(initialState);
	const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
	const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

	const updateFeedback = feedbackType => {
		feedbackType = feedbackType.toLowerCase();

		if (typeof feedbackType === 'string' && feedbackType === 'reset') {
			setFeedBack(initialState);
			return;
		}

		if (typeof feedbackType === 'string' && feedbackType !== 'reset') {
			setFeedBack(prev => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
			return;
		}
	};

	return (
		<div className='container'>
			<Description
				title='Sip Happens Café'
				description='Please leave your feedback about our service by selecting one of the options below.'
			/>
			<Options handleClick={updateFeedback} isVisible={totalFeedback} />

			{totalFeedback > 0 ? (
				<Feedback
					feedbackProps={feedback}
					total={totalFeedback}
					positive={positiveFeedback}
				/>
			) : (
				<Notification>No feedback yet</Notification>
			)}
		</div>
	);
}

export default App;
