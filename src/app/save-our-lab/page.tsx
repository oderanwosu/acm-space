"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Icons } from "@/components/icons";
import affiliateOrganizations from "@/constants/organizations";
import { ACM_INFO } from "@/constants/messages";
import CanvasSquircles from "@/components/grid-of-squircles";
import Footer from "@/components/layouts/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import FullscreenSlideshow from "@/components/full-screen-slideshow";
import { TypewriterConfig, useTypewriter } from "@/hooks/use-typewriter";

const pageConfig: TypewriterConfig = {
  text: "Support our computer science lab in one click",
  monoText: "computer science lab",
  typingSpeed: 60,
  deleteSpeed: 50,
  pauseTime: 13000,
};

export default function SaveOurLabLanding() {
  const typewriter = useTypewriter(pageConfig);

  return (
    <div className="relative">
      {/* Parallax Hero Section */}
      <div className="relative h-[100vh] overflow-hidden text-white">
        <FullscreenSlideshow />
        <section className="hero-container relative z-10 flex flex-col md:flex-row items-center justify-center h-full text-center md:text-left px-4 md:gap-12">
          {/* Left side: Title and description */}
          <div className="flex flex-col justify-center md:flex-1 md:max-w-lg">
            <div className="h-[6rem] md:h-[4.5rem] flex flex-col-reverse justify-start">
              <h1 className="text-5xl md:text-6xl font-bold">
                <span>
                  {typewriter.renderTypedText()}
                  <span className="animate-blink text-acm-blue">|</span>
                </span>
              </h1>
            </div>
            <h4 className="mt-4 max-w-2xl text-lg md:text-xl">
              Our community space needs help. We need your help keeping the
              place where we began.
            </h4>
          </div>

          {/* Right side: Email input and explanation */}
          <div className="mt-8 md:mt-0 md:flex-1 flex flex-col items-center md:items-start max-w-md w-full">
            <p className="mb-4 text-base md:text-lg">With one click</p>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-acm-blue"
            />
            <button
              type="submit"
              className="mt-4 w-full bg-discord-blue text-white py-3 rounded-md hover:bg-discord-blue/90"
            >
              Save My Spot
            </button>
          </div>
        </section>
      </div>

      {/* Content Below Hero */}
      <section className="relative z-20 bg-background py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What is ACM?</h2>
          <p className="text-lg text-muted-foreground">
            ACM at SFSU is the largest student-run computer science club...
          </p>
          {/* More content goes here */}
        </div>
      </section>
    </div>
  );
}
