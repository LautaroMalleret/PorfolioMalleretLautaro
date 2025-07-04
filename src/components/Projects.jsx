import React, { useState } from "react";
import projects from "../data/projects";
//componente para mostrar los proyectos

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  // Abrir modal y resetear imagen inicial
  function openModal(project) {
    setSelectedProject(project);
    setCurrentImage(0);
  }

  // Cerrar modal
  function closeModal() {
    setSelectedProject(null);
    setCurrentImage(0);
  }

  // Cambiar imagen del carrusel
  function prevImage() {
    if (!selectedProject) return;
    setCurrentImage((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  }

  function nextImage() {
    if (!selectedProject) return;
    setCurrentImage((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="border rounded-lg p-4 hover:shadow-lg cursor-pointer transition"
            onClick={() => openModal(proj)}
          >
            <img
              src={proj.images[0]}
              alt={proj.title}
              className="rounded-md mb-4 object-cover w-full h-48"
            />
            <h3 className="text-xl font-semibold mb-1">{proj.title}</h3>
            <p className="text-gray-600 mb-2">{proj.subtitle}</p>
            <p className="text-sm text-gray-500">{proj.tech}</p>
          </div>
        ))}
      </div>

      {/* Modal  para mostrar los proyectos */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative"
            onClick={(e) => e.stopPropagation()} // evitar cerrar modal al hacer click dentro
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
              aria-label="Cerrar modal"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
            <p className="mb-4">{selectedProject.description}</p>
            <p className="italic mb-4 text-gray-700">
              Tecnologías: {selectedProject.tech}
            </p>

            {/* Carrusel */}
            <div className="relative">
              <img
                src={selectedProject.images[currentImage]}
                alt={`${selectedProject.title} imagen ${currentImage + 1}`}
                className="w-full h-64 object-contain rounded-md"
              />
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute top-1/2 left-2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100"
                    aria-label="Imagen anterior"
                  >
                    ‹
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute top-1/2 right-2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100"
                    aria-label="Imagen siguiente"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {/* Links */}
            <div className="mt-6 flex space-x-4">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Código en GitHub
                </a>
              )}
              {selectedProject.web && (
                <a
                  href={selectedProject.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Ver sitio web
                </a>
              )}
              {selectedProject.docs && (
                <a
                  href={selectedProject.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Documentación API
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
