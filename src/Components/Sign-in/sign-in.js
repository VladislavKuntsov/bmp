import React from "react";
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import classesSignIn from './sign-in.module.scss'

const SignIn = () => {

/*     const [invalidPasswordEmail, setInvalidPasswordEmail] = useState(false); // неверный пароль или емайл
    const [isLoadingSignIn, setIsLoadingSignIn] = useState(false); // отвечает за загрузку данных */
   /*  const [redirect, setRedirect] = useState(false); // redirect  */
    const {register, handleSubmit, formState: { errors }} = useForm();

    const onSignIn = () => {}

    /* if(redirect) return <Redirect to="/articles"/> */

    return(
        <div className={classesSignIn["bl-sign-in"]}>
            <div className={classesSignIn["sign-in"]}>
                <div className={classesSignIn.header}>
                    <div className={classesSignIn.title}>LOGIN</div>
                    <Link to="/misto"><div className={classesSignIn.close}/></Link>
                </div>
                <div className={classesSignIn.lead}>
                    If you have an account with us, please log in.
                </div>
                <form className={classesSignIn.form} onSubmit={handleSubmit( data => onSignIn(data))}>
                    <label className={classesSignIn["input-field"]}>
                        <div className={classesSignIn["input-title-email"]}>
                            EMAIL
                        </div>
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
                        <div className={classesSignIn["input-title-password"]}>
                            <div>PASSWORD</div>
                            <div>Lost your password?</div>   
                        </div>
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
                <div className={classesSignIn.or}><span>or</span></div>  
                <div className={classesSignIn["f-g-a"]}>
                    <div className={classesSignIn.facebook}/>
                    <div className={classesSignIn.google}/>
                    <div className={classesSignIn.apple}/>
                </div>
                <div className={classesSignIn["new-customer"]}><span>New Customer?</span></div>
                <div className={classesSignIn["create-account"]}><span>CREATE YOUR ACCOUNT</span></div>
            </div>    
        </div>
       
    )
}

export default SignIn;