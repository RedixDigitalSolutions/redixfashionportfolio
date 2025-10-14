import { useEffect, useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';
import styles from './VideoCard.module.css';

const VideoCard = ({ video }) => {
  const cardRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  // Get aspect ratio class based on video type
  const getAspectRatioClass = () => {
    switch (video.type) {
      case 'reel':
        return styles.aspectRatio9_16; // 9:16 vertical
      case 'landscape':
        return styles.aspectRatio16_9; // 16:9 horizontal
      case 'animated':
        return styles.aspectRatio1_1; // 1:1 square
      default:
        return styles.aspectRatio9_16;
    }
  };

  return (
    <div ref={cardRef} className={styles.videoCard}>
      <div 
        className={`${styles.videoWrapper} ${getAspectRatioClass()}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleVideoClick}
      >
        <video
          ref={videoRef}
          className={styles.video}
          loop
          playsInline
          muted
          preload="metadata"
        >
          <source src={video.path} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play/Pause Overlay */}
        <div className={`${styles.overlay} ${isHovered || !isPlaying ? styles.visible : ''}`}>
          <button className={styles.playButton} onClick={togglePlay}>
            {isPlaying ? <Pause size={48} /> : <Play size={48} />}
          </button>
        </div>

        {/* Video Type Badge */}
        <div className={styles.typeBadge}>
          {video.type === 'reel' && '9:16'}
          {video.type === 'landscape' && '16:9'}
          {video.type === 'animated' && '1:1'}
        </div>
      </div>

      <div className={styles.info}>
        <h3 className={styles.client}>{video.client}</h3>
        <p className={styles.category}>{video.category}</p>
      </div>
    </div>
  );
};

export default VideoCard;
