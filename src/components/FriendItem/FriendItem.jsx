import styles from './FriendItem.module.css';

const FriendItem = ({ avatar, name, isOnline }) => {
	const userStatus = [styles.status, isOnline ? styles.online : styles.offline].join(
		' '
	);
	return (
		<li className={styles.item}>
			<img src={avatar} alt='Avatar' width='48' />
			<p>{name}</p>
			<p className={userStatus}>{isOnline ? 'Online' : 'Offline'}</p>
		</li>
	);
};

export default FriendItem;
