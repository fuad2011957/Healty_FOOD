import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import styles from './Slider.module.css';

// Licude
import { Eye } from 'lucide-react';
import { MessageSquareMore } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';


// Импортируйте ваши изображения
import slide1 from '../layout/shared/assets/img/slide1.png'; 
import slide2 from "../layout/shared/assets/img/item-1.png";
import slide3 from "../layout/shared/assets/img/item-2.png";

const sliderData = [
  {
    id: 1,
    image: slide1,
    category: 'BREAKFAST',
    date: '05 Jul 2016',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    author: 'Jason Keller',
    views: 275,
    comments: 12,
  },
  {
    id: 2,
    image: slide2,
    category: 'TRAVEL',
    date: '10 Aug 2016',
    title: 'Discover new places and new experiences',
    author: 'Emily Stone',
    views: 540,
    comments: 25,
  },
  {
    id: 3,
    image: slide3,
    category: 'FOOD',
    date: '20 Sep 2016',
    title: 'A culinary journey through different cultures',
    author: 'Daniel Chen',
    views: 310,
    comments: 15,
  },
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  // Используем useTransition для анимации
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 500 },
  });

  const nextSlide = () => {
    setIndex(state => (state + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setIndex(state => (state - 1 + sliderData.length) % sliderData.length);
  };

  const currentSlide = sliderData[index];

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        {transitions((style, i) => (
          <animated.div
            style={{ ...style, backgroundImage: `url(${sliderData[i].image})` }}
            className={styles.slide}
          >
            <div className={styles.overlay}>
              <div className={styles.content}>
                <div className={styles.category}>{currentSlide.category}</div>
                <div className={styles.date}>{currentSlide.date}</div>
                <div className={styles.title}>{currentSlide.title}</div>
                <div className={styles.author}>{currentSlide.author}</div>
                <div className={styles.info}>
                  <div className={styles.views}>
                    <span role="img" aria-label="views"><Eye /></span> {currentSlide.views}
                  </div>
                  <div className={styles.comments}>
                    <span role="img" aria-label="comments"> <MessageSquareMore /> </span> {currentSlide.comments}
                  </div>
                </div>
              </div>
            </div>
          </animated.div>
        ))}
      </div>
      <div className={styles.arrows}>
        <button onClick={prevSlide} className={styles.prevArrow}>←</button>
        <button onClick={nextSlide} className={styles.nextArrow}> <ArrowLeft /> </button>
      </div>
    </div>
  );
};

export default Slider;


