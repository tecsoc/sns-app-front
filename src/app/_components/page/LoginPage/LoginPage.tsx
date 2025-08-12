import LoginForm from "../../areas/LoginForm/LoginForm";
import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <h2>ログイン</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;