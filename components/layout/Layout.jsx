import Header from "../common/Header";
import Footer from "../common/Footer";
import styles from '../../styles/Layout.module.css'
import Meta from "../common/Meta";

const Layout = ({children}) => {
    return (
        <>
            <Meta/>
            <Header/>
            <div className={styles.container}>
                <main className={styles.main}>{children}</main>
                <Footer/>
            </div>
        </>
    )
};

export default Layout
