
import styles from './Header.module.css';
import { Globe, MagnifyingGlass, UserCircle, List } from "@phosphor-icons/react";
import Logo from '../assets/logo.svg'
import logoText from '../assets/text-logo.svg'
import ProfileSvg from '../assets/user-button.svg'


function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.state}>
                <div className={styles.logoImage}>
                    <img src={Logo} alt='Logo'></img>
                    <img src={logoText}></img>
                </div>
                <div className={styles.navLinks}>
                    <a href='#'>Stays</a>
                    <a href='#'>Experiences</a>
                    <a href='#'>Online Experiences</a>
                </div>
                <div className={styles.userGet}>

                    <a href='#'>Airbnb your home</a>
                    <button className={styles.globeButton}><a href='#'></a>
                        <Globe size={16} weight="regular" />
                    </button>
                    <button className={styles.userButton}>
                        <List size={16} />
                        <img className={styles.profileImage} src={ProfileSvg}></img>
                    </button>

                </div>
            </div>

            <div className={styles.search}>
                <div className={styles.destines}>

                    <label htmlFor='destines' >
                        Where
                    </label>
                    <input id='destines' placeholder='Search destinations'></input>
                </div>
                <div className={styles.avaiableDates}>
                    <div className={styles.checkin}>
                        <div><p>Check in</p></div>
                        <div><span>Add dates</span></div>

                    </div>
                    <div className={styles.checkout}>
                        <div><p>Check out</p></div>
                        <div><span>Add dates</span></div>
                    </div>
                </div>
                <div className={styles.guestsAndButton}>
                    <div className={styles.hostages}>
                        <div><p>Who</p></div>
                        <div><span>Add guests</span></div>
                    </div>
                    <div className={styles.searchButton}>
                        <button>
                            <MagnifyingGlass size={16} weight="bold" />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header