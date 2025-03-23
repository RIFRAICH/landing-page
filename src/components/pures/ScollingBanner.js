import React from 'react';
import styles from '../../styles/components/ScrollingBanner.module.scss';
import { motion } from 'framer-motion';
import {StarIcon} from "../../utils/Icons";
import useIsTablet from "../../hooks/useIsTablet";
import useIsMobile from "../../hooks/useIsMobile";

const ScrollingBanner = () => {

    const isTablet = useIsTablet();
    const isMobile = useIsMobile();

    return (
        <section className={styles.bannerWrapper}>
            <div className={styles.container}>
                <motion.div
                    className={styles.scrollingContent}
                    animate={{ x: ['0%', '-100%'] }}
                    transition={{
                        repeat: Infinity,
                        duration: isTablet ? (isMobile ? 15 : 30) : 60,
                        ease: 'linear',
                    }}
                >
                    {[...Array(isTablet ? 15 : 30)].map((_, index) => (
                        <React.Fragment key={index}>
                            <span className={styles.text}>RIFRAICH</span>
                            <StarIcon className={styles.icon} />
                            <span className={styles.text}>Upgrade your style</span>
                            <StarIcon className={styles.icon} />
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>

            <div className={styles.containerBlack}>
                <motion.div
                    className={styles.scrollingContent}
                    animate={{ x: ['0%', '-100%'] }}
                    transition={{
                        repeat: Infinity,
                        duration: isTablet ? (isMobile ? 20 : 40) : 80,
                        ease: 'linear',
                    }}
                >
                    {[...Array(isTablet ? 15 : 30)].map((_, index) => (
                        <React.Fragment key={index}>
                            <span className={styles.text} style={{ color: '#FFF' }}>RIFRAICH</span>
                            <StarIcon className={styles.icon} stroke="#FFF" />
                            <span className={styles.text} style={{ color: '#FFF' }}>Upgrade your style</span>
                            <StarIcon className={styles.icon} stroke="#FFF" />
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ScrollingBanner;
