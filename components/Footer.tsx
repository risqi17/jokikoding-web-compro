import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center p-4 mt-36 mb-36">
        <div className="container mx-auto text-white p-8 z-10">
            
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h2 className="text-4xl font-bold mb-4">
                    Masih bingung? Tenang, kami siap membantumu
                    </h2>
                    <p className="text-gray-400">
                    Jika ada pertanyaan lain yang belum ada di sini boleh tanyakan dan konsultasikan langsung di sini
                    </p>
                </div>
                <div>
                    <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem value="item-1" className="border-gray-800">
                        <AccordionTrigger className="text-left text-lg hover:no-underline">
                        Berapa lama proyek dikerjakan?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-400">
                        [Content goes here]
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border-gray-800">
                        <AccordionTrigger className="text-left text-lg hover:no-underline">
                        Apakah bisa di-refund?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-400">
                        [Content goes here]
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="border-gray-800">
                        <AccordionTrigger className="text-left text-lg hover:no-underline">
                        Apakah ada jatah revisi?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-400">
                        Ada. Maksimal 7x revisi minor (contoh: mengubah warna, tambahan fungsionalitas sederhana, dll.)
                        </AccordionContent>
                    </AccordionItem>
                    </Accordion>
                </div>
            </div>
            {/* FAQ Header */}

            {/* Footer */}
            <footer className="container mx-auto border-t border-gray-800 pt-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8">
                    <svg viewBox="0 0 32 32" className="w-full h-full">
                        <rect width="14" height="14" x="2" y="2" fill="white" />
                        <rect width="14" height="14" x="16" y="16" fill="white" />
                    </svg>
                    </div>
                    <span className="font-semibold">Joki<span className="text-purple-500">Proyek</span></span>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-6">
                    <a href="https://instagram.com/jokiproyek" className="text-gray-400 hover:text-white transition-colors">
                    @jokiproyek
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Layanan Pengaduan & Saran
                    </a>
                </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-gray-500 text-sm mt-12 pb-8">
                © JokiProyek 2023. All rights reserved.
                </div>
            </footer>
        </div>
    </div>
  );
};

export default Footer;