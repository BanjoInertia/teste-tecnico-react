import classes from "./HomePage.module.css";
import { ProfileSearchDisplay } from "../profileSearchDisplay/ProfileSearchDisplay";
import backgroundEllipse1 from "../../assets/backgroundEllipse1.png"
import backgroundEllipse2 from "../../assets/backgroundEllipse2.png"
import backgroundBox from "../../assets/backgroundBox.png"

export const HomePage = () => {
    return (
        <main className={classes.home_page}>
            <ProfileSearchDisplay />
            <img className={classes.background_box} src={backgroundBox} alt="" />
            <img className={classes.background_ellipse_1} src={backgroundEllipse1} alt="" />
            <img className={classes.background_ellipse_2} src={backgroundEllipse2} alt="" />
        </main>
    )
}