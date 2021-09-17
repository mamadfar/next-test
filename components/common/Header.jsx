import headerStyle from "../../styles/Header.module.scss"
import Nav from "./Nav";

const Header = () => {
    return (
        <div>
            <Nav/>
            <h1 className={headerStyle.title}>
                <span>web</span>
            </h1>
                <p className={headerStyle.description}>it's our first paragraph in header</p>
        </div>
    )
};

export default Header
