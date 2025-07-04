
import React from 'react';

export default function About() {
  return (
    <section className="text-center py-12">
  <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-3xl font-bold">
    <span>&lt;Portfolio&gt;</span>
    <span>&lt;Lautaro Malleret&gt;</span>
  </div>

  <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-lg text-gray-600 mt-4">
    <span>Estudiante de Sistemas</span>
    <span className="hidden md:inline">|</span>
    <span>Developer Full-Stack</span>
  </div>
</section>

  );
}