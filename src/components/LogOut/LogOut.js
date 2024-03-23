import styles from './LogOut.module.scss';
import { logOut } from '../../utilities/users-service';
import { ImExit } from "react-icons/im";


export default function LogOut({ user, setUser }) {
function handleLogOut() {
  logOut();
  setUser(null);
}

return (
  <div className={styles.LogOut}>
    {/* <div>{user.name}</div>
    <div className={styles.email}>{user.email}</div> */}
    {/* <button className="btn-sm" onClick={handleLogOut}>LOG OUT</button> */}
    <div onClick={handleLogOut}><ImExit fontSize='48'/></div>

  </div>
);
}