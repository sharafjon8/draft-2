'use client';

import { services } from "@/data/sevices";
import Header from "../layout/Header";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ServicesClient() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Проверяем текущую тему в localStorage или системе
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen px-6 py-12 sm:mt-20 pt-20 bg-white dark:bg-[#0f1729] transition-colors duration-500">
        <div className="max-w-7xl mx-auto">


          <h1 className="text-4xl md:text-5xl font-bold text-center text-black dark:text-white mb-4">
            Услуги – IT Академия JNR Tech
          </h1>
          <p className="text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            IT Академия JNR Tech в Бохтаре – обучение и сертификация IT-специалистов. Индивидуальные и групповые решения проблем
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link key={service.id} href={`/services/${service.id}`}>
                <div
                  className="group relative rounded-3xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:scale-[1.03] transition-all duration-300 cursor-pointer h-full bg-gray-50 dark:bg-gray-900"
                  style={{ borderColor: service.borderColor }}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-black dark:text-white">{service.title}</h3>
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                        <Image src={service.icon} alt={service.title} width={36} height={36} />
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{service.description}</p>
                    <ul className="text-gray-500 dark:text-gray-400 text-sm space-y-1">
                      {service.items.slice(0, 3).map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
