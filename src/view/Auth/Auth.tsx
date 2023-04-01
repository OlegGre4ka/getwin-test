import { useState, useEffect } from "react";
import "./Auth.less";
import Stroke3 from "./../../assets/Stroke3.png";
import Group from "./../../assets/Group.png";

import { Tabs, ConfigProvider } from 'antd';
import type { TabsProps } from 'antd';
import Login from "./Login/Login";
import Registration from "./Registration/Registration";


const Auth: React.FC = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const list = ["Автоматизация HR", "Интеграция с job-порталами", "Оценка персонала", "Синхронизация с Outlook",
        "Безопасность данных", "Парсинг резюме", "Мультиязычность", "Конструктор отчетности"];

    const tabsItems: TabsProps['items'] = [
        {
            key: '1',
            label: `Вход`,
            children: <Login />,
        },
        {
            key: '2',
            label: `Регистрация`,
            children: <Registration />,
        },
    ];

    const onChange = (key: string) => {
        console.log(key);
    };
    return (
        <div className="authWrapper">
            <div className="descriptionWrapper">
                <div className="descriptionBlock">
                    <h1>Войти в аккаунт</h1>
                    <p className="description">Введите ваш E-mail и пароль, чтобы начать<br /> использовать все преимущества платформы:</p>
                    <div className="listContainer">
                        {list.map((el,i) => <div className="listElement" key={i}>
                            <span className="square"><img src={Stroke3} alt="" /></span><span className="textElement">{el}</span>
                        </div>)}
                    </div>
                </div>
                {windowWidth > 1290 && <img src={Group} className="group" alt="Group" />}
            </div>
            <div className="tabsWrapper">
                <div className="tabs">
                    {/* <ConfigProvider
                        theme={{
                            token: {
                                colorPrimary: '#3943ed',
                            },
                        }}
                    > */}
                        <Tabs defaultActiveKey="2" items={tabsItems} onChange={onChange}
                            // tabBarStyle={{ width: "336px", margin: 0 }}
                             />
                    {/* </ConfigProvider> */}
                </div>
            </div>
        </div>
    )
}
export default Auth