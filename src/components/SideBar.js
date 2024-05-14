import Home from '../icons/Home';
import Search from '../icons/Search';
import Library from '../icons/Library';
import styles from '../css/LoginForm.module.css';
import { useNavigate } from 'react-router-dom';

const logoPath = process.env.PUBLIC_URL + '/simba_logo.png';


function SideBar(){
    const navigate = useNavigate();
    return(
        <div className={`flex flex-col h-full justify-between`}>
                <div>
                    <div className="mb-8">
                        <img src={logoPath} alt="Simba Logo"></img>
                    </div>
                    <div className={`flex flex-col gap-2`}>
                        <button onClick={() => navigate(`/`)} className="space-x-2 text-left hover:bg-gray-700 p-2 rounded flex">
                            <Home></Home>
                            <span>Home</span></button>
                        <button className="space-x-2 text-left hover:bg-gray-700 p-2 rounded flex">
                            <Search></Search>
                            <span>Search</span></button>
                        <button className="space-x-2 text-left hover:bg-gray-700 p-2 rounded flex">
                            <Library></Library>
                            <span>Your Library</span></button>
                    </div>
                </div>
            </div>
    )
}

export default SideBar