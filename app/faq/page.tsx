"use client";
import NavBar from "@/components/Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqData from "@/data/faq.json";

export default function FAQPage() {
  const { faqs } = faqData;

  return (
    <main className="min-h-screen relative dark">
      <NavBar />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-4">
          {/* Header Section */}
          <div className="mb-12 space-y-4">
            <h1 className="text-4xl font-bold text-white text-center">
              Frequently asked questions
            </h1>
            <p className="text-gray-400 text-center max-w-2xl mx-auto">
              Panduan lengkap untuk memahami layanan jasa Joki Koding dan cara memulai proyek dengan kami.
            </p>
          </div>

          {/* FAQ Section */}
          <div className="grid gap-4">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-white hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact Section */}
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
        </div>
      </div>
    </main>
  );
}