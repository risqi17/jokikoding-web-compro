'use client';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { AlignJustify } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/project-kami', label: 'Project Kami' },
  { href: '/marketplace', label: 'Project Marketplace' },
  { href: '/faq', label: 'FAQ' },
];

export default function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Show button only after scrolling down 100px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 md:hidden z-50 animate-fade-in">
          <Button
            onClick={() => setIsOpen(true)}
            size="lg"
            className="rounded-full w-14 h-14 bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/20"
          >
            <AlignJustify className="h-6 w-6 text-white" />
          </Button>
        </div>
      )}

      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent className="bg-gray-900/95 border-gray-800 w-[320px]">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white text-center">
              Menu Navigasi
            </AlertDialogTitle>
          </AlertDialogHeader>
          <div className="flex flex-col gap-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`w-full text-center py-3 rounded-lg transition-colors ${
                  pathname === item.href
                    ? "bg-indigo-600 text-white"
                    : "text-gray-300 hover:bg-gray-800"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <AlertDialogFooter>
            <Button
              onClick={() => setIsOpen(false)}
              className="w-full bg-gray-800 text-gray-300 hover:bg-gray-700"
            >
              Tutup
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
