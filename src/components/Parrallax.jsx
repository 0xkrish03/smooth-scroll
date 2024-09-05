'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useWindowSize } from '@darkroom.engineering/hamo';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Parrallax = ({ children, speed = 1, id = "parralax", className }) => {
  const trigger = useRef();
  const target = useRef();
  const timeline = useRef();

  const { width: windoWidth } = useWindowSize();

  useEffect(() => {
    const y = windoWidth * speed * 0.1;

    const setY = gsap.quickSetter(target.current, "y", "px");

    timeline.current = gsap.timeline({
      scrollTrigger: {
        id: id,
        trigger: trigger.current,
        scrub: true,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (e) => {
          setY(e.progress * y);
        },
      },
    });

    return () => {
      timeline?.current?.kill();
    };
  }, [id, speed, windoWidth]);

  return (
    <div className={className} ref={trigger}>
      <div ref={target}>
        {children}
      </div>
    </div>
  );
};

export default Parrallax;
