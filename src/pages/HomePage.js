import React from 'react';
import styles from './HomePage.module.css';
const logoPath = process.env.PUBLIC_URL + '/simba_logo.png';

function HomePage() {
    return (<body class={`flex h-screen text-white overflow-hidden ${styles.background_container}`}>
        <aside class="w-60 flex flex-col items-center px-4 py-8 bg-gray-900">
            <div class={`flex flex-col h-full justify-between`}>
                <div>
                    <div class="mb-8">
                        <img src={logoPath} alt="Simba Logo"></img>
                    </div>
                    <div class="flex flex-col gap-2">
                        <button class="text-left hover:bg-gray-700 p-2 rounded">Home</button>
                        <button class="text-left hover:bg-gray-700 p-2 rounded">Search</button>
                        <button class="text-left hover:bg-gray-700 p-2 rounded">Your Library</button>
                    </div>
                </div>
                <div>
                    <button class="text-left hover:bg-gray-700 p-2 rounded">Settings</button>
                </div>
            </div>
        </aside>

        <div class="flex-grow p-8">
            <div class="bg-gray-800 p-4 rounded-lg">Main content</div>
        </div>

        <div class="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gray-800 h-24 px-8">
            <div>Playing now...</div>
            <div>Player controls</div>
            <div>Volume...</div>
        </div>

    </body>);
}

export default HomePage;