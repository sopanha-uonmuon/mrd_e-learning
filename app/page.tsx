'use client'

import { useState } from "react";
import styles from '@/app/styles/Home.module.css';
import Image from "next/image";

export default function Home() {

  const [scrollAmount, setScrollAmount] = useState<number>(0);
  const [scrollAmount2, setScrollAmount2] = useState<number>(0);
  const [scrollAmount3, setScrollAmount3] = useState<number>(0);

  const scrollCarousel = (direction: 'next' | 'prev') => {
    const carousel = document.querySelector(`.${styles.carousel}`) as HTMLElement;
    const items = document.querySelectorAll(`.${styles.carouselItem}`);
    const itemWidth =  250 + 10; // Width of each item + margin

    if (direction === 'next') {
      setScrollAmount((prev) => Math.min(prev + itemWidth, (items.length - 1) * itemWidth));
    } else {
      setScrollAmount((prev) => Math.max(prev - itemWidth, 0));
    }

    carousel.style.transform = `translateX(-${scrollAmount}px)`; // Apply the scroll transformation
  };
  const scrollCarousel2 = (direction: 'next' | 'prev') => {
    
    const carousel2 = document.querySelector(`.${styles.carousel2}`) as HTMLElement;
    const items2 = document.querySelectorAll(`.${styles.carouselItem2}`);
    const itemWidth2 =  250 + 10; // Width of each item + margin

    if (direction === 'next') {
      console.log('next')
      setScrollAmount2((prev) => Math.min(prev + itemWidth2, (items2.length - 1) * itemWidth2));
    } else {
      console.log('prev')
      setScrollAmount2((prev) => Math.max(prev - itemWidth2, 0));
    }

    carousel2.style.transform = `translateX(-${scrollAmount2}px)`; // Apply the scroll transformation
  };
  const scrollCarousel3 = (direction: 'next' | 'prev') => {
    const carousel3 = document.querySelector(`.${styles.carousel3}`) as HTMLElement;
    const items3 = document.querySelectorAll(`.${styles.carouselItem3}`);
    const itemWidth3 =  250 + 10; // Width of each item + margin

    if (direction === 'next') {
      setScrollAmount3((prev) => Math.min(prev + itemWidth3, (items3.length - 1) * itemWidth3));
    } else {
      setScrollAmount3((prev) => Math.max(prev - itemWidth3, 0));
    }

    carousel3.style.transform = `translateX(-${scrollAmount3}px)`; // Apply the scroll transformation
  };


  return (
    <>
    
    <div className={styles.carouselContainer}>
      <p className={styles.title}>វគ្គសិក្សាថ្មី</p>
      <div className={styles.carousel}>
        <div className={styles.carouselItem}>
          <div className={styles.lesson_1_wrapper}>
            <Image className={styles.lesson_1} src="/lesson-1.png" width={100} height={0} alt="" />
          </div>
          <div className={styles.details_wrapper}>
            <p className={styles.details_title}>វិធីដាំស្ពៃ</p>
            <p className={styles.details_time}>រយះពេល: 4 ម៉ោង​​​​ 30 នាទី</p>
            <p className={styles.details_description}>ពី នាយកដ្ឋានអភិវឌ្ឍន៍សហគមន៍</p>
            <button className={styles.button_register} onClick={() => {}}>ចុះឈ្មោះ</button>
          </div>
        </div>
        <div className={styles.carouselItem}>
          <div className={styles.lesson_1_wrapper}>
            <Image className={styles.lesson_1} src="/lesson-2.png" width={100} height={0} alt="" />
          </div>
          <div className={styles.details_wrapper}>
            <p className={styles.details_title}>វិធីផលិតសាប៊ូ</p>
            <p className={styles.details_time}>រយះពេល: 4 ម៉ោង​​​​ 30 នាទី</p>
            <p className={styles.details_description}>ពី នាយកដ្ឋានអភិវឌ្ឍន៍សហគមន៍</p>
            <button className={styles.button_register} onClick={() => {}}>ចុះឈ្មោះ</button>
          </div>
        </div>
        <div className={styles.carouselItem}>
          <div className={styles.lesson_1_wrapper}>
            <Image className={styles.lesson_1} src="/lesson-3.png" width={100} height={0} alt="" />
          </div>
          <div className={styles.details_wrapper}>
            <p className={styles.details_title}>វិធីធ្វើជីកំប៉ុស</p>
            <p className={styles.details_time}>រយះពេល: 4 ម៉ោង​​​​ 30 នាទី</p>
            <p className={styles.details_description}>ពី នាយកដ្ឋានអភិវឌ្ឍន៍សហគមន៍</p>
            <button className={styles.button_register} onClick={() => {}}>ចុះឈ្មោះ</button>
          </div>
        </div>
        <div className={styles.carouselItem}>
          <div className={styles.lesson_1_wrapper}>
            <Image className={styles.lesson_1} src="/lesson-4.png" width={100} height={0} alt="" />
          </div>
          <div className={styles.details_wrapper}>
            <p className={styles.details_title}>វិធីចម្រោះទឹក</p>
            <p className={styles.details_time}>រយះពេល: 4 ម៉ោង​​​​ 30 នាទី</p>
            <p className={styles.details_description}>ពី នាយកដ្ឋានអភិវឌ្ឍន៍សហគមន៍</p>
            <button className={styles.button_register} onClick={() => {}}>ចុះឈ្មោះ</button>
          </div>
        </div>
        <div className={styles.carouselItem}>
          <div className={styles.lesson_1_wrapper}>
            <Image className={styles.lesson_1} src="/lesson-2.png" width={100} height={0} alt="" />
          </div>
          <div className={styles.details_wrapper}>
            <p className={styles.details_title}>វិធីធ្វើចញ្ចិមសត្វ</p>
            <p className={styles.details_time}>រយះពេល: 4 ម៉ោង​​​​ 30 នាទី</p>
            <p className={styles.details_description}>ពី នាយកដ្ឋានអភិវឌ្ឍន៍សហគមន៍</p>
            <button className={styles.button_register} onClick={() => {}}>ចុះឈ្មោះ</button>
          </div>
        </div>
        <div className={styles.carouselItem}>
          <div className={styles.lesson_1_wrapper}>
            <Image className={styles.lesson_1} src="/lesson-4.png" width={100} height={0} alt="" />
          </div>
          <div className={styles.details_wrapper}>
            <p className={styles.details_title}>វិធីចម្រោះទឹក</p>
            <p className={styles.details_time}>រយះពេល: 4 ម៉ោង​​​​ 30 នាទី</p>
            <p className={styles.details_description}>ពី នាយកដ្ឋានអភិវឌ្ឍន៍សហគមន៍</p>
            <button className={styles.button_register} onClick={() => {}}>ចុះឈ្មោះ</button>
          </div>
        </div>
        <div className={styles.carouselItem}>
          <div className={styles.lesson_1_wrapper}>
            <Image className={styles.lesson_1} src="/lesson-3.png" width={100} height={0} alt="" />
          </div>
          <div className={styles.details_wrapper}>
            <p className={styles.details_title}>វិធីធ្វើជីកំប៉ុស</p>
            <p className={styles.details_time}>រយះពេល: 4 ម៉ោង​​​​ 30 នាទី</p>
            <p className={styles.details_description}>ពី នាយកដ្ឋានអភិវឌ្ឍន៍សហគមន៍</p>
            <button className={styles.button_register} onClick={() => {}}>ចុះឈ្មោះ</button>
          </div>
        </div>
        <div className={styles.carouselItem}>
          <div className={styles.lesson_1_wrapper}>
            <Image className={styles.lesson_1} src="/lesson-1.png" width={100} height={0} alt="" />
          </div>
          <div className={styles.details_wrapper}>
            <p className={styles.details_title}>វិធីធ្វើចញ្ចិមសត្វ</p>
            <p className={styles.details_time}>រយះពេល: 4 ម៉ោង​​​​ 30 នាទី</p>
            <p className={styles.details_description}>ពី នាយកដ្ឋានអភិវឌ្ឍន៍សហគមន៍</p>
            <button className={styles.button_register} onClick={() => {}}>ចុះឈ្មោះ</button>
          </div>
        </div>
        <div className={styles.carouselItem}>
          <div className={styles.lesson_1_wrapper}>
            <Image className={styles.lesson_1} src="/lesson-4.png" width={100} height={0} alt="" />
          </div>
          <div className={styles.details_wrapper}>
            <p className={styles.details_title}>វិធីដាំស្វាយ</p>
            <p className={styles.details_time}>រយះពេល: 4 ម៉ោង​​​​ 30 នាទី</p>
            <p className={styles.details_description}>ពី នាយកដ្ឋានអភិវឌ្ឍន៍សហគមន៍</p>
            <button className={styles.button_register} onClick={() => {}}>ចុះឈ្មោះ</button>
          </div>
        </div>
        <div className={styles.carouselItem}>
          <div className={styles.lesson_1_wrapper}>
            <Image className={styles.lesson_1} src="/lesson-2.png" width={100} height={0} alt="" />
          </div>
          <div className={styles.details_wrapper}>
            <p className={styles.details_title}>វិធីដាំស្ពៃ</p>
            <p className={styles.details_time}>រយះពេល: 4 ម៉ោង​​​​ 30 នាទី</p>
            <p className={styles.details_description}>ពី នាយកដ្ឋានអភិវឌ្ឍន៍សហគមន៍</p>
            <button className={styles.button_register} onClick={() => {}}>ចុះឈ្មោះ</button>
          </div>
        </div>
        <div className={styles.carouselItem}>
          <div className={styles.lesson_1_wrapper}>
            <Image className={styles.lesson_1} src="/lesson-3.png" width={100} height={0} alt="" />
          </div>
          <div className={styles.details_wrapper}>
            <p className={styles.details_title}>វិធីដាំស្វាយ</p>
            <p className={styles.details_time}>រយះពេល: 4 ម៉ោង​​​​ 30 នាទី</p>
            <p className={styles.details_description}>ពី នាយកដ្ឋានអភិវឌ្ឍន៍សហគមន៍</p>
            <button className={styles.button_register} onClick={() => {}}>ចុះឈ្មោះ</button>
          </div>
        </div>
      </div>

      <div className={styles.buttons}>
        <button className={styles.button_prev} onClick={() => scrollCarousel('prev')}>Previous</button>
        <button className={styles.button_next} onClick={() => scrollCarousel('next')}>Next</button>
      </div>
    </div>

    <div className={styles.carouselContainer}>
      <p className={styles.title}>វគ្គសិក្សាតាមនាយកដ្ឋាន</p>
      <div className={styles.carousel2}>
        <div className={styles.carouselItem2}>
          <div className={styles.lesson_1_wrapper}>
            <Image className={styles.lesson_1} src="/lesson-1.png" width={100} height={0} alt="" />
          </div>
          <div className={styles.details_wrapper}>
            <p className={styles.details_title}>នាយកដ្ឋានអភិវឌ្ឍន៍សហគមន៍ជនបទ</p>
            <p className={styles.details_time}>រយះពេល: 4 ម៉ោង​​​​ 30 នាទី</p>
            <p className={styles.details_description}>ពី នាយកដ្ឋានអភិវឌ្ឍន៍សហគមន៍</p>
            <button className={styles.button_register} onClick={() => {}}>ចុះឈ្មោះ</button>
          </div>
        </div>
        <div className={styles.carouselItem2}>
          <div className={styles.lesson_1_wrapper}>
            <Image className={styles.lesson_1} src="/lesson-2.png" width={100} height={0} alt="" />
          </div>
          <div className={styles.details_wrapper}>
            <p className={styles.details_title}>នាយកដ្ឋានអភិវឌ្ឍន៍សេដ្ឋកិច្ចជនបទ</p>
            <p className={styles.details_time}>រយះពេល: 4 ម៉ោង​​​​ 30 នាទី</p>
            <p className={styles.details_description}>ពី នាយកដ្ឋានអភិវឌ្ឍន៍សហគមន៍</p>
            <button className={styles.button_register} onClick={() => {}}>ចុះឈ្មោះ</button>
          </div>
        </div>
        <div className={styles.carouselItem2}>
          <div className={styles.lesson_1_wrapper}>
            <Image className={styles.lesson_1} src="/lesson-3.png" width={100} height={0} alt="" />
          </div>
          <div className={styles.details_wrapper}>
            <p className={styles.details_title}>នាយកដ្ឋានផ្គ្តត់ផ្គង់ទឹកជនបទ</p>
            <p className={styles.details_time}>រយះពេល: 4 ម៉ោង​​​​ 30 នាទី</p>
            <p className={styles.details_description}>ពី នាយកដ្ឋានអភិវឌ្ឍន៍សហគមន៍</p>
            <button className={styles.button_register} onClick={() => {}}>ចុះឈ្មោះ</button>
          </div>
        </div>
        <div className={styles.carouselItem2}>
          <div className={styles.lesson_1_wrapper}>
            <Image className={styles.lesson_1} src="/lesson-4.png" width={100} height={0} alt="" />
          </div>
          <div className={styles.details_wrapper}>
            <p className={styles.details_title}>នាយកដ្ឋានថែទាំសុខភាពជនបទ</p>
            <p className={styles.details_time}>រយះពេល: 4 ម៉ោង​​​​ 30 នាទី</p>
            <p className={styles.details_description}>ពី នាយកដ្ឋានអភិវឌ្ឍន៍សហគមន៍</p>
            <button className={styles.button_register} onClick={() => {}}>ចុះឈ្មោះ</button>
          </div>
        </div>
        <div className={styles.carouselItem2}>
          <div className={styles.lesson_1_wrapper}>
            <Image className={styles.lesson_1} src="/lesson-2.png" width={100} height={0} alt="" />
          </div>
          <div className={styles.details_wrapper}>
            <p className={styles.details_title}>វិធីធ្វើចញ្ចិមសត្វ</p>
            <p className={styles.details_time}>រយះពេល: 4 ម៉ោង​​​​ 30 នាទី</p>
            <p className={styles.details_description}>ពី នាយកដ្ឋានអភិវឌ្ឍន៍សហគមន៍</p>
            <button className={styles.button_register} onClick={() => {}}>ចុះឈ្មោះ</button>
          </div>
        </div>
        <div className={styles.carouselItem2}>
          <div className={styles.lesson_1_wrapper}>
            <Image className={styles.lesson_1} src="/lesson-4.png" width={100} height={0} alt="" />
          </div>
          <div className={styles.details_wrapper}>
            <p className={styles.details_title}>វិធីចម្រោះទឹក</p>
            <p className={styles.details_time}>រយះពេល: 4 ម៉ោង​​​​ 30 នាទី</p>
            <p className={styles.details_description}>ពី នាយកដ្ឋានអភិវឌ្ឍន៍សហគមន៍</p>
            <button className={styles.button_register} onClick={() => {}}>ចុះឈ្មោះ</button>
          </div>
        </div>
        <div className={styles.carouselItem2}>
          <div className={styles.lesson_1_wrapper}>
            <Image className={styles.lesson_1} src="/lesson-3.png" width={100} height={0} alt="" />
          </div>
          <div className={styles.details_wrapper}>
            <p className={styles.details_title}>វិធីធ្វើជីកំប៉ុស</p>
            <p className={styles.details_time}>រយះពេល: 4 ម៉ោង​​​​ 30 នាទី</p>
            <p className={styles.details_description}>ពី នាយកដ្ឋានអភិវឌ្ឍន៍សហគមន៍</p>
            <button className={styles.button_register} onClick={() => {}}>ចុះឈ្មោះ</button>
          </div>
        </div>
        <div className={styles.carouselItem2}>
          <div className={styles.lesson_1_wrapper}>
            <Image className={styles.lesson_1} src="/lesson-1.png" width={100} height={0} alt="" />
          </div>
          <div className={styles.details_wrapper}>
            <p className={styles.details_title}>វិធីធ្វើចញ្ចិមសត្វ</p>
            <p className={styles.details_time}>រយះពេល: 4 ម៉ោង​​​​ 30 នាទី</p>
            <p className={styles.details_description}>ពី នាយកដ្ឋានអភិវឌ្ឍន៍សហគមន៍</p>
            <button className={styles.button_register} onClick={() => {}}>ចុះឈ្មោះ</button>
          </div>
        </div>
        <div className={styles.carouselItem2}>
          <div className={styles.lesson_1_wrapper}>
            <Image className={styles.lesson_1} src="/lesson-4.png" width={100} height={0} alt="" />
          </div>
          <div className={styles.details_wrapper}>
            <p className={styles.details_title}>វិធីដាំស្វាយ</p>
            <p className={styles.details_time}>រយះពេល: 4 ម៉ោង​​​​ 30 នាទី</p>
            <p className={styles.details_description}>ពី នាយកដ្ឋានអភិវឌ្ឍន៍សហគមន៍</p>
            <button className={styles.button_register} onClick={() => {}}>ចុះឈ្មោះ</button>
          </div>
        </div>
        <div className={styles.carouselItem2}>
          <div className={styles.lesson_1_wrapper}>
            <Image className={styles.lesson_1} src="/lesson-2.png" width={100} height={0} alt="" />
          </div>
          <div className={styles.details_wrapper}>
            <p className={styles.details_title}>វិធីដាំស្ពៃ</p>
            <p className={styles.details_time}>រយះពេល: 4 ម៉ោង​​​​ 30 នាទី</p>
            <p className={styles.details_description}>ពី នាយកដ្ឋានអភិវឌ្ឍន៍សហគមន៍</p>
            <button className={styles.button_register} onClick={() => {}}>ចុះឈ្មោះ</button>
          </div>
        </div>
        <div className={styles.carouselItem2}>
          <div className={styles.lesson_1_wrapper}>
            <Image className={styles.lesson_1} src="/lesson-3.png" width={100} height={0} alt="" />
          </div>
          <div className={styles.details_wrapper}>
            <p className={styles.details_title}>វិធីដាំស្វាយ</p>
            <p className={styles.details_time}>រយះពេល: 4 ម៉ោង​​​​ 30 នាទី</p>
            <p className={styles.details_description}>ពី នាយកដ្ឋានអភិវឌ្ឍន៍សហគមន៍</p>
            <button className={styles.button_register} onClick={() => {}}>ចុះឈ្មោះ</button>
          </div>
        </div>
      </div>

      <div className={styles.buttons}>
        <button className={styles.button_prev} onClick={() => scrollCarousel2('prev')}>Previous</button>
        <button className={styles.button_next} onClick={() => scrollCarousel2('next')}>Next</button>
      </div>
    </div>


    <div className={styles.carouselContainer}>
      <p className={styles.title}>ប្រភេទវគ្គសិក្សា</p>
      <div className={styles.carousel3}>
        <div className={styles.carouselItem3}>
          <div className={styles.lesson_1_wrapper}>
            <Image className={styles.lesson_1} src="/lesson-1.png" width={100} height={0} alt="" />
          </div>
          <div className={styles.details_wrapper}>
            <p className={styles.details_title}>បណ្តុះបណ្ដាលជំនាញ</p>
            <p className={styles.details_time}>រយះពេល: 4 ម៉ោង​​​​ 30 នាទី</p>
            <p className={styles.details_description}>ពី នាយកដ្ឋានអភិវឌ្ឍន៍សហគមន៍</p>
            <button className={styles.button_register} onClick={() => {}}>ចុះឈ្មោះ</button>
          </div>
        </div>
        <div className={styles.carouselItem3}>
          <div className={styles.lesson_1_wrapper}>
            <Image className={styles.lesson_1} src="/lesson-2.png" width={100} height={0} alt="" />
          </div>
          <div className={styles.details_wrapper}>
            <p className={styles.details_title}>ផ្ទះសំណាញ់</p>
            <p className={styles.details_time}>រយះពេល: 4 ម៉ោង​​​​ 30 នាទី</p>
            <p className={styles.details_description}>ពី នាយកដ្ឋានអភិវឌ្ឍន៍សហគមន៍</p>
            <button className={styles.button_register} onClick={() => {}}>ចុះឈ្មោះ</button>
          </div>
        </div>
        <div className={styles.carouselItem3}>
          <div className={styles.lesson_1_wrapper}>
            <Image className={styles.lesson_1} src="/lesson-3.png" width={100} height={0} alt="" />
          </div>
          <div className={styles.details_wrapper}>
            <p className={styles.details_title}>ភូមិគំរូ</p>
            <p className={styles.details_time}>រយះពេល: 4 ម៉ោង​​​​ 30 នាទី</p>
            <p className={styles.details_description}>ពី នាយកដ្ឋានអភិវឌ្ឍន៍សហគមន៍</p>
            <button className={styles.button_register} onClick={() => {}}>ចុះឈ្មោះ</button>
          </div>
        </div>
        <div className={styles.carouselItem3}>
          <div className={styles.lesson_1_wrapper}>
            <Image className={styles.lesson_1} src="/lesson-4.png" width={100} height={0} alt="" />
          </div>
          <div className={styles.details_wrapper}>
            <p className={styles.details_title}>វិធីដាំដំណាំ</p>
            <p className={styles.details_time}>រយះពេល: 4 ម៉ោង​​​​ 30 នាទី</p>
            <p className={styles.details_description}>ពី នាយកដ្ឋានអភិវឌ្ឍន៍សហគមន៍</p>
            <button className={styles.button_register} onClick={() => {}}>ចុះឈ្មោះ</button>
          </div>
        </div>
        <div className={styles.carouselItem3}>
          <div className={styles.lesson_1_wrapper}>
            <Image className={styles.lesson_1} src="/lesson-2.png" width={100} height={0} alt="" />
          </div>
          <div className={styles.details_wrapper}>
            <p className={styles.details_title}>វិធីធ្វើចញ្ចិមសត្វ</p>
            <p className={styles.details_time}>រយះពេល: 4 ម៉ោង​​​​ 30 នាទី</p>
            <p className={styles.details_description}>ពី នាយកដ្ឋានអភិវឌ្ឍន៍សហគមន៍</p>
            <button className={styles.button_register} onClick={() => {}}>ចុះឈ្មោះ</button>
          </div>
        </div>
        <div className={styles.carouselItem3}>
          <div className={styles.lesson_1_wrapper}>
            <Image className={styles.lesson_1} src="/lesson-4.png" width={100} height={0} alt="" />
          </div>
          <div className={styles.details_wrapper}>
            <p className={styles.details_title}>វិធីចម្រោះទឹក</p>
            <p className={styles.details_time}>រយះពេល: 4 ម៉ោង​​​​ 30 នាទី</p>
            <p className={styles.details_description}>ពី នាយកដ្ឋានអភិវឌ្ឍន៍សហគមន៍</p>
            <button className={styles.button_register} onClick={() => {}}>ចុះឈ្មោះ</button>
          </div>
        </div>
        <div className={styles.carouselItem3}>
          <div className={styles.lesson_1_wrapper}>
            <Image className={styles.lesson_1} src="/lesson-3.png" width={100} height={0} alt="" />
          </div>
          <div className={styles.details_wrapper}>
            <p className={styles.details_title}>មេរៀនទូទៅ</p>
            <p className={styles.details_time}>រយះពេល: 4 ម៉ោង​​​​ 30 នាទី</p>
            <p className={styles.details_description}>ពី នាយកដ្ឋានអភិវឌ្ឍន៍សហគមន៍</p>
            <button className={styles.button_register} onClick={() => {}}>ចុះឈ្មោះ</button>
          </div>
        </div>
        <div className={styles.carouselItem3}>
          <div className={styles.lesson_1_wrapper}>
            <Image className={styles.lesson_1} src="/lesson-1.png" width={100} height={0} alt="" />
          </div>
          <div className={styles.details_wrapper}>
            <p className={styles.details_title}>វិធីធ្វើចញ្ចិមសត្វ</p>
            <p className={styles.details_time}>រយះពេល: 4 ម៉ោង​​​​ 30 នាទី</p>
            <p className={styles.details_description}>ពី នាយកដ្ឋានអភិវឌ្ឍន៍សហគមន៍</p>
            <button className={styles.button_register} onClick={() => {}}>ចុះឈ្មោះ</button>
          </div>
        </div>
        <div className={styles.carouselItem3}>
          <div className={styles.lesson_1_wrapper}>
            <Image className={styles.lesson_1} src="/lesson-4.png" width={100} height={0} alt="" />
          </div>
          <div className={styles.details_wrapper}>
            <p className={styles.details_title}>វិធីដាំស្វាយ</p>
            <p className={styles.details_time}>រយះពេល: 4 ម៉ោង​​​​ 30 នាទី</p>
            <p className={styles.details_description}>ពី នាយកដ្ឋានអភិវឌ្ឍន៍សហគមន៍</p>
            <button className={styles.button_register} onClick={() => {}}>ចុះឈ្មោះ</button>
          </div>
        </div>
        <div className={styles.carouselItem3}>
          <div className={styles.lesson_1_wrapper}>
            <Image className={styles.lesson_1} src="/lesson-2.png" width={100} height={0} alt="" />
          </div>
          <div className={styles.details_wrapper}>
            <p className={styles.details_title}>វិធីដាំស្ពៃ</p>
            <p className={styles.details_time}>រយះពេល: 4 ម៉ោង​​​​ 30 នាទី</p>
            <p className={styles.details_description}>ពី នាយកដ្ឋានអភិវឌ្ឍន៍សហគមន៍</p>
            <button className={styles.button_register} onClick={() => {}}>ចុះឈ្មោះ</button>
          </div>
        </div>
        <div className={styles.carouselItem3}>
          <div className={styles.lesson_1_wrapper}>
            <Image className={styles.lesson_1} src="/lesson-3.png" width={100} height={0} alt="" />
          </div>
          <div className={styles.details_wrapper}>
            <p className={styles.details_title}>វិធីដាំស្វាយ</p>
            <p className={styles.details_time}>រយះពេល: 4 ម៉ោង​​​​ 30 នាទី</p>
            <p className={styles.details_description}>ពី នាយកដ្ឋានអភិវឌ្ឍន៍សហគមន៍</p>
            <button className={styles.button_register} onClick={() => {}}>ចុះឈ្មោះ</button>
          </div>
        </div>
      </div>

      <div className={styles.buttons}>
        <button className={styles.button_prev} onClick={() => scrollCarousel3('prev')}>Previous</button>
        <button className={styles.button_next} onClick={() => scrollCarousel3('next')}>Next</button>
      </div>
    </div>
    </>
  );
}



