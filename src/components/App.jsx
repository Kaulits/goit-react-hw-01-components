
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
// import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from './Profile/user.json';
import data from './Statistics/data.json';




export const App = () => {
  return (
    <>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      {/* <FriendList/> */}
      <TransactionHistory/>
    </>
    
  );
};
