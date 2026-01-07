"use client";

import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { Testimonial } from "@/types/testimonial";
import { useEffect, useState } from "react";
import TestimonialCard from "./testimonial-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials: Testimonial[] = [
  {
    name: "Si Kucink",
    device: "Xiaomi Poco F6",
    service: "Custom ROM",
    rating: 5,
    text: "Pelayanan super cepat dan hasilnya mantap! Custom ROM Pixel Experience berjalan mulus tanpa bug. Recommended banget!",
    avatar: "SK",
  },
  {
    name: "Kunink Si",
    device: "Xiaomi Redmi Note 5",
    service: "Root",
    rating: 5,
    text: "Awalnya ragu mau root, tapi setelah dijelaskan prosesnya jadi yakin. Sekarang HP makin kenceng dan bisa pake Vanced!",
    avatar: "SK",
  },
  {
    name: "Kelomank",
    device: "Xiaomi Redmi 9",
    service: "UBL",
    rating: 5,
    text: "Proses UBL yang ribet di Xiaomi dikerjain sama mas teknisi dengan sangat profesional. Sekarang pake ArrowOS, smooth banget!",
    avatar: "KM",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goTo = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goPrev = () => goTo((currentIndex - 1 + testimonials.length) % testimonials.length);
  const goNext = () => goTo((currentIndex + 1) % testimonials.length);

  return (
    <section id="testimonials">
      <MaxWidthWrapper className="flex flex-col items-center justify-center gap-13 py-18">
        <div className="space-y-3 text-center">
          <span className="text-primary block text-sm tracking-widest uppercase">Testimoni</span>
          <h2 className="text-4xl font-bold">
            Apa Kata <span className="gradient-text">Mereka</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-sm">Kami berkomitmen memberikan layanan terbaik dengan hasil yang memuaskan.</p>
        </div>
        <div className="flex w-full max-w-3xl flex-col items-center justify-center gap-5">
          <TestimonialCard testimonial={testimonials[currentIndex]} />
          <div className="flex items-center gap-3">
            <Button onClick={goPrev} variant={"testimonialsNav"} className="size-fit p-3">
              <ChevronLeft className="size-3.5" strokeWidth={2.5} />
            </Button>
            <div className="flex gap-1">
              {testimonials.map((_, index) => (
                <Button
                  key={index}
                  onClick={() => goTo(index)}
                  variant={"testimonialsDot"}
                  className={`size-1 p-2 ${index === currentIndex ? "bg-primary w-8" : "bg-border hover:bg-primary/30"}`}
                />
              ))}
            </div>
            <Button onClick={goNext} variant={"testimonialsNav"} className="size-fit p-3">
              <ChevronRight className="size-3.5" strokeWidth={2.5} />
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
