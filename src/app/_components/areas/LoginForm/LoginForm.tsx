import Button from "@/app/_components/atoms/Button/Button";
import EmailForm from "@/app/_components/atoms/EmailForm/EmailForm";
import PasswordForm from "@/app/_components/atoms/PasswordForm/PasswordForm";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  return (
    <form className={styles.form}>
      <EmailForm />
      <PasswordForm />
      <Button>ログイン</Button>
    </form>
  )
}

export default LoginForm;