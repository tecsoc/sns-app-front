import styles from "./EmailForm.module.scss";

const EmailForm = (props) => {
  return <input type="email" placeholder="Email" className={styles.email} {...props} />;
};

export default EmailForm;