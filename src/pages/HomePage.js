import React, { useState, useEffect } from 'react';
import PauseIcon from '../icons/PauseIcon';
import PlayIcon from '../icons/PlayIcon';
import Home from '../icons/Home';
import Search from '../icons/Search';
import Library from '../icons/Library';
import Volume from '../icons/Volume';
import styles from '../css/HomePage.module.css';
const logoPath = process.env.PUBLIC_URL + '/simba_logo.png';

function useFetchFromEndpoint(endpoint) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8080/${endpoint}`)
        .then(response => response.json())
        .then(setData)
        .catch(setError);
    }, [endpoint]);
    console.log(error)
    return { data, error };
}

function HomePage() {
    const { data: playlists, error } = useFetchFromEndpoint('api/playlists');
    return (<body className={`flex h-screen text-white overflow-hidden ${styles.background_container}`}>
        <aside className={`w-1/6 flex flex-col items-center px-4 py-8 bg-gray-900`}>
            <div className={`flex flex-col h-full justify-between`}>
                <div>
                    <div className="mb-8">
                        <img src={logoPath} alt="Simba Logo"></img>
                    </div>
                    <div className={`flex flex-col gap-2`}>
                        <button className="space-x-2 text-left hover:bg-gray-700 p-2 rounded flex">
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
        </aside>

        <div className="flex-grow p-8">
            <div className="bg-gray-800 p-4 rounded-lg">
                {error && <div>Error fetching playlists: {error.message}</div>}
                {playlists && playlists.map((playlist, index) => (
                    <div key={index} className="mb-4">
                        {playlist.images && playlist.images[0] && (
                            <img src={playlist.images[0].URL} alt={playlist.name} className="w-48 h-48" />
                        )}
                        <h3>{playlist.name}</h3>
                    </div>
                ))}
            </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gray-800 h-20 px-8">
            <div>Playing now...</div>
            <button>
                <PlayIcon></PlayIcon>
            </button>
            <div className="flex justify-between"><Volume> </Volume>
                <input type="range" min="1" max="100" id="input" style={styles.input}>
                </input></div>
        </div>

    </body >);
}

export default HomePage;