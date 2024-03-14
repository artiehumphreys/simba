import React from 'react';
import styles from './HomePage.module.css';
const logoPath = process.env.PUBLIC_URL + '/simba_logo.png';


function HomePage() {
    return (<body class={`flex h-screen text-white overflow-hidden ${styles.background_container}`}>
        <aside class={`w-1/6 flex flex-col items-center px-4 py-8 bg-gray-900`}>
            <div class={`flex flex-col h-full justify-between`}>
                <div>
                    <div class="mb-8">
                        <img src={logoPath} alt="Simba Logo"></img>
                    </div>
                    <div class={`flex flex-col gap-2`}>
                        <button class="text-left hover:bg-gray-700 p-2 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            Home</button>
                        <button class="text-left hover:bg-gray-700 p-2 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                            Search</button>
                        <button class="text-left hover:bg-gray-700 p-2 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                            </svg>
                            Your Library</button>
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