// import { useState, useEffect } from "react";
import "./Auth.less";
import Layout from "./../../components/Layout/Layout";
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import Modal from "./../../components/Modal/Modal";
import useModal from "./../../hooks/useModal";

const Auth: React.FC = () => {
    // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isModalOpen, openModal, closeModal] = useModal();
    console.log(isModalOpen, "openModal")
    // useEffect(() => {
    //     function handleResize() {
    //         setWindowWidth(window.innerWidth);
    //     }

    //     window.addEventListener("resize", handleResize);
    //     return () => window.removeEventListener("resize", handleResize);
    // }, []);
    // const list = ["Автоматизация HR", "Интеграция с job-порталами", "Оценка персонала", "Синхронизация с Outlook",
    //     "Безопасность данных", "Парсинг резюме", "Мультиязычность", "Конструктор отчетности"];

    const tabsItems: TabsProps['items'] = [
        {
            key: '1',
            label: `Вход`,
            children: <Login />,
        },
        {
            key: '2',
            label: `Регистрация`,
            children: <Registration openModal={openModal} />,
        },
    ];

    const onChange = (key: string) => {
        console.log(key);
    };
    return (
        <Layout>
            <div className="tabsWrapper">
                <div className="tabs">
                    <Tabs defaultActiveKey="2" items={tabsItems} onChange={onChange}
                    />
                </div>
            </div>
            {isModalOpen && <Modal
                onHide={closeModal} />}
        </Layout>
    )
}
export default Auth