import Button from "@/app/_components/atoms/Button/Button";
import EmailForm from "@/app/_components/atoms/EmailForm/EmailForm";
import PasswordForm from "@/app/_components/atoms/PasswordForm/PasswordForm";
import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <h2>ログイン</h2>
      <form className={styles.form}>
        <EmailForm />
        <PasswordForm />
        <Button>ログイン</Button>
      </form>
    </div>
  );
};

export default LoginPage;