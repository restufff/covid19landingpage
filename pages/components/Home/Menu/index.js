import styles from './Menu.module.css';
import Logo from '@public/Logo.svg';

const menuList = [
    {
        label: 'Contagion',
        url: '/contagion',
    },
    {
        label: 'Symptoms',
        url: '/symptoms',
    },
    {
        label: 'Prevention',
        url: '/prevention',
    }
]

const Menu = () => {
    return (
        <div className={styles.menuContainer}>
            <div>
                <img src = {Logo} alt = "Logo" />
            </div>
            <div className = {styles.pathList}>
                <a href className = {styles.active}>Overview</a>
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