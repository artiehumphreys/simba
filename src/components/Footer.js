import PauseIcon from '../icons/PauseIcon';
import PlayIcon from '../icons/PlayIcon';
import Volume from '../icons/Volume';
import styles from '../css/HomePage.module.css';


function Footer(){
    return(
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gray-800 h-20 px-8">
            <div>Playing now...</div>
                <button>
                    <PlayIcon></PlayIcon>
                </button>
                <div className="flex justify-between"><Volume> </Volume>
                    <input type="range" min="1" max="100" id="input" style={styles.input}>
                    </input>
            </div>
        </div>
    )
}

export default Footer