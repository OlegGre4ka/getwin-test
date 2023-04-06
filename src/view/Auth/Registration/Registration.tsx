import "./Registration.less";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import * as API from "./../../../API/index";
import Input from "./../../../components/Input/Input";
import InputPassword from "./../../../components/InputPassword/InputPassword";
import Button from "./../../../components/Button/Button";
import Google from "./../../../assets/Google.png";
import Facebook from "./../../../assets/Facebook.png";
import Linkedin from "./../../../assets/Linkedin.png";

import { useAppSelector, useAppDispatch } from "./../../../hooks/reduxHooks";
import { setEmailAction, setProfileAction } from "./../../../redux/actions/emailAction";

type FormValues = {
    email: string;
    password: string;
    confirmPassword?: string;
};

interface IRegistration {
    openModal: any;
}

const Registration = ({ openModal }: IRegistration) => {
    const dispatch = useAppDispatch();
    // const email = useAppSelector(state => state.email.email);
    // console.log(email, "email")

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Некоректный емейл').required('Это поле должно быть заполнено'),
        password: Yup.string()
            .required('Это поле должно быть заполнено')
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,14}$/,
                `Длина пароля должна быть не менее 8 и не более 14 символов.
                Пароль должен состоять из букв латинского алфавита (A-z), арабских цифр (0-9)`
            ),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Пароли должны совпадать')
            .required('Это поле должно быть заполнено')
    });

    const { control, setValue, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: yupResolver(validationSchema)
    });

    const registerFormSubmit: SubmitHandler<FormValues> = async (data) => {
        // dispatch({type:"SET_EMAIL",payload: data.email})
        delete data.confirmPassword;
        let Data = {...data, ref:"http://example.com"};
        // const response = await API.postRegister(Data);
        dispatch(setEmailAction(data.email))
        // localStorage.setItem("user_token","'678e812f99f9422489b45187bfb781e7'");
        // localStorage.setItem("user_token",response?.data?.user_data?.token);
        console.log( Data, "data-submit");
        openModal();
        // response.data.status === "success" && openModal();
    };

    return (
        <>
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

                <Button type="submit">Зарегистрироваться</Button>
            </form>
            <div className="socialTitleBlock">
                <span className="line"></span>
                <span className="socialMediaTitle">Или войдите с помощью</span>
                <span className="line"></span>
            </div>
            <div className="socialButtonsBlock">
                <Button btnStyle="socialBtn">
                    <img src={Google} alt="Google" />
                </Button>
                <Button btnStyle="socialBtn">
                    <img src={Facebook} alt="Google" />
                </Button>
                <Button btnStyle="socialBtn">
                    <img src={Linkedin} alt="Google" />
                </Button>
            </div>
        </>
    )
}
export default Registration