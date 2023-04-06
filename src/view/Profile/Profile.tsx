import Layout from "./../../components/Layout/Layout";
import "./Profile.less";
import BackIcon from "./../../assets/BackIcon.png";
import { useNavigate } from "react-router-dom";
import Button from "./../../components/Button/Button";
import Input from "./../../components/Input/Input";
import Select from "./../../components/Select/Select";
import * as API from "./../../API/index";
import { useAppSelector } from "./../../hooks/reduxHooks";
import Modal from "./../../components/Modal/Modal";
import LogoutModal from "./../../components/LogoutModaL/LogoutModal";
import useModal from "./../../hooks/useModal";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

type FormValues = {
    name: string;
    sname: string;
    lname?: string;
    birth_date: string;
    gender_id: number;
    phone: string;

};

// interface IModal {
//     isModalOpen: boolean;
//     openModal: () => void;
//     closeModal: () => void;
//   }
const Profile = () => {
    let navigate = useNavigate();
    const email = useAppSelector(state => state.email.email);
    const [isModalOpen, openModal, closeModal]: any = useModal();
    const [isLogoutModalOpen, openLogoutModal, closeLogoutModal]: any = useModal();


    const validationSchema = Yup.object().shape({
        // email: Yup.string().email('Некоректный емейл').required('Это поле должно быть заполнено'),
        name: Yup.string()
            .required('Это поле должно быть заполнено'),
        sname: Yup.string()
            .required('Это поле должно быть заполнено'),
        birth_date: Yup.string()
            .required('Это поле должно быть заполнено'),
        gender_id: Yup.number()
            .required('Это поле должно быть заполнено'),
        phone: Yup.string()
            .required('Это поле должно быть заполнено')

    });

    const { control, setValue, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: yupResolver(validationSchema)
    });

    const createProfileSubmit: SubmitHandler<FormValues> = async (data) => {
        // let Data = { ...data, email };
        // const response = await API.postCreateProfile(data);
        // dispatch(setEmailAction(data.email))
        // localStorage.setItem("user_token", "8ceb71a87b37b5371d749bb9eae06644");
        // console.log(data, response, "data-submit");
        // response.data.status === "success" && openModal();
        openModal();
    };

    return (
        <>
            {!isLogoutModalOpen && <Layout isProfile={true}>

                    <form className="profileWrapper" onSubmit={handleSubmit(createProfileSubmit)}>
                        <div className="profileForm">

                            <h1 className="profileTitle">Профиль пользователя</h1>
                            <div className="nameInputsBlock">

                                <div className="nameInput">
                                    <Controller
                                        name="sname"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field: { onChange, onBlur, value, ref } }) => (
                                            <Input label="Фамилия" placeholder="Михайлов" isLabelStar={true} error={errors.sname}
                                                onBlur={onBlur} onChange={onChange} value={value} ref={ref} />
                                        )}
                                    />

                                    {errors.sname && <span className="error">{errors.sname.message}</span>}
                                </div>

                                <div className="nameInput">
                                    <Controller
                                        name="name"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field: { onChange, onBlur, value, ref } }) => (
                                            <Input label="Имя" placeholder="Михаил" isLabelStar={true} error={errors.name}
                                                onBlur={onBlur} onChange={onChange} value={value} ref={ref} />
                                        )}
                                    />

                                    {errors.name && <span className="error">{errors.name.message}</span>}
                                </div>

                                <div className="nameInput">
                                    <Controller
                                        name="lname"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field: { onChange, onBlur, value, ref } }) => (
                                            <Input label="Отчество" placeholder="Михайлович" error={errors.lname}
                                                onBlur={onBlur} onChange={onChange} value={value} ref={ref} />
                                        )}
                                    />

                                    {errors.lname && <span className="error">{errors.lname.message}</span>}
                                </div>
                            </div>
                            <div className="inputProfile">
                                <Controller
                                    name="birth_date"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: { onChange, onBlur, value, ref } }) => (
                                        <Input label="Дата рождения" placeholder="10/08/1983" isLabelStar={true} error={errors.birth_date}
                                            onBlur={onBlur} onChange={onChange} value={value} ref={ref} />
                                    )}
                                />

                                {errors.birth_date && <span className="error">{errors.birth_date.message}</span>}
                            </div>
                            <div className="inputProfile">
                                <Controller
                                    name="gender_id"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: { onChange, onBlur, value, ref } }) => (
                                        <Select label="Пол" placeholder="Выберите пол" isLabelStar={true} error={errors.gender_id}
                                            onBlur={onBlur} onChange={onChange} value={value} ref={ref} />
                                    )}
                                />

                                {errors.gender_id && <span className="error">{errors.gender_id.message}</span>}
                            </div>
                            <div className="inputProfile">
                                <Controller
                                    name="phone"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: { onChange, onBlur, value, ref } }) => (
                                        <Input label="Телефон" placeholder="+38 (050) 725 60 09" isConfirmPhone={true} isLabelStar={true}
                                            error={errors.phone} onBlur={onBlur} onChange={onChange} value={value} ref={ref} />
                                    )}
                                />

                                {errors.phone && <span className="error">{errors.phone.message}</span>}
                            </div>

                            <div className="inputProfile">
                                <Input label="E-mail" value={email} disabled={true} />
                            </div>
                        </div>
                        <div className="buttonBlock">
                            <div className="exit" onClick={() => openLogoutModal()}>
                                <img className="backIcon" src={BackIcon} alt="BackIcon" />
                                <span className="exitText">Выход</span>
                            </div>
                            <div>
                                <Button type="submit" btnStyle="primary">Далее</Button>
                            </div>
                        </div>
                    </form>
            </Layout>}
            {isModalOpen && <Modal
                text1="Новый пользователь успешно создан и добавлен в базу данных"
                onHide={closeModal} />}

            {isLogoutModalOpen && <LogoutModal
                onHide={closeLogoutModal} />}
        </>
    )
}

export default Profile