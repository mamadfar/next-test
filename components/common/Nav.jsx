import Link from "next/link";
import navStyles from "../../styles/Nav.module.scss"

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href={"/about"}>
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        <a>Home</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
};

export default Nav
