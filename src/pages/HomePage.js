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
    return { data, error };
}

function fetchTracks(playlistId) {
    fetch(`http://localhost:8080/api/playlists/${playlistId}/songs`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching tracks:', error);
        });
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

        <div className="flex-grow w-10/12 p-8 overflow-y-auto mb-20">
            {error && <div className="text-red-500">Error fetching playlists: {error.message}</div>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {playlists && playlists.map((playlist, index) => (
                    <div key={index} className="bg-gray-800 p-4 rounded-lg cursor-pointer transform transition duration-200 hover:scale-105 w-full md:w-auto" onClick={() => fetchTracks(`api/playlists/${playlist.ID}/songs`)}>
                        {playlist.images && playlist.images[0] && (
                            <img src={playlist.images[0].url} alt={playlist.name}
                                 className="w-full aspect-square object-cover rounded-lg" />
                        )}
                        <h3 className="mt-2 text-center text-white">{playlist.name}</h3>
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