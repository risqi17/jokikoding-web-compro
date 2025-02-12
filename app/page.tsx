"use client";
import NavBar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectForm from "@/components/ProjectForm";
import Footer from "@/components/Footer";
import ProjectShowcase from "@/components/ProjectShowcase";
import TestimonialsSection from "@/components/TestimonialSection";
import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";



export default function Home() {

  return (
    <main className="min-h-[100vh] relative dark" suppressHydrationWarning>
      <NavBar />

      <div className="illustration-container h-full max-w-[99vw] absolute top-0 bottom-0 left-0 right-0 z-[0] overflow-hidden">
        <div className="h-full w-full max-w-[99vw] relative overflow-hidden">
          <Image alt="Grid background" src="/image/wide-grid.svg" width={1920} height={1080} decoding="async" data-nimg="1" className=" top-0 z-1 left-0 w-full h-screen object-cover opacity-30" loading="lazy"/>
          <Image data-aos="fade-right" data-aos-duration="1000" alt="Laptop illustration" src="/image/laptop-illustration.svg" width="500" height="500" decoding="async" data-nimg="1" className="absolute top-10 z-[2] -left-20 !opacity-50 md:opacity-50 aos-init aos-animate" loading="lazy" />
          <Image alt="Laptop illustration" src="/image/purple-blur.svg" width="500" height="500" decoding="async" data-nimg="1" className="absolute top-[30px] z-[2] -left-[200px] rotate-6" loading="lazy"/>
          <Image data-aos="fade-left" data-aos-duration="1000" alt="Laptop illustration" src="/image/data-illustration.svg" width="500" height="500" decoding="async" data-nimg="1" className="absolute top-80 z-[2] -right-[100px] rotate-6 !opacity-50 md:opacity-50 aos-init aos-animate" loading="lazy" />
          <Image alt="Laptop illustration" src="/image/purple-blur.svg" width="500" height="500" decoding="async" data-nimg="1" className="absolute top-80 z-[2] -right-[300px] rotate-6" loading="lazy" />

          <Image alt="Laptop illustration" src="/image/grid-decoration.svg" width="500" height="500" decoding="async" data-nimg="1" className="absolute top-[1400px] z-[2] -right-[260px]" loading="lazy" />
          <Image alt="Laptop illustration" src="/image/purple-blur.svg" width="500" height="500" decoding="async" data-nimg="1" className="absolute top-[1600px] z-[2] -right-[260px] rotate-6" loading="lazy" />
          <Image alt="Laptop illustration" src="/image/purple-blur.svg" width="500" height="500" decoding="async" data-nimg="1" className="absolute top-[1200px] z-[2] -left-[260px] rotate-6" loading="lazy" />
        </div>
      </div>

      <ScrollAnimation>
        <HeroSection />
      </ScrollAnimation>

      <ScrollAnimation>
        <ProjectForm id="project-form" />
      </ScrollAnimation>

      <ScrollAnimation>
        <ProjectShowcase />
      </ScrollAnimation>

      <ScrollAnimation>
        <TestimonialsSection />
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="w-full flex items-center justify-center p-4 mt-36 mb-36">
          <div className="container w-full bg-gray-800/50 rounded-2xl p-12 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Jangan kelamaan, keburu deadline bro
            </h2>
            <p className="text-gray-300 text-center text-lg mb-8">
              Gas pesan layanan kami sekarang juga dan jadikan kami sebagai mitra
              terbaikmu dalam menghadirkan solusi IT yang hebat!
            </p>
            <div className="flex justify-center">
              <button 
                onClick={() => {
                  const element = document.getElementById('project-form');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Pesan Sekarang
              </button>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      <Footer />
    </main>
  );
}
