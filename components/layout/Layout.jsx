import Header from "../common/Header";
import Footer from "../common/Footer";
import styles from '../../styles/Layout.module.css'

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <div className={styles.container}>
                <main className={styles.main}>{children}</main>
                <Footer/>
            </div>
        </>
    )
};

export default Layout
