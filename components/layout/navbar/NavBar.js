import styles from './NavBar.module.css';
import logo from '../../../assets/images/logo.png';
import account from '../../../assets/images/account.png';

import { Link } from 'react-router-dom';
import { IoHomeOutline, IoBookOutline, IoCodeSlashOutline, IoPersonOutline, IoEllipsisHorizontalCircleOutline } from 'react-icons/io5';

function NavBar() {
    return (
        <nav className={styles.navBar}>

            <Link to="/"><img src={logo} alt="logo" /></Link>

            <ul>

                <li><Link to="/"><IoHomeOutline /></Link></li>
                <li><Link to="/"><IoBookOutline /></Link></li>
                <li><Link to="/"><IoCodeSlashOutline /></Link></li>
                <li><Link to="/"><IoPersonOutline /></Link></li>
                <li><Link to="/"><IoEllipsisHorizontalCircleOutline /></Link></li>

            </ul>

            <Link to="/"><img src={account} alt="account" /></Link>

        </nav>
    )
}

export default NavBar;