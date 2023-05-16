import styles from './Aside.module.css';

import { IoSearch } from "react-icons/io5";
import PerfilCard from '../main/PerfilCard';

function Aside() {
    return (
        <aside className={styles.aside}>
            <div className={styles.inputSearchBox}>
                <input type="text" placeholder='Pesquisar . . .' />
                <IoSearch className={styles.icon} />
            </div>

            <PerfilCard userObj={{name: 'Villy'}} />

        </aside>
    );
}

export default Aside;