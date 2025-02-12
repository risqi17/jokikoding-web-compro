'use client';
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { FC } from 'react'
import { usePathname } from 'next/navigation'

interface NavItem {
  href: string
  label: string
}

const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/project-kami', label: 'Project Kami' },
  { href: '/marketplace', label: 'Project Marketplace' },
  { href: '/faq', label: 'FAQ' },
]

const NavBar: FC = () => {
  const pathname = usePathname();

  return (
    <div className="w-full py-2 z-50 sticky top-0 transition-transform duration-300 backdrop-blur-md bg-slate-800 bg-opacity-20 -translate-y-2">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 3l9 4v12l-9 4-9-4V7l9-4z" />
            </svg>
          </Link>
          <div className="hidden md:flex gap-6 text-gray-300">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className={`transition-colors ${
                  pathname === item.href
                    ? "text-primary font-medium"
                    : "hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" onClick={() => {
          const element = document.getElementById('project-form');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.location.href = '/#project-form';
          }
        }}>
          Pesan sekarang
        </Button>
      </nav>
    </div>
  )
}

export default NavBar