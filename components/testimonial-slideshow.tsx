"use client";

import { testimonials } from "@/map/map";
import { useEffect, useState } from "react";
import TestimonialCard from "./UI/Card/testimonial-card";

export default function TestimonialSlideShow() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex transition-transform duration-500"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {testimonials.map((testimonial, index) => (
        <TestimonialCard testimonial={testimonial} index={index} key={index} />
      ))}
    </div>
  );
}
