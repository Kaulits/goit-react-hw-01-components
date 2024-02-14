import ProfileStyles from './ProfileStyles.module.css';

export const Profile = user => {
    return (
        <div className={ProfileStyles.profile}>
  <div className={ProfileStyles.description}>
    <img
      src={user.avatar}
      alt="User avatar"
      className={ProfileStyles.avatar}
    />
    <p className={ProfileStyles.name}>{user.username}</p>
    <p className={ProfileStyles.tag}>{user.tag}</p>
    <p className={ProfileStyles.location}>{user.location}</p>
  </div>

  <ul className={ProfileStyles.stats}>
     <li className={ProfileStyles.list}>
      <span className={ProfileStyles.label}>Followers </span>
      <span className={ProfileStyles.quantity}>{user.stats.followers}</span>
    </li>
     <li className={ProfileStyles.list}>
      <span className={ProfileStyles.label}>Views </span>
      <span className={ProfileStyles.quantity}>{user.stats.views}</span>
    </li>
     <li className={ProfileStyles.list}>
      <span className={ProfileStyles.label}>Likes </span>
      <span className={ProfileStyles.quantity}>{user.stats.likes}</span>
    </li>
  </ul>
</div>
    )
}