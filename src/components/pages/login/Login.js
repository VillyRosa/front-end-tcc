import styles from './Login.module.css';
import logo from '../../../assets/images/logo.png';

import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';

import InputBox from '../../layout/login/InputBox';

function Login() {
    return(
        <main className={styles.containerMain}>

            <div className={styles.containerLogin}>

                <div className={styles.containerLogo}>
                    <img src={logo} alt="logo" />
                    <h2>Nome do Projeto / Tcc</h2>
                </div>

                <div className={styles.inputs}>

                    <InputBox
                     text='E-mail'
                     type='email'
                     name='email'
                     placeholder='email@provedor.com'
                     icon={<FiMail />}
                    />

                    <InputBox
                     text='Senha'
                     type='password'
                     name='password'
                     placeholder='Insira sua senha'
                     icon={<FiLock />}
                    />

                </div>

                <div className={styles.buttons}>

                    <input 
                     type="submit"
                     value="Login"
                    />

                    <div className={styles.spacer}>
                        <hr/>
                        <p>Ou</p>
                        <hr/>
                    </div>

                    <Link to="/singin">Cadastre-se agora</Link>

                </div>
                

            </div>

            <div className={styles.containerImage}>
                <Player
                    autoplay
                    loop
                    src="https://assets6.lottiefiles.com/packages/lf20_hzgq1iov.json"
                    style={{ height: '500px', width: '500px' }}
                    background="transparent"
                    speed="0.5"
                />
            </div>

        </main>    
    );
}

export default Login;