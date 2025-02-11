"use client"
import React, { useState } from 'react';
import { Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const ProjectOrderForm = () => {
  const [projectType, setProjectType] = useState('Aplikasi Sederhana');
  const [deadline, setDeadline] = useState('18 February 2025');
  const [contact, setContact] = useState('');
  const [details, setDetails] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-gray-900 to-black p-6 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        {/* Back button */}
        <Link href="/">
            <button className="flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Kembali ke halaman pemesanan</span>
            </button>
        </Link>

        {/* Main card */}
        <div className="bg-gray-900 rounded-xl p-8 shadow-xl">
          <h1 className="text-3xl font-bold text-white mb-8">
            Proyekmu siap kami joki!
          </h1>

          {/* Form */}
          <form className="space-y-6">
            {/* Project Type */}
            <div className="space-y-2">
              <label className="text-gray-400">Tipe proyek</label>
              <select 
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
              >
                <option>Aplikasi Sederhana</option>
              </select>
            </div>

            {/* Deadline */}
            <div className="space-y-2">
              <label className="text-gray-400">Deadline</label>
              <div className="relative">
                <input
                  type="text"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  className="w-full bg-gray-800 text-white rounded-lg p-3 pr-24 border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-indigo-400 text-sm">Fleksibel</span>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-2">
              <label className="text-gray-400">Kontak</label>
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Nomor WhatsApp atau Em"
                className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
              />
              <p className="text-sm text-red-500">
                Masukkan nomor WhatsApp atau email yang valid
              </p>
            </div>

            {/* Project Details */}
            <div className="space-y-2">
              <label className="text-gray-400">Detail Proyek</label>
              <div className="relative">
                <div className="bg-gray-800 text-white rounded-lg p-4 border border-gray-700 mb-4">
                  <h3 className="font-medium">Aplikasi Sederhana Hitung Luas</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Details: Program sederhana untuk menghitung luas suatu bentuk bangun datar (Segitiga, Persegi, Persegi Panjang)
                  </p>
                </div>
                <textarea
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Detail untuk benar paham seluruhnya"
                  rows={4}
                  className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none resize-none"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectOrderForm;