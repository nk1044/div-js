import React from 'react';

const Item2 = () => {
  return (
    <div className="p-6 bg-neutral-100 text-neutral-700">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Item 2 - Detailed Sections
      </h1>

      {/* Section for Subitem1 */}
      <section
        id="subitem1"
        className="min-h-screen flex flex-col justify-center items-center bg-neutral-200 text-neutral-700 p-10 mb-16"
      >
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-neutral-800">
            Subitem 1
          </h2>
          <p className="mt-4 leading-relaxed">
            This is the content for Subitem 1. Here, you can describe details in-depth,
            giving more context to the section. The layout and ample whitespace ensure a smooth
            reading experience.
          </p>
        </div>
      </section>

      {/* Section for Subitem2 */}
      <section
        id="subitem2"
        className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-neutral-300 to-neutral-200 p-10"
      >
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-neutral-800">
            Subitem 2
          </h2>
          <p className="mt-4 leading-relaxed">
            This is the content for Subitem 2. Enjoy a smooth scrolling navigation experience
            through sections with ample space and a minimal design.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Item2;
