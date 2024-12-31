import styles from './Filters.module.css'

import Beachfront from '../assets/beachfront.svg'
import AmazingViews from '../assets/amazing-views.svg'
import Cabins from '../assets/cabins.svg'
import Lakefront from '../assets/lakefront.svg'
import Yurts from '../assets/yurts.svg'
import Treehouses from '../assets/treehouses.svg'
import Dornes from '../assets/dornes.svg'
import OMG from '../assets/omg.svg'
import Mansions from '../assets/mansions.svg'
import NationalParks from '../assets/national-parks.svg'
import Castles from '../assets/castles.svg'
import Trending from '../assets/trending.svg'
import HouseBoats from '../assets/houseboats.svg'
import AmazingPools from '../assets/amazing-pools.svg'


function Filters() {
    return (
        <div className={styles.filters}>
            <div className={styles.options}>

                <img src={Beachfront}></img>
                <span>Beachfront</span>
            </div>

            <div className={styles.options}>
                <img src={AmazingViews}></img>
                <span>Amazing views</span>
            </div>

            <div className={styles.options}> <img src={Cabins}></img>
                <span>Cabins</span></div>

            <div className={styles.options}> <img src={Lakefront}></img>
                <span>Lakefront</span></div>

            <div className={styles.options}> <img src={Yurts}></img>
                <span>Yurts</span></div>

            <div className={styles.options}> <img src={Treehouses}></img>
                <span>Treehouses</span></div>

            <div className={styles.options}> <img src={Dornes}></img>
                <span>Dornes</span></div>

            <div className={styles.options}> <img src={OMG}></img>
                <span>OMG</span></div>

            <div className={styles.options}> <img src={Mansions}></img>
                <span>Mansions</span></div>

            <div className={styles.options}> <img src={NationalParks}></img>
                <span>National Parks</span></div>

            <div className={styles.options}> <img src={Castles}></img>
                <span>Castles</span></div>

            <div className={styles.options}> <img src={Trending}></img>
                <span>Trending</span></div>

            <div className={styles.options}> <img src={HouseBoats}></img>
                <span>Houseboats</span></div>

            <div className={styles.options}> <img src={AmazingPools}></img>
                <span>Amazing pools</span></div>


        </div>
    )
}

export default Filters