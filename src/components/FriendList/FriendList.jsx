import FriendsStyle from './FriendsStyle.module.css'

export const FriendList = ({ friends }) => {
    return (
        <ul className={FriendsStyle.friendList}>
            {friends.map(item => {
                return(
                    <FriendItem
                        key={item.id}
                        avatar={item.avatar}
                        name={item.name}
                        isOnline={item.isOnline}
                    />
     )
 })}
</ul>
    )
} 

export const FriendItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={FriendsStyle.item}>
            <span className={isOnline ? `${FriendsStyle.statusOn}` : `${FriendsStyle.statusOff}`}></span>
  
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
</li>
    )
}
