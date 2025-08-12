import styles from "./EmailForm.module.scss";

const EmailForm = () => {
  return <input type="email" placeholder="Email" className={styles.email} />;
};

export default EmailForm;