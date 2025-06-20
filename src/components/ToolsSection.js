import React from "react";

const ToolsSection = () => {
  return (
    <section className="w-full px-4 sm:px-8 py-12 bg-white items-center flex flex-col">
      <button className="bg-white text-black border border-brand font-inter font-medium text-[12px] leading-[16px] px-5 py-2 rounded-md hover:bg-gray-100 transition">
        Our Tech Stack
      </button>
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center my-10 leading-snug">
        We design the key pieces that shape{" "}
        <span className="text-[#FF5722]">
          how people <br />
          see your brand.
        </span>
      </h2>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 border rounded-xl p-6 sm:p-10 max-w-7xl mx-auto">
        {/* Column 1 */}
        <div className="md:pr-10 md:border-r border-gray-300">
          <h3 className="text-xs uppercase text-gray-700 font-medium mb-4">
            /01 Editor and AI Tools
          </h3>
          <ul className="space-y-3 text-xs text-gray-800">
            <li>🎨 Figma</li>
            <li>📱 Play</li>
            <li>🕹️ Rive</li>
            <li>✨ Lottielab</li>
            <li>
              🤖 ChatGPT{" "}
              <span className="text-gray-500">(thinking partner)</span>
            </li>
            <li>
              🧠 Claude{" "}
              <span className="text-gray-500">(thinking partner)</span>
            </li>
            <li>
              🎨 Midjourney{" "}
              <span className="text-gray-500">(art direction)</span>
            </li>
            <li>
              🌿 Flora Fauna{" "}
              <span className="text-gray-500">(art direction)</span>
            </li>
          </ul>
        </div>

        {/* HR separator on mobile */}
        <hr className="block md:hidden my-6 border-t border-gray-300" />

        {/* Column 2 */}
        <div className="md:px-10 md:border-r border-gray-300">
          <h3 className="text-xs uppercase text-gray-700 font-medium mb-4">
            /02 Product Development
          </h3>
          <ul className="space-y-3 text-xs text-gray-800">
            <li>🧱 Next JS</li>
            <li>📊 Tanstack</li>
            <li>⚛️ React</li>
            <li>🎨 Shadcn</li>
            <li>📦 Supabase</li>
            <li>🧬 Node</li>
            <li>📱 SwiftUI</li>
            <li>📱 React Native</li>
          </ul>
        </div>

        {/* HR separator on mobile */}
        <hr className="block md:hidden my-6 border-t border-gray-300" />

        {/* Column 3 */}
        <div className="md:pl-10">
          <h3 className="text-xs uppercase text-gray-700 font-medium mb-4">
            /03 Website Development
          </h3>
          <ul className="space-y-3 text-xs text-gray-800">
            <li>🎯 Framer</li>
            <li>🌐 Webflow</li>
            <li>🛒 Shopify</li>
            <li>⚛️ React</li>
            <li>🎨 Shadcn</li>
            <li>📦 Supabase</li>
            <li>🧬 Node</li>
            <li>🔧 Custom stack</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
