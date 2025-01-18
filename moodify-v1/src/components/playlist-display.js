import React from 'react';
import { useLocation } from 'react-router-dom';

const PlaylistDisplay = () => {
    const location = useLocation();
    const { playlist, loading, mood } = location.state || { playlist: [], loading: true , mood: ''};
  
    if (loading) {
      return (
        <div className="flex justify-center mb-10">
          <div className="text-white text-xl">Loading...</div>
        </div>
      );
    }
    

  return (
    <div className="flex justify-center mb-10">
      <div className="w-full max-w-md p-4 border-black border-4 bg-white rounded-sm shadow-hard sm:p-8">
        <div className="flex flex-row  mb-4">
          <h5 className="text-xl font-bold font-outfit leading-none text-gray-900">
            Your 
          </h5>
          <div className='font-praise text-gray-900 text-3xl'>{mood}</div>
          <h5 className="text-xl font-bold font-outfit leading-none text-gray-900">
           Playlist
          </h5>
        </div>
        <div className="flow-root font-outfit">
          <ul role="list" className="divide-y divide-gray-200">
            {playlist && playlist.map((track, index) => (
              <li key={index} className="py-3 sm:py-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={track.image || '/placeholder.png'}
                      alt={track.name}
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {track.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {track.artist}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlaylistDisplay;
