import React from 'react';

function AboutPage() {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg mt-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-blue-600">Sobre Nosotros</h2>
      <p className="text-gray-700 mb-4">
        Somos Malena Lopez y Pablo Peralta, dos desarrolladores frontend apasionados por la creación de experiencias web intuitivas y atractivas.
      </p>
      <p className="text-gray-700 mb-4">
        Durante el desarrollo de esta página, trabajamos de manera colaborativa, utilizando metodologías ágiles para asegurar un progreso constante y la entrega de un producto de alta calidad. Empezamos con la planificación y diseño, creando wireframes y maquetas para visualizar la estructura y el flujo de la aplicación.
      </p>
      <p className="text-gray-700 mb-4">
        La implementación técnica incluyó el uso de las siguientes tecnologías:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>React: Para construir la interfaz de usuario de manera eficiente con componentes reutilizables.</li>
        <li>Tailwind CSS: Para estilizar la aplicación con clases de utilidad que permiten un diseño responsive y moderno.</li>
        <li>React Router: Para manejar la navegación dentro de la aplicación, permitiendo una experiencia de usuario fluida y sin recargas.</li>
        <li>JavaScript ES6: Para escribir un código limpio y conciso, aprovechando las últimas características del lenguaje.</li>
        <li>HTML5 y CSS3: Para estructurar y estilizar el contenido de manera semántica y accesible.</li>
      </ul>
      <p className="text-gray-700 mb-4">
        Nuestra colaboración se centró en la comunicación constante y la revisión de código, asegurando que cada componente cumpliera con los estándares de calidad y funcionara correctamente. Estamos orgullosos del resultado y esperamos que disfrutes explorando nuestra página tanto como nosotros disfrutamos creándola.
      </p>
      <p className="text-gray-700">
        Gracias por visitarnos,
      </p>
      <p className="text-gray-700 font-semibold">Malena Lopez y Pablo Peralta</p>
    </div>
  );
}

export default AboutPage;
