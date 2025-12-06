import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import userData from '../src/userData.json';
import friends from '../src/friends.json';
import transactions from '../src/transactions.json';

import './App.css';

function App() {
	return (
		<div className='container'>
			<Profile
				name={userData.username}
				tag={userData.tag}
				location={userData.location}
				image={userData.avatar}
				stats={userData.stats}
			/>
			<FriendList friends={friends} />
			<TransactionHistory items={transactions} />
		</div>
	);
}

export default App;
