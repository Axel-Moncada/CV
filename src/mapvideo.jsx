import React, { useRef } from 'react';

const VideoCard = ({ videoSrc }) => {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div
           
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
            >
                <source src={videoSrc} type="video/webm" />
                {/* Asegúrate de tener el tipo correcto de video */}
            </video>
        </div>
    );
};

export default VideoCard;