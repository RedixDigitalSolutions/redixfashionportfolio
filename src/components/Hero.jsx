import { Sparkles, Video, TrendingUp } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.gradient}></div>
      
      <div className={styles.content}>
        <div className={styles.badge}>
          <Sparkles className={styles.badgeIcon} />
          <span>Fashion & Clothing Specialists</span>
        </div>

        <h1 className={styles.title}>
          Elevate Your Fashion Brand with
          <span className={styles.highlight}> Premium Video Content</span>
        </h1>

        <p className={styles.description}>
          We create stunning, engaging video content that transforms fashion stores 
          and clothing brands into viral sensations. Discover our portfolio of 
          successful campaigns.
        </p>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <Video className={styles.statIcon} />
            <div>
              <h3>17+</h3>
              <p>Videos Created</p>
            </div>
          </div>
          <div className={styles.stat}>
            <TrendingUp className={styles.statIcon} />
            <div>
              <h3>10M+</h3>
              <p>Total Views</p>
            </div>
          </div>
          <div className={styles.stat}>
            <Sparkles className={styles.statIcon} />
            <div>
              <h3>5+</h3>
              <p>Fashion Brands</p>
            </div>
          </div>
        </div>

        <a href="#portfolio" className={styles.cta}>
          View Our Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
