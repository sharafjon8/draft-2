'use client';

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Header from "@/app/layout/Header";
import Image from "next/image";

/* ================= TYPES ================= */

interface ServiceProject {
  title: string;
  description?: string;
  image?: string;
  video?: string;
}

interface Service {
  title: string;
  description: string;
  items: string[];
  examples: string[];
  projects?: ServiceProject[];
}

/* ========================================= */

export default function ServiceDetailClient({ service }: { service: Service }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <>
      <Header />

      <div
        className={`min-h-screen px-6 py-12 sm:mt-20 pt-20 transition-colors duration-300 ${
          isDark ? "bg-[#0f1729]" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h1
            className={`text-4xl font-bold mb-8 ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            {service.title}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LEFT — TEXT */}
            <div>
              <p
                className={`mb-8 text-lg ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {service.description}
              </p>

              <h2
                className={`text-2xl font-semibold mb-4 ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                Наши услуги
              </h2>

              <ul
                className={`list-disc list-inside mb-10 space-y-2 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {service.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h2
                className={`text-2xl font-semibold mb-4 ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                Примеры проектов
              </h2>

              <ul
                className={`list-disc list-inside space-y-2 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {service.examples.map((ex, idx) => (
                  <li key={idx}>{ex}</li>
                ))}
              </ul>
            </div>

            {/* RIGHT — PROJECTS */}
            <div className="space-y-6">
              {(service.projects ?? []).length === 0 && (
                <div className="text-gray-400">Проекты в разработке</div>
              )}

              {service.projects?.map((project, idx) => (
                <div
                  key={idx}
                  className={`relative rounded-2xl overflow-hidden border ${
                    isDark
                      ? "border-gray-700 bg-gray-900/50"
                      : "border-gray-300 bg-gray-50"
                  }`}
                >
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={500}
                      className="object-cover w-full h-56"
                    />
                  )}

                  {project.video && (
                    <video
                      src={project.video}
                      controls
                      className="w-full h-56 object-cover"
                    />
                  )}

                  <div className="p-4">
                    <h3
                      className={`font-semibold ${
                        isDark ? "text-white" : "text-black"
                      }`}
                    >
                      {project.title}
                    </h3>

                    {project.description && (
                      <p
                        className={`text-sm mt-1 ${
                          isDark ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {project.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
