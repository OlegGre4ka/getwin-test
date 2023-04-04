import Layout from "./../../components/Layout/Layout";
import "./Profile.less";
import BackIcon from "./../../assets/BackIcon.png";
import { useNavigate } from "react-router-dom";
import Button from "./../../components/Button/Button";
import Input from "./../../components/Input/Input";
const Profile = () => {
    let navigate = useNavigate();
    return (
        <>
            <Layout isProfile={true}>
                <div className="profileWrapper">
                    <div className="profileForm">
                        <h1>Профиль пользователя</h1>
                        <div className="nameInputsBlock">

                        <div className="nameInput">
                        <Input label="Фамилия" isLabelStar={true}/>
                        </div>

                        <div className="nameInput">
                        <Input label="Имя" isLabelStar={true}/>
                        </div>

                        <div className="nameInput">
                        <Input label="Отчество" />
                        </div>
                        </div>
                        <div className="inputProfile">
                            <Input label="Дата рождения" isLabelStar={true}/>
                        </div>

                        <div className="inputProfile">
                            <Input label="Телефон" isConfirmPhone={true} isLabelStar={true}/>
                        </div>

                        <div className="inputProfile">
                            <Input label="E-mail" value="22@ww.ww" disabled={true} />
                        </div>
                    </div>
                    <div className="buttonBlock">
                        <img className="backIcon" src={BackIcon} alt="BackIcon" onClick={() => navigate("/")} />
                        <Button btnStyle="primary">Далее</Button>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Profile