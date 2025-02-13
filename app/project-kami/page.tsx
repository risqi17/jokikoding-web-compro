"use client";
import NavBar from "@/components/Navbar";
import ScrollAnimation from "@/components/ScrollAnimation";
import projectsData from "@/data/projects.json";
import { Project } from "@/types/project";
import Image from "next/image";
import { useState, useMemo } from "react";

export default function ProjectKami() {
  const { projects } = projectsData;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Get unique categories from projects
  const categories = useMemo(() => {
    const cats = projects.map(project => project.category);
    return ["All", ...Array.from(new Set(cats))];
  }, [projects]);

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter(project => project.category === selectedCategory);
  }, [projects, selectedCategory]);

  return (
    <main className="min-h-[100vh] relative dark">
      <NavBar />
      
      <div className="container relative mx-auto px-4 py-16 z-10">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Proyek Yang Sudah Kami Selesaikan
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Kami adalah pilihan utama untuk layanan implementasi proyek IT yang terjangkau, efisien, dan dapat diandalkan.
            </p>
          </div>
        </ScrollAnimation>

        {/* Category Filter */}
        <ScrollAnimation>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${selectedCategory === category
                    ? "bg-green-500/20 text-green-400 hover:bg-green-500/30"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollAnimation>
        <ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project: Project) => (
              <div
                key={project.id}
                className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-primary transition-colors"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800 text-primary rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>{project.client}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>

      <div className="illustration-container h-full max-w-[99vw] absolute top-0 bottom-0 left-0 right-0 z-[0] overflow-hidden">
        <div className="h-full w-full max-w-[99vw] relative overflow-hidden">
          
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