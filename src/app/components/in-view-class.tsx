"use client";

import React, { useEffect, useRef } from "react";

interface InViewClassProps {
  children: React.ReactNode;
  classNameWhenInView: string;
  stayOff?: boolean;
  threshold?: number;
}

const InViewClass: React.FC<InViewClassProps> = ({
  children,
  classNameWhenInView,
  stayOff = true,
  threshold = 1.0,
}) => {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          targetRef.current?.classList.add(classNameWhenInView);
        } else {
          if (!stayOff) {
            targetRef.current?.classList.remove(classNameWhenInView);
          }
        }
      },
      { threshold: threshold } // Adjust threshold as needed
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [classNameWhenInView]);

  return <div ref={targetRef}>{children}</div>;
};

export default InViewClass;
