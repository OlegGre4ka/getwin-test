// import { useState, useEffect } from "react";
import "./Layout.less";
import { useLocation } from "react-router-dom";
import Stroke3 from "./../../assets/Stroke3.png";
import Group from "./../../assets/Group.png";

interface ILayout {
    isProfile?: boolean;
    children: any;
}
const Layout = ({ isProfile, children }: ILayout) => {
    // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    let { pathname } = useLocation();
    
    // useEffect(() => {
    //     function handleResize() {
    //         setWindowWidth(window.innerWidth);
    //     }

    //     window.addEventListener("resize", handleResize);
    //     return () => window.removeEventListener("resize", handleResize);
    // }, []);
    
    const list = ["Автоматизация HR", "Интеграция с job-порталами", "Оценка персонала", "Синхронизация с Outlook",
        "Безопасность данных", "Парсинг резюме", "Мультиязычность", "Конструктор отчетности"];

    return (
        <div className="authWrapper">
            <div className={isProfile ? "descRegWrapper": "descriptionWrapper"}>
                <div className="descriptionBlock">
                    {pathname === "/" && (<>
                        <h1>Войти в аккаунт</h1>
                        <p className="description">Введите ваш E-mail и пароль, чтобы начать<br /> использовать все преимущества платформы:</p>
                        <div className="listContainer">
                            {list.map((el, i) => <div className="listElement" key={i}>
                                <span className="square"><img src={Stroke3} alt="" /></span><span className="textElement">{el}</span>
                            </div>)}
                        </div>
                    </>)}
                    {(pathname === "/profile" || pathname === "/profile/confirm-phone") && (<>
                        <h2>Регистрация пользователя</h2>
                        <p className="descProfile">Заполните информацию о себе, чтобы начать использовать все преимущества платформы</p>
                    </>)}
                </div>
                <img src={Group} className="group" alt="Group" />

            </div>

            {children}
        </div>
    )
}
export default Layout