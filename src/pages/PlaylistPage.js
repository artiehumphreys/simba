import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import styles from '../css/HomePage.module.css';
import { useParams } from 'react-router-dom';


function fetchTracks(playlistId) {
    fetch(`http://localhost:8080/api/playlists/${playlistId}/songs`)
        .then(response => response.json())
        .then(data => {
            return data
        })
        .catch(error => {
            console.error('Error fetching tracks:', error);
        });
}

function PlaylistPage(){
    const { id } = useParams();
    const tracks = fetchTracks(id);
    return(
        <body className={`flex h-screen text-white overflow-hidden ${styles.background_container}`}>
            <aside className={`w-1/6 flex flex-col items-center px-4 py-8 bg-gray-900`}>
                <SideBar></SideBar>
            </aside>
            <div className="flex-grow w-10/12 p-8 overflow-y-auto mb-20">
                <div className="grid grid-rows-1 gap-4">
                {tracks && tracks.map((track, index) => (
                    <div key={index} className="bg-gray-800 p-4 rounded-lg cursor-pointer transform transition duration-200 hover:scale-105 w-full md:w-auto">
                        <h3 className="mt-2 text-center text-white">{track.name}</h3>
                    </div>
                ))}
                </div>
        </div>

            <Footer></Footer>
        </body>

    )
}

export default PlaylistPage