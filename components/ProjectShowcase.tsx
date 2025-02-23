import Link from 'next/link';
import React, { useState } from 'react';

interface Project {
  id: number;
  category: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  technologies: string[];
  status: string;
}


const ProjectShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Aplikasi Sederhana', icon: '✏️' },
    { id: 'website', name: 'Website', icon: '🌐' },
    { id: 'mobile', name: 'Mobile', icon: '📱' },
    // { id: 'data-science', name: 'Data Science', icon: '📊' },
  ];

  
  const projects: Project[] = [
    {
      id: 1,
      category: 'aplikasi',
      title: 'Penambahan fitur pada program aplikasi Laravel, Codeigniter, atau PHP',
      description: 'Deskripsi Proyek',
      price: 99000,
      originalPrice: 180000,
      technologies: ['PHP', 'Codeigniter', 'Laravel'],  
      status: 'Proyek siap kirim'
    },
    {
      id: 2,
      category: 'website',
      title: 'Aplikasi chatbot sederhana menggunakan python, laravel, atau NodeJS',
      description: 'Deskripsi Proyek',
      price: 99000,
      originalPrice: 295000,
      technologies: ['Laravel', 'Python', 'NodeJS'],
      status: 'Proyek siap kirim'
    },
    {
      id: 3,
      category: 'website',
      title: 'Aplikasi Kasir menggunakan Laravel, atau NodeJS',
      description: 'Deskripsi Proyek',
      price: 990000,
      originalPrice: 1450000,
      technologies: ['Laravel', 'NodeJS'],
      status: 'Proyek siap kirim'
    },
    {
      id: 4,
      category: 'mobile',
      title: 'Aplikasi mobile untuk tracking kesehatan dan konsultasi dokter online.',
      description: 'Deskripsi Proyek',
      price: 3450000,
      originalPrice: 2950000,
      technologies: ['Flutter', 'Laravel'],
      status: 'Proyek siap kirim'
    },
    // Add more projects as needed
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-xl p-6 relative overflow-hidden hover:shadow-lg hover:shadow-gray-500">
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-indigo-600"></div>
              <div className="mb-4">
                <div className="text-sm text-gray-400 mb-2">Deskripsi Proyek</div>
                <h3 className="font-medium mb-4 line-clamp-3">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 rounded-full text-sm bg-gray-700/50 text-indigo-300 border border-indigo-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="text-sm"></span>
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
          <Link href={'/project-kami'} className="text-gray-400 hover:text-white transition-colors">
            Lebih Banyak →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;