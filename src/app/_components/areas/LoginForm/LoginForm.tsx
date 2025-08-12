"use client"
import Button from "@/app/_components/atoms/Button/Button";
import EmailForm from "@/app/_components/atoms/EmailForm/EmailForm";
import PasswordForm from "@/app/_components/atoms/PasswordForm/PasswordForm";
import { ErrorMessage } from '@hookform/error-message';
import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./LoginForm.module.scss";

type Inputs = {
  email: string;
}


const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = useCallback(() => (data) => {
    console.log(data);
    reset();
  }, [reset]);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <EmailForm {...register('email', {
          required: true,
          maxLength: 256,
          pattern: {
            value:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: 'メールアドレスの形式が不正です',
          }
        })} />
      <ErrorMessage errors={errors} name="email" />
      <PasswordForm />
      <Button>ログイン</Button>
    </form>
  )
}

export default LoginForm;