import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import LoveImg from '../images/love.png';
import HappyImg from '../images/happy.png';
import SadImg from '../images/sad.png';
import AngryImg from '../images/anger.png';


const API_KEY = "9918700608b83a1d18b5af73e6ff9cb9";

const MoodSelector = () => {
  const [playlist, setPlaylist] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();
  
  const DISCOGS_API_TOKEN = "HjvscuxldJhFjnQYIUOVFMwHANMkMWQMQERBEhmY"; // Replace with your Discogs API token
  const PROXY_URL = "https://cors-anywhere.herokuapp.com/"; // Or use your own proxy server

  
    const fetchDiscogsImage = async (trackName, artistName) => {
      try {
        const query = `${trackName} ${artistName}`;
        const response = await axios.get(
          `${PROXY_URL}https://api.discogs.com/database/search?q=${encodeURIComponent(query)}&type=release&token=${DISCOGS_API_TOKEN}`
        );
        return response.data.results?.[0]?.cover_image || null;
      } catch (error) {
        console.error("Error fetching image from Discogs:", error);
        return null;
      }
    };

// Update playlist with Discogs images
const updatePlaylistWithDiscogsImages = async (playlist) => {
  const updatedPlaylist = await Promise.all(
    playlist.map(async (track) => {
      const image = await fetchDiscogsImage(track.name, track.artist);
      return { ...track, image };
    })
  );
  setPlaylist(updatedPlaylist);
};

// Fetch playlist and update with Discogs images
const fetchPlaylist = async (mood) => {
  setLoading(true);
  try {
    const response = await axios.get(
      `https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${mood}&api_key=${API_KEY}&format=json`
    );
    const tracks = response.data.tracks.track.map((track) => ({
      name: track.name,
      artist: track.artist.name,
      image: track.image[1]['#text'], // Small image from Last.fm
    }));
    // const updatedTracks = await updatePlaylistWithDiscogsImages(tracks);
    navigation("/playlistdisplay", { state: { playlist: tracks, loading: false, mood } });
  } catch (error) {
    console.error("Error fetching playlist:", error);
  } finally {
    setLoading(false);
  }
};

  
  return (
    <>
    <div className='flex flex-col justify-center mb-10'>
    <div className='flex justify-center font-outfit text-white text-2xl sm:ml-5 '> How are we feeeeeeling today?</div>
    <div className='flex justify-center  mb-10'>
        
    <div className="grid  grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-6 font-praise  md:h-[300px]">
        {/* Love Card */}
        <div 
        onClick={() => fetchPlaylist("love")}
        className="relative bg-lovebg p-4 rounded-lg shadow-md w-[200px] md:w-[250px] hover:animate-card-pop-up hover:bg-lovedark">
            {/* Image */}
            <img
            src={LoveImg}
            alt="loveImage"
            className="object-cover rounded-lg"
            />

            {/* Text Overlay */}
            <div className="absolute text-lovefont inset-0 top-[155px] md:top-[220px] left-5 text-[50px]">
            love
            </div>
        </div>
         {/* Happy Card */}
         <div onClick={() => fetchPlaylist("happy")}
         className="relative bg-happybg pl-6 rounded-lg shadow-md w-[200px] md:w-[250px] hover:animate-card-pop-up hover:bg-happydark">
            {/* Image */}
            <img
            src={HappyImg}
            alt="happyimage"
            className="h-[220px] md:h-[290px]  object-cover rounded-lg"
            />

            {/* Text Overlay */}
            <div className="absolute text-happyfont inset-0 top-[155px] md:top-[220px] left-5  text-[50px]">
            happy
            </div>
        </div>
         {/* Sad Card */}
         <div 
         onClick={() => fetchPlaylist("sad")}
         className="relative bg-sadbg p-4 rounded-lg shadow-md w-[200px] md:w-[250px] hover:animate-card-pop-up hover:bg-saddark">
            {/* Image */}
            <img
            src={SadImg}
            alt="sadImage"
            className="object-cover rounded-lg"
            />

            {/* Text Overlay */}
            <div className="absolute text-sadfont inset-0 top-[155px] md:top-[220px] left-5 text-[50px] hover:text-sadbg">
            sad
            </div>
        </div>
         {/* Angry Card */}
         <div onClick={() => fetchPlaylist("angry")}
         className="relative bg-angrybg p-4 rounded-lg shadow-md w-[200px] md:w-[250px] hover:animate-card-pop-up hover:bg-angrydark">
            {/* Image */}
            <img
            src={AngryImg}
            alt="angryImage"
            className=" object-cover rounded-lg "
            />

            {/* Text Overlay */}
            <div className="absolute text-angryfont inset-0 top-[155px] md:top-[220px] left-5 text-[50px]">
            angry
            </div>
        </div>
        </div>
        

        </div>
       <div className='flex justify-center'>
        <button type="submit" 
        onClick={() => fetchPlaylist("pop")}
        className=" mt-10 w-150px border-black border-2 shadow-hardbutton text-black bg-button transform hover:scale-105 transition duration-300 ease-in-out font-medium rounded-md text-md px-5 py-2.5 text-center"
                     >Surprise me</button>
        </div>
        </div>

        {/* <div>
            <Carousel3D />
        </div> */}
        </>


    );
};

export default MoodSelector;
