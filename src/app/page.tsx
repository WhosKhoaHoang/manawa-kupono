"use client";

import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="text-gray-600 antialiased">
    {/* <Meta title={AppConfig.title} description={AppConfig.description} /> */}
    <Hero />
    {/* <Sponsors />
    <VerticalFeatures />
    <Banner />
    <Footer /> */}
  </div>
  );
}
