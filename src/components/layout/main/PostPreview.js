import styles from './PostPreview.module.css'
import account from '../../../assets/images/account.png';

function PostPreview({ title }) {
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
                    <p>html</p>
                    <p>_____head</p>
                    <p>__________title Trabalho Ronnie title</p>
                    <p>_____head</p>
                    <p>_____body</p>
                    <p>__________?php</p>
                    <p>_______________$nome = "Joaquim"</p>
                    <p>_______________echo $nome;</p>
                    <p>__________?</p>
                    <p>_____body</p>
                    <p>html</p>
                </div>
            </div>

        </div>
    )
}

export default PostPreview;