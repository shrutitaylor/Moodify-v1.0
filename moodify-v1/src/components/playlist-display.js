import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import playButton from '../images/play-button.png';
import useSound from "use-sound";
import buttonSound from "../sounds/mouse-click.mp3";

const PlaylistDisplay = () => {
  const location = useLocation();
  const { playlist, loading, mood } = location.state || { playlist: [], loading: true, mood: '' };
  const [playSound] = useSound(buttonSound);

  

  if (loading) {
    return (
      <div className="flex justify-center mb-10">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex justify-center mb-10">
      <div className="w-full max-w-6xl p-4 border-black border-4 bg-white rounded-sm shadow-hard sm:p-8 sm:m-2">
        <div className="flex flex-row mb-4">
          <h5 className="text-xl font-bold font-outfit text-gray-900 mt-1">
            Your
          </h5>
          <div className="font-praise text-gray-900 text-3xl mx-2">{mood}</div>
          <h5 className="text-xl font-bold font-outfit text-gray-900 mt-1">
            Playlist
          </h5>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-outfit">
          {playlist && playlist.map((track, index) => (
            <div
              key={index}
              className="flex items-center p-4 shadow-hard bg-button border-2 border-black rounded-md"
            >
              
              <div className="flex-1 min-w-0 ml-4">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {track.name}
                </p>
                <p className="text-sm text-gray-500 truncate">
                  {track.artist}
                </p>
              </div>

              <div className="flex-shrink-0">
                <div className='p-1 h-10 w-10 rounded-full shadow-hardbutton bg-white border-black border-2 transform hover:scale-105 transition duration-300 ease-in-out' >
                <Link to= {track.track_url} onClick={playSound}>
                 
                <img
                  className="w-5 h-5 mt-1 ml-1.5"
                  src={playButton}
                  alt={track.name}
                />
                </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaylistDisplay;
