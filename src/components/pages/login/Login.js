import styles from './Login.module.css';
import logo from '../../../assets/images/logo.png';

import { Link } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';
import { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

import InputBox from '../../layout/login/InputBox';
import Message from '../../layout/message/Message';

function Login({ setLogged }) {

    const [userEmail, setUserEmail] = useState();
    const [userPassword, setUserPassword] = useState();
    const [message, setMessage] = useState();
    const [typeMessage, setTypeMessage] = useState();


    function toggleUser(e) {

        e.preventDefault()

        setMessage(false);
        setTypeMessage(false);

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
                    setLogged(data.data);
                }
            })
            .catch((err) => console.log(err));

        } else {
            setMessage('Preencha todos os campos');
            setTypeMessage('danger');
        }        

    }

    return(
        <main className={styles.containerMain}>

            {message && <Message text={message} type={typeMessage} />}

            <form onSubmit={toggleUser} className={styles.containerLogin}>

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
                     value="Login"
                    />

                    <div className={styles.spacer}>
                        <hr/>
                        <p>Ou</p>
                        <hr/>
                    </div>

                    <Link to="/singin">Cadastre-se agora</Link>

                </div>
                

            </form>

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