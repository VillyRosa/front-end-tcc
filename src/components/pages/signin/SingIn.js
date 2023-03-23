import styles from '../login/Login.module.css';
import logo from '../../../assets/images/logo.png';

import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';

import InputBox from '../../layout/login/InputBox';
import { useState } from 'react';

function Login({ setLogged }) {

    const [userEmail, setUserEmail] = useState();
    const [userPassword, setUserPassword] = useState();

    function toggleUser() {

        if (userEmail && userPassword) {

            fetch('http://localhost/tcc/api-tcc/services/authUser.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                useremail: userEmail,
                userpassword: userPassword
            })
            })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                if (!data.error) {
                    setLogged(true);
                }
            })
            .catch((err) => console.log(err));

        } else {
            alert('Campos faltando!');
        }        

    }

    return(
        <main className={styles.containerMain}>

            <div className={styles.containerImage}>
                <Player
                    autoplay
                    loop
                    src="https://assets5.lottiefiles.com/packages/lf20_zI51PdcxCa.json"
                    style={{ height: '800px', width: '500px' }}
                    background="transparent"
                    speed="0.5"
                />
            </div>

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
                     handleChange={setUserEmail}
                    />

                    <InputBox
                     text='Senha'
                     type='password'
                     name='password'
                     placeholder='Insira sua senha'
                     icon={<FiLock />}
                     handleChange={setUserPassword}
                    />

                </div>

                <div className={styles.buttons}>

                    <input 
                     type="submit"
                     value="Cadastrar"
                     onClick={toggleUser}
                    />

                    <div className={styles.spacer}>
                        <hr/>
                        <p>Ou</p>
                        <hr/>
                    </div>

                    <Link to="/">Logar</Link>

                </div>
                

            </div>

        </main>    
    );
}

export default Login;