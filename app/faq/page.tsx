"use client";
import NavBar from "@/components/Navbar";
import ScrollAnimation from "@/components/ScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqData from "@/data/faq.json";
import Image from "next/image";


export default function FAQPage() {
  const { faqs } = faqData;

  return (
    <main className="min-h-screen relative dark">
      <NavBar />
      
      <div className="container relative mx-auto px-4 py-16 max-w-4xl z-10">
        <div className="space-y-4">
          {/* Header Section */}
          <ScrollAnimation>
            <div className="mb-12 space-y-4">
              <h1 className="text-4xl font-bold text-white text-center">
                Frequently asked questions
              </h1>
              <p className="text-gray-400 text-center max-w-2xl mx-auto">
                Panduan lengkap untuk memahami layanan jasa Joki Koding dan cara memulai proyek dengan kami.
              </p>
            </div>
          </ScrollAnimation>

          {/* FAQ Section */}
          <div className="grid gap-4">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq) => (
                <ScrollAnimation>
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="bg-gray-900/50 border border-gray-800 rounded-lg px-6 "
                  >
                    <AccordionTrigger className="text-white hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </ScrollAnimation>
              ))}
            </Accordion>
          </div>

          {/* Contact Section */}
          <ScrollAnimation>
            <div className="mt-12 text-center space-y-4 bg-gray-900/50 border border-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-white">
                Masih ada pertanyaan?
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Kami siap membantu menjawab pertanyaan Anda. Hubungi tim support kami untuk
                mendapatkan jawaban yang lebih detail.
              </p>
              <button className="mt-4 px-6 py-3 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 transition-colors">
                Hubungi Support Team
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      <div className="illustration-container h-full max-w-[99vw] absolute top-0 bottom-0 left-0 right-0 z-0 overflow-hidden">
        <div className="h-full w-full max-w-[99vw] relative overflow-hidden">
          <Image data-aos="fade-right" data-aos-duration="1000" alt="Laptop illustration" src="/image/laptop-illustration.svg" width="500" height="500" decoding="async" data-nimg="1" className="absolute top-10 z-[2] -left-20 !opacity-50 md:opacity-50 aos-init aos-animate" loading="lazy" />
          <Image alt="Laptop illustration" src="/image/purple-blur.svg" width="500" height="500" decoding="async" data-nimg="1" className="absolute top-[30px] z-[2] -left-[200px] rotate-6" loading="lazy" />
          <Image data-aos="fade-left" data-aos-duration="1000" alt="Laptop illustration" src="/image/data-illustration.svg" width="500" height="500" decoding="async" data-nimg="1" className="absolute top-80 z-[2] -right-[100px] rotate-6 !opacity-50 md:opacity-50 aos-init aos-animate" loading="lazy" />
          <Image alt="Laptop illustration" src="/image/purple-blur.svg" width="500" height="500" decoding="async" data-nimg="1" className="absolute top-80 z-[2] -right-[300px] rotate-6" loading="lazy" />

          <Image alt="Laptop illustration" src="/image/grid-decoration.svg" width="500" height="500" decoding="async" data-nimg="1" className="absolute top-[100px] z-[2] -right-[260px]" loading="lazy" />
          <Image alt="Laptop illustration" src="/image/purple-blur.svg" width="500" height="500" decoding="async" data-nimg="1" className="absolute top-[1600px] z-[2] -right-[260px] rotate-6" loading="lazy" />
          <Image alt="Laptop illustration" src="/image/purple-blur.svg" width="500" height="500" decoding="async" data-nimg="1" className="absolute top-[1200px] z-[2] -left-[260px] rotate-6" loading="lazy" />
        </div>
      </div>
    </main>
  );
}