"use client";
import NavBar from "@/components/Navbar";
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
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">
          Project Kami
        </h1>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-black"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

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
      </div>
    </main>
  );
}