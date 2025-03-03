import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const AnimationContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const ScrollAnimation = ({ 
  children, 
  animation = "fade", // fade, slide-up, slide-in, scale, rotate
  duration = 1,
  delay = 0,
  start = "top 80%", 
  end = "bottom 20%",
  scrub = false,
  markers = false,
  once = true,
  className = "",
  style = {}
}) => {
  const elementRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    
    let initialProps = {};
    let animatedProps = {};
    
    // Set initial and animated properties based on animation type
    switch(animation) {
      case "fade":
        initialProps = { autoAlpha: 0 };
        animatedProps = { autoAlpha: 1 };
        break;
      case "slide-up":
        initialProps = { y: 100, autoAlpha: 0 };
        animatedProps = { y: 0, autoAlpha: 1 };
        break;
      case "slide-in":
        initialProps = { x: -100, autoAlpha: 0 };
        animatedProps = { x: 0, autoAlpha: 1 };
        break;
      case "scale":
        initialProps = { scale: 0.8, autoAlpha: 0 };
        animatedProps = { scale: 1, autoAlpha: 1 };
        break;
      case "rotate":
        initialProps = { rotation: -5, autoAlpha: 0 };
        animatedProps = { rotation: 0, autoAlpha: 1 };
        break;
      default:
        initialProps = { autoAlpha: 0 };
        animatedProps = { autoAlpha: 1 };
    }
    
    // Set up GSAP animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start,
        end,
        toggleActions: once ? "play none none none" : "play none none reverse",
        markers,
        scrub: scrub ? 1 : false,
      }
    });
    
    tl.fromTo(
      element, 
      { ...initialProps },
      { 
        ...animatedProps, 
        duration, 
        delay,
        ease: "power3.out" 
      }
    );
    
    return () => {
      // Clean up ScrollTrigger
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, [animation, duration, delay, start, end, scrub, markers, once]);

  return (
    <div ref={triggerRef} className={className} style={style}>
      <AnimationContainer ref={elementRef}>
        {children}
      </AnimationContainer>
    </div>
  );
};

export default ScrollAnimation;
