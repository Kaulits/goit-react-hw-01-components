export const FriendList = ({ friends }) => {
    return (
        <ul class="friend-list">
            {friends.map(item => {
                return(
                    <FriendItem
                        key={item.id}
                        avatar={item.avatar}
                        name={item.name}
                    />
     )
 })}
</ul>
    )
} 

export const FriendItem = ({ avatar, name, isOnline }) => {
    return (
        <li class="item">
  <span class="status"></span>
  <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
</li>
    )
}