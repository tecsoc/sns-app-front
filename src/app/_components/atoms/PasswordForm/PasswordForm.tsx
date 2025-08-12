import styles from "./PasswordForm.module.scss";

const PasswordForm = () => {
  return <input type="password" placeholder="Password" className={styles.password} />
};

export default PasswordForm;