import React from 'react';
import styles from '../../styles/components/ScrollingBanner.module.scss';
import { motion } from 'framer-motion';
import {StarIcon} from "../../utils/Icons";
import useIsTablet from "../../hooks/useIsTablet";

const ScrollingBanner = () => {

    const isTablet = useIsTablet();

    return (
        <section className={styles.bannerWrapper}>
            {/* Première bannière */}
            <div className={styles.container} style={{ transform: 'rotate(2.222deg)' }}>
                <motion.div
                    className={styles.scrollingContent}
                    animate={{ x: ['0%', '-100%'] }}
                    transition={{
                        repeat: Infinity,
                        duration: isTablet ? 15 : 80,
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

            {/* Deuxième bannière */}
            <div className={styles.containerBlack} style={{ transform: 'rotate(-6.362deg)', backgroundColor: 'black' }}>
                <motion.div
                    className={styles.scrollingContent}
                    animate={{ x: ['0%', '-100%'] }}
                    transition={{
                        repeat: Infinity,
                        duration: isTablet ? 15 : 80,
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
