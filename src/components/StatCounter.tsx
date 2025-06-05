import React, { useState, useEffect, useRef } from 'react';
import './StatCounter.css';

interface StatCounterProps {
  endValue: number;
  duration?: number;
  label: string;
  suffix?: string;
}

const StatCounter: React.FC<StatCounterProps> = ({ 
  endValue, 
  duration = 2000, 
  label,
  suffix = ''
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const countStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countStarted.current) {
          countStarted.current = true;
          animateCount();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  const animateCount = () => {
    const start = 0;
    const end = endValue;
    const step = Math.ceil(end / (duration / 16)); // 16ms is roughly 60fps
    let current = start;
    
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(current);
      }
    }, 16);
  };

  return (
    <div className="stat-counter" ref={countRef}>
      <div className="stat-number">
        {count}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

export default StatCounter;
