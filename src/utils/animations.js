import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Text reveal animation
export const revealText = (element, delay = 0) => {
  return gsap.fromTo(
    element,
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      delay,
      stagger: 0.1,
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
      }
    }
  );
};

// Image fade-in animation
export const fadeInImage = (element, delay = 0) => {
  return gsap.fromTo(
    element,
    {
      scale: 1.1,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      delay,
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "bottom 30%",
        toggleActions: "play none none reverse",
      }
    }
  );
};

// Section reveal animation
export const revealSection = (element, delay = 0) => {
  return gsap.fromTo(
    element,
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      delay,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      }
    }
  );
};

// Staggered cards animation
export const animateCards = (elements, delay = 0) => {
  return gsap.fromTo(
    elements,
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.15,
      duration: 0.8,
      ease: "back.out(1.2)",
      delay,
      scrollTrigger: {
        trigger: elements,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      }
    }
  );
};

// Split text animation (for headings)
export const splitTextAnimation = (element) => {
  // First split the text into words
  const text = element.textContent;
  const words = text.split(' ');
  
  // Clear the element
  element.textContent = '';
  
  // Create spans for each word
  words.forEach((word, index) => {
    const wordSpan = document.createElement('span');
    wordSpan.className = 'animate-word';
    wordSpan.style.display = 'inline-block';
    wordSpan.style.overflow = 'hidden';
    
    const innerSpan = document.createElement('span');
    innerSpan.className = 'animate-inner';
    innerSpan.textContent = word + (index < words.length - 1 ? ' ' : '');
    innerSpan.style.display = 'inline-block';
    innerSpan.style.transform = 'translateY(100%)';
    
    wordSpan.appendChild(innerSpan);
    element.appendChild(wordSpan);
  });
  
  // Animate each word
  gsap.to('.animate-inner', {
    y: 0,
    duration: 1,
    ease: "power4.out",
    stagger: 0.05,
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      toggleActions: "play none none reverse",
    }
  });
};

// Parallax effect for background elements
export const parallaxEffect = (element, speed = 0.5) => {
  gsap.to(element, {
    y: () => -window.innerHeight * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    }
  });
};

// Button hover animation
export const buttonHoverAnimation = (button) => {
  const tl = gsap.timeline({ paused: true });
  
  tl.to(button, {
    scale: 1.05,
    duration: 0.3,
    ease: "power2.out",
  });
  
  button.addEventListener("mouseenter", () => tl.play());
  button.addEventListener("mouseleave", () => tl.reverse());
  
  return tl;
};
