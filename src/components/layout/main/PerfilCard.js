import styles from './PerfilCard.module.css';

import account from '../../../assets/images/account.png';

function PerfilCard( { userObj } ) {
    return (
        <div className={styles.container}>
            <img src={account} alt="" />
            {userObj.name}
        </div>
    );
}

export default PerfilCard;