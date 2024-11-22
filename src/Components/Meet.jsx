import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function Meet(props) {
    const [username, setUsername] = useState(props.details.name);
    const [roomId, setRoomId] = useState('');
    const navigate = useNavigate();

    const handleClick = (e)=>{
        e.preventDefault();
        navigate(`/jms_meet/${roomId}/${username}`)
    }

    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-900'>
            <div className='bg-gray-800 p-8 rounded-lg shadow-lg'>
                <div className='text-white text-3xl my-10 font-mono text-center'>
                    Jadavpur Mathematics Society
                </div>
                <div className='text-white text-2xl my-5 font-mono text-center'>
                    Enter Meeting Details
                </div>
                <div className='flex flex-col space-y-6'>
                    <div className='flex flex-col space-y-2'>
                        <label className='text-gray-300'>Enter Username</label>
                        <input
                            type='text'
                            className='px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                            value={username}
                            required
                            disabled
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label className='text-gray-300'>Enter Room ID</label>
                        <input
                            type='text'
                            className='px-4 py-2 bg-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                            value={roomId}
                            required
                            onChange={(e) => setRoomId(e.target.value)}
                        />
                    </div>
                    <button className='mt-8 px-6 py-3 h-64 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300' onClick={handleClick}
                    disabled = {!username || !roomId}>
                        Join Meeting
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Meet;
