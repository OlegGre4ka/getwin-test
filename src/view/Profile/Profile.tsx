import Layout from "./../../components/Layout/Layout";
import "./Profile.less";
import BackIcon from "./../../assets/BackIcon.png";
import { useNavigate } from "react-router-dom";
import Button from "./../../components/Button/Button";
import Input from "./../../components/Input/Input";
import { useAppSelector } from "./../../hooks/reduxHooks";


const Profile = () => {
    let navigate = useNavigate();
    const email = useAppSelector(state => state.email.email);

    console.log(email, "email")

    return (
        <>
            <Layout isProfile={true}>
                <div className="profileWrapper">
                    <div className="profileForm">
                        <h1 className="profileTitle">Профиль пользователя</h1>
                        <div className="nameInputsBlock">

                            <div className="nameInput">
                                <Input label="Фамилия" placeholder="Михайлов" isLabelStar={true} />
                            </div>

                            <div className="nameInput">
                                <Input label="Имя" placeholder="Михаил" isLabelStar={true} />
                            </div>

                            <div className="nameInput">
                                <Input label="Отчество" placeholder="Михайлович" />
                            </div>
                        </div>
                        <div className="inputProfile">
                            <Input label="Дата рождения" placeholder="10/08/1983" isLabelStar={true} />
                        </div>

                        <div className="inputProfile">
                            <Input label="Телефон" placeholder="+38 (050) 725 60 09" isConfirmPhone={true} isLabelStar={true} />
                        </div>

                        <div className="inputProfile">
                            <Input label="E-mail" value={email} disabled={true} />
                        </div>
                    </div>
                    <div className="buttonBlock">
                        <div className="exit" onClick={() => navigate("/")}>
                            <img className="backIcon" src={BackIcon} alt="BackIcon" />
                            <span className="exitText">Выход</span>
                        </div>
                        <Button btnStyle="primary">Далее</Button>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Profile