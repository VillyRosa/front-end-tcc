import styles from './InputBox.module.css';

function InputBox({ text, name, type, placeholder, icon }) {

    function getFocus() {
        document.querySelector(`#${name}`).focus();
    }

    return (
        <div className={styles.inputContainer}>
            <label htmlFor={name}>{text}</label>
            <div className={styles.inputBox}>

                <input
                 type={type}
                 name={name}
                 id={name}
                 placeholder={placeholder}
                />

                <div onClick={getFocus} className={styles.symble}>
                    {icon}
                </div>

            </div>
        </div>
    );
}

export default InputBox;