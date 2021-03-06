import styles from './Home.module.css';
import Menu from './Menu';

const Home = () => {
    return (
        <div className = {styles.sectionMainContainer}>
            <div className = "wrapper">
                <Menu/>
            </div>
        </div>
    );
}

export default Home;