import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import styles from '../css/HomePage.module.css';
import { useParams } from 'react-router-dom';

function useFetchTracks(endpoint) {
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
// https://github.com/spotify/spotify-web-playback-sdk-example/blob/main/src/WebPlayback.jsx
// function useWebPlayback(trackId){
//     const [is_paused, setPaused] = useState(false);
//     const [is_active, setActive] = useState(false);
//     const [player, setPlayer] = useState(null);
//     const [current_track, setTrack] = useState(null);
//     useEffect(() => {

//         const script = document.createElement("script");
//         script.src = "https://sdk.scdn.co/spotify-player.js";
//         script.async = true;

//         document.body.appendChild(script);

//         window.onSpotifyWebPlaybackSDKReady = () => {
//             const player = new window.Spotify.Player({
//                 name: 'Web Playback SDK',
//                 getOAuthToken: cb => { cb(props.token); },
//                 volume: 0.5
//             });

//             setPlayer(player);

//             player.addListener('ready', ({ device_id }) => {
//                 console.log('Ready with Device ID', device_id);
//             });

//             player.addListener('not_ready', ({ device_id }) => {
//                 console.log('Device ID has gone offline', device_id);
//             });

//             player.addListener('player_state_changed', ( state => {

//                 if (!state) {
//                     return;
//                 }

//                 setTrack(state.track_window.current_track);
//                 setPaused(state.paused);

//                 player.getCurrentState().then( state => { 
//                     (!state)? setActive(false) : setActive(true) 
//                 });

//             }));

//             player.connect();


//         };

//     }, []);

// }

function playPreview(trackId) {
    const audio = document.getElementById(trackId);
    if (audio) {
      audio.play();
    }
  }

function PlaylistPage(){
    const { id } = useParams();
    const { data: tracks, error } = useFetchTracks(`api/playlists/${id}/tracks`);
    return(
        <body className={`flex h-screen text-white overflow-hidden ${styles.background_container}`}>
            <aside className={`w-1/6 flex flex-col items-center px-4 py-8 bg-gray-900`}>
                <SideBar></SideBar>
            </aside>
            <div className="flex-grow w-10/12 p-8 overflow-y-auto mb-20">
            {error && <div className="text-red-500">Error fetching tracks: {error.message}</div>}

            <div className="grid grid-rows-1 gap-2">
            {tracks && tracks.map((track, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg cursor-pointer transform transition duration-200 hover:scale-105 flex items-center justify-between w-full md:w-auto" onClick={() => playPreview(`audio-${index}`)}>
                    <div className="flex items-center space-x-4">
                        <img src={track.album.images[0].url} alt={track.album.name}
                            className="w-12 h-12 object-cover rounded-lg" />
                        <div className="flex flex-col">
                            <h3 className="text-white text-lg leading-tight">{track.name}</h3>
                            <span className="text-slate-500 text-sm">
                                {track.artists && track.artists.map(artist => artist.name).join(', ')}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <span className="text-slate-500 text-s mr-10">{track.album && track.album.name}</span>
                        <span className="text-slate-500 text-s">
                            {Math.floor(track.duration_ms / 60000)}:{(Math.floor((track.duration_ms % 60000) / 1000)).toString().padStart(2, '0')}
                        </span>
                        <audio id={`audio-${index}`}>
                            <source src={track.preview_url} type="audio/mpeg"></source>
                        </audio>
                    </div>
                </div>
            ))}
        </div>

            </div>

            <Footer></Footer>
        </body>

    )
}

export default PlaylistPage