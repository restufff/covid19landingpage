import styles from './Menu.module.css';
import Logo from '@public/Logo.svg';

const menuList = [
    {
        label: 'Overview',
        url: '/',
    },
    {
        label: 'Contagion',
        url: '/',
    },
    {
        label: 'Symptoms',
        url: '/',
    },
    {
        label: 'Prevention',
        url: '/',
    }
]

const Menu = () => {
    return (
        <div className={styles.menuContainer}>
            <div>
                <img src = {Logo} alt = "Logo" />
            </div>
            <div className = {styles.pathList}>
                {menuList.map((obj) => <a href = {obj.url}>{obj.label}</a>)}
            </div>
            <div className = {styles.actionContainer}>
                <a className = {styles.contactButton}>
                    Contact
                </a>
            </div>
        </div>
    );
}

export default Menu