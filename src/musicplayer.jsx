import React from 'react';
import Player from '@madzadev/audio-player'
import '@madzadev/audio-player/dist/index.css'



const tracks = [
    {
        url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
        title: "Madza - Chords of Life",
        tags: ["house"],
    },
    {
        url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
        title: "Madza - Late Night Drive",
        tags: ["dnb"],
    },
    {
        url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
        title: "Madza - Persistence",
        tags: ["dubstep"],
    },
];

const colores = {
    tagsBackground: "#3e32e4",
            tagsText: "#ffffff",
            tagsBackgroundHoverActive: "#6e65f1",
            tagsTextHoverActive: "#ffffff",
            searchBackground: "#18191f",
            searchText: "#ffffff",
            searchPlaceHolder: "#575a77",
            playerBackground: "#2F2E31",
            titleColor: "#ffffff",
            timeColor: "#ffffff",
            progressSlider: "#000",
            progressUsed: "#ffffff",
            progressLeft: "#151616",
            bufferLoaded: "#1f212b",
            volumeSlider: "#000",
            volumeUsed: "#ffffff",
            volumeLeft: "#151616",
            playlistBackground: "#18191f",
            playlistText: "#575a77",
            playlistBackgroundHoverActive: "#18191f",
            playlistTextHoverActive: "#ffffff",
  
    
}


const Player1 = () => {
    return (
        <div>
            <Player 
             trackList={tracks}
             includeTags={false}
             includeSearch={false}
             showPlaylist={false}
             sortTracks={false}
             autoPlayNextTrack={true}
             customColorScheme={colores}
            />
        </div>
    )
}

export default Player1;