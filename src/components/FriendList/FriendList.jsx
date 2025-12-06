import FriendItem from '../FriendItem/FriendItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
	return (
		<ul className={styles.list}>
			{friends.map(item => (
				<FriendItem
					avatar={item.avatar}
					name={item.name}
					isOnline={item.isOnline}
					key={item.id}
				/>
			))}
		</ul>
	);
};

export default FriendList;
