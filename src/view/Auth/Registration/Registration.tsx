// import { useState, FormEvent } from "react";
import "./Registration.less";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import * as API from "./../../../API/index";
import Input from "./../../../components/Input/Input";
import InputPassword from "./../../../components/InputPassword/InputPassword";
import Button from "./../../../components/Button/Button";
import { useAppSelector, useAppDispatch } from "./../../../hooks/reduxHooks";

import {setEmailAction} from "./../../../redux/actions/emailAction";

type FormValues = {
    email: string;
    password: string;
    confirmPassword: string;
};

interface IRegistration {
    openModal: any;
}

const Registration = ({openModal}:IRegistration) => {
    const dispatch = useAppDispatch();
    const email = useAppSelector(state=> state.email.email);
    console.log(email,"email")
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Некоректный емейл').required('Это поле должно быть заполнено'),
        password: Yup.string()
            .required('Required')
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,14}$/,
                `Длина пароля должна быть не менее 8 и не более 14 символов.
                Пароль должен состоять из букв латинского алфавита (A-z), арабских цифр (0-9)`
            ),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Пароли должны совпадать')
            .required('Required')
    });

    const { control, setValue, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: yupResolver(validationSchema)
    });

    const registerFormSubmit: SubmitHandler<FormValues> = async (data) => {
        // const response = await API.postRegister(data);
        // dispatch({type:"SET_EMAIL",payload: data.email})
        dispatch(setEmailAction(data.email))
        // console.log(data, response, "data-submit");
        openModal();
    };

    return (
            <form onSubmit={handleSubmit(registerFormSubmit)}>
                <div className="inputEmail">
                    <Controller
                        name="email"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Input label="E-mail" placeholder="Email" error={errors.email}
                            onBlur={onBlur} onChange={onChange} value={value} ref={ref} />
                        )}
                    />

                    {errors.email && <span className="error">{errors.email.message}</span>}
                </div>

                <div className="inputPass">
                    <Controller
                        name="password"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <InputPassword
                                label="Придумайте пароль"
                                placeholder="Укажите ваш пароль"
                                isKey={true}
                                setGeneratePassHandler={(val: string) => setValue("password", val)}
                                onBlur={onBlur} 
                                onChange={onChange} 
                                value={value} 
                                ref={ref}
                                error={errors.password}
                            />
                        )}
                    />

                    {errors.password && <span className="error">{errors.password.message}</span>}
                </div>

                <div className="inputConfirmPass">
                    <Controller
                        name="confirmPassword"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <InputPassword
                                label="Повторите пароль"
                                placeholder="Повторите ваш пароль"
                                value={value}
                                onBlur={onBlur}
                                onChange={onChange}
                                ref={ref}
                                error={errors.password}
                            />
                        )}
                    />
                    {errors.confirmPassword && <span className="error">{errors.confirmPassword.message}</span>}
                </div>

                <Button type="submit">Зарегиситрироваться</Button>
            </form>
    )
}
export default Registration