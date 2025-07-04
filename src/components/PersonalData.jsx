import React from 'react';
// datos personales en footer
export default function PersonalData() {
  return (
    <section className="py-8 w-full px-4 flex flex-col items-center gap-6">
      <div className="flex flex-wrap justify-center gap-4 text-sm">
        {['Proactivo', 'Detallista', 'Resolutivo', 'Organizado', 'Adaptable'].map((item, i) => (
          <span key={i} className="px-4 py-1 border rounded-full text-blue-600">{item}</span>
        ))}
      </div>
      <div className="text-center text-sm text-blue-600">
        <p><strong>San Miguel, Buenos Aires</strong></p>
        <p><strong>Casado</strong></p>
        <p><strong>23 años</strong></p>
                <a
  href="/Malleret-Lautaro-cv.pdf"
  download
  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
>
  Descargar CV
</a>
      </div>
    </section>
  );
}
