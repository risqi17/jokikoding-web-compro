"use client";
import { Metadata } from "next";
import NavBar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectForm from "@/components/ProjectForm";
import Footer from "@/components/Footer";
import ProjectShowcase from "@/components/ProjectShowcase";
import TestimonialsSection from "@/components/TestimonialSection";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Home() {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])

  return (
    <main className="min-h-[100vh] relative dark">
      <NavBar />

      <div className="illustration-container h-full max-w-[99vw] absolute top-0 bottom-0 left-0 right-0 z-1 overflow-hidden">
        <div className="h-full w-full max-w-[99vw] relative overflow-hidden">
          <img data-aos="fade-right" data-aos-duration="1000" alt="Laptop illustration" src="/image/laptop-illustration.svg" width="500" height="500" decoding="async" data-nimg="1" className="absolute -top-20 z-[1] -left-20 !opacity-50 md:opacity-50 aos-init aos-animate" loading="lazy" />
          <img alt="Laptop illustration" src="/image/purple-blur.svg" width="500" height="500" decoding="async" data-nimg="1" className="absolute -top-[200px] z-[1] -left-[200px] rotate-6" loading="lazy"/>
          <img data-aos="fade-left" data-aos-duration="1000" alt="Laptop illustration" src="/image/data-illustration.svg" width="500" height="500" decoding="async" data-nimg="1" className="absolute top-80 z-[1] -right-60 rotate-6 !opacity-50 md:opacity-50 aos-init aos-animate" loading="lazy" />
          <img alt="Laptop illustration" src="/image/purple-blur.svg" width="500" height="500" decoding="async" data-nimg="1" className="absolute top-80 z-[1] -right-[300px] rotate-6" loading="lazy" />

          {/* mesh */}
          <img alt="Laptop illustration" src="/image/grid-decoration.svg" width="500" height="500" decoding="async" data-nimg="1" className="absolute top-[1400px] z-[1] -right-[260px]" loading="lazy" />
          <img alt="Laptop illustration" src="/image/purple-blur.svg" width="500" height="500" decoding="async" data-nimg="1" className="absolute top-[1600px] z-[1] -right-[260px] rotate-6" loading="lazy" />
          <img alt="Laptop illustration" src="/image/purple-blur.svg" width="500" height="500" decoding="async" data-nimg="1" className="absolute top-[1200px] z-[1] -left-[260px] rotate-6" loading="lazy" />
        </div>
      </div>

      <HeroSection />
      <ProjectForm />
      <ProjectShowcase />

      <TestimonialsSection />

      <div className="w-full flex items-center justify-center p-4 mt-36 mb-36">
        <div className="container w-full bg-gray-800/50 rounded-2xl p-12 backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Gimana, sudah yakin?
          </h2>
          <p className="text-gray-300 text-center text-lg mb-8">
            Yuk pesan layanan kami sekarang juga dan jadikan kami sebagai mitra
            terbaikmu dalam menghadirkan solusi IT yang hebat!
          </p>
          <div className="flex justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Pesan Sekarang
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
