import React from "react";
import {useForm} from 'react-hook-form';
import classesSignIn from './sign-in.module.scss'

const SignIn = () => {

/*     const [invalidPasswordEmail, setInvalidPasswordEmail] = useState(false); // неверный пароль или емайл
    const [isLoadingSignIn, setIsLoadingSignIn] = useState(false); // отвечает за загрузку данных
    const [redirect, setRedirect] = useState(false); // redirect */
    const {register, handleSubmit, formState: { errors }} = useForm();

    const onSignIn = () => {}

    return(
        <div className={classesSignIn["sign-in"]}>
            <div className={classesSignIn["sign-in__header"]}>
                <span>LOGIN</span>
                <div className={classesSignIn.close}/>
            </div>
            <div className={classesSignIn["sign-in__lead"]}>
                <span>If you have an account with us, please log in.</span>
            </div>
            <form className={classesSignIn["sign-in__form"]} onSubmit={handleSubmit( data => onSignIn(data))}>
                <label className={classesSignIn["input-field"]}>
                    <div>EMAIL</div>
                    <input 
                        /* className={errors.email || invalidPasswordEmail ? classesSignIn["warning-border"] : null}  */
                        type="email" 
                        placeholder="Enter your email" 
                        {...register("email", {
                            required: "Please enter a valid email address",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Please enter a valid email address'
                            }
                        })}
                    />
                    <div className={classesSignIn["warning-text"]}>{errors.email?.message}</div>
                </label>
                <label className={classesSignIn["input-field"]}>
                    <div>PASSWORD</div>
                    <input 
                        /* className={errors.password || invalidPasswordEmail ? classesSignIn["warning-border"] : null}  */
                        type='password' 
                        placeholder="Your password" 
                        {...register("password", {
                            required: "Your password needs to be at least 8 characters",
                            minLength: {value: 8, message: "Your password needs to be at least 8 characters"},
                            maxLength: {value: 40, message: "Your password needs be no more than 40 characters"},
                        })}
                    />
                    <div className={classesSignIn["warning-text"]}>{errors.password?.message}</div>
                </label>
                <label className={classesSignIn["input-create"]}>
                    <input 
                        type="submit" 
                        value="LOGIN" 
                    />
                </label> 
            </form>
            <div className={classesSignIn["sign-in__or"]}><span>or</span></div>  
            <div className={classesSignIn["sign-in__f-g-a"]}>
                <div className={classesSignIn["sign-in__facebook"]}/>
                <div className={classesSignIn["sign-in__google"]}/>
                <div className={classesSignIn["sign-in__apple"]}/>
            </div>
            <div className={classesSignIn["sign-in__new-customer"]}><span>New Customer?</span></div>
            <div className={classesSignIn["sign-in__create-account"]}><span>CREATE YOUR ACCOUNT</span></div>
        </div>
    )
}

export default SignIn;