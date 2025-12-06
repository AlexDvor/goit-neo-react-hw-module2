import styles from './Profile.module.css';

const Profile = ({
	name,
	tag,
	location,
	image = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
	stats,
}) => {
	return (
		<div className={styles.card}>
			<div className={styles.infoWrapper}>
				<div className={styles.userThumbAvatar}>
					<img className={styles.userImage} src={image} alt='User avatar' />
				</div>
				<p>{name}</p>
				<p>@{tag}</p>
				<p>{location}</p>
			</div>

			<ul className={styles.statsList}>
				<li className={styles.statsItem}>
					<span>Followers</span>
					<span>{stats.followers}</span>
				</li>

				<li className={styles.statsItem}>
					<span>Views</span>
					<span>{stats.views}</span>
				</li>

				<li className={styles.statsItem}>
					<span>Likes</span>
					<span>{stats.likes}</span>
				</li>
			</ul>
		</div>
	);
};

export default Profile;
