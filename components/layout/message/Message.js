import styles from './Message.module.css';

import { FiX } from 'react-icons/fi';
import { useEffect, useState } from 'react';

function Message({ text, type }) {

    const [visible, setVisible] = useState(false);
    const [leave, setLeave] = useState();

    useEffect(() => {

        if (!text) {
            setVisible(false);
            return;
        }

        setVisible(true);

        const timer = setTimeout(() => {
            setLeave('leave');
            setTimeout(() => {
                setVisible(false);
            }, 2000)
        }, 5000)

        return () => clearTimeout(timer);

    }, [text]);

    return (
        <>
            {visible && (
                <div className={`${styles.messageContainer} ${styles[type]} ${styles[leave]}`}>
                    <p>{text}</p>
                    <div className={styles.icon}>
                        <FiX />
                    </div>
                </div>
            )}
        </>
    );
}

export default Message;