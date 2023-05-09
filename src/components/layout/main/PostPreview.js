import styles from './PostPreview.module.css'
import account from '../../../assets/images/account.png';

function PostPreview({ title, content, datetime }) {

    return (
        <div className={styles.card}>
            
            <div className={styles.top}>

                <div className={styles.left}>
                    <img src={account} alt="user-foto" />
                    <div>
                        <h3>Joaquim Souza</h3>
                        <p>#ProgramaçãoScript</p>
                    </div>
                    <p>4° Semestre</p>
                </div>

                <h3>3 horas atrás</h3>
                    
            </div>

            <div className={styles.content}>
                <p className={styles.title}>{title}</p>
                <div>
                    {content}
                </div>
            </div>

        </div>
    )
}

export default PostPreview;