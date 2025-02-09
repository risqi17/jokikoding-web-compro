import React from 'react';

const ProjectShowcase = () => {
  const projects = [
    {
      title: "Penambahan fitur pada program sederhana untuk mengelola data kelapa sawit",
      tags: ["Java", "IDE Netbeans", "iReport Plugin"],
      price: 99000,
      originalPrice: 180000,
    },
    {
      title: "Program sederhana untuk menghitung luas suatu bentuk bangun datar (Segitiga, Persegi,...",
      tags: ["Java", "Android Studio"],
      price: 99000,
      originalPrice: 295000,
    },
    {
      title: "Program sederhana untuk merotasikan array 2D serta program sudoku checker",
      tags: ["Bahasa Pemrograman C"],
      price: 200000,
      originalPrice: 475000,
    },
    {
      title: "Penambahan fitur filter pada aplikasi website apapun .",
      tags: ["PHP", "Laravel"],
      price: 150000,
      originalPrice: 475000,
    },
  ];

  return (
    <div className="container mx-auto text-white p-8">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Kami Punya <span className="text-white">Proyek Siap Pakai</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Telusuri proyek terbaru kami, temukan proyek siap pakai sesuai kebutuhanmu untuk mendapatkan harga lebih murah dan penyelesaian lebih cepat!
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          <button className="px-4 py-2 rounded-full bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-colors">
            🔧 Aplikasi Sederhana
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
            🌐 Website
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
            📱 Mobile
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
            📊 Data Science
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 relative overflow-hidden">
              {/* Purple Accent */}
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-purple-600"></div>
              
              <div className="mb-4">
                <div className="text-sm text-gray-400 mb-2">Deskripsi Proyek</div>
                <h3 className="font-medium mb-4 line-clamp-3">{project.title}</h3>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 rounded-full text-sm bg-gray-700/50 text-purple-300 border border-purple-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="text-sm">Proyek siap kirim</span>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500 line-through">
                    Rp {project.originalPrice.toLocaleString()}
                  </div>
                  <div className="text-lg font-semibold">
                    Rp {project.price.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Link */}
        <div className="text-right">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            Lihat Lebih Banyak →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;