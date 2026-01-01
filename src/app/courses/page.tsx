'use client';

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { courses } from "../../data/courses";
import Header from "../layout/Header";
import Image from "next/image";
import { Clock } from "lucide-react";
import Link from "next/link";

const CATEGORY_MAP: Record<string, string> = {
    'basic': 'Основы',
    'frontend': 'Фронтенд',
    'backend': 'Бэкенд',
    'mobile': 'Мобильная разработка',
    'kids': 'Дети',
    'design': 'Дизайн',
    'flang': 'Иностранные языки',
};

export default function CoursesPage() {
    const { i18n } = useTranslation();
    const [activeCategory, setActiveCategory] = useState('all');
    const [showAll, setShowAll] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const categories = [
        { id: 'all', label: 'Все', labelTj: 'Ҳама' },
        { id: 'frontend', label: 'Фронтенд', labelTj: 'Фронтенд' },
        { id: 'basic', label: 'Основы', labelTj: 'Асосҳо' },
        { id: 'backend', label: 'Бэкенд', labelTj: 'Бэкенд' },
        { id: 'mobile', label: 'Мобильная разработка', labelTj: 'Таҳияи мобилӣ' },
        { id: 'kids', label: 'Дети', labelTj: 'Бачагон' },
        { id: 'design', label: 'Дизайн', labelTj: 'Дизайн' },
        { id: 'flang', label: 'Иностранные языки', labelTj: 'Забонҳои хориҷи' },
    ];

    const isRussian = i18n.language === 'ru' || i18n.language === 'ru-RU';

    let filteredCourses = courses;

    if (activeCategory !== 'all') {
        const categoryLabel = CATEGORY_MAP[activeCategory];
        filteredCourses = courses.filter(course => {
            return isRussian ? course.category === categoryLabel : course.categoryTj === CATEGORY_MAP[activeCategory];
        });
    }

    const displayedCourses = showAll ? filteredCourses : filteredCourses.slice(0, 6);

    if (!isClient) return null;

    return (
        <>
            <Header />
            <div className="min-h-screen bg-white dark:bg-[#0f1729] px-6 py-12 md:py-10 sm:mt-20 pt-20 transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-black dark:text-white mb-4 transition-colors duration-500">
                        {isRussian ? 'Курсы Академии' : 'Курсҳои Академия'}
                    </h1>
                    <p className="text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12 transition-colors duration-500">
                        {isRussian
                            ? 'Выберите свой путь обучения и развивайте навыки во Frontend, Backend, мобильной разработке или начните с нашей программы для детей'
                            : 'Роҳи ҳамми худро интихоб кунед ва малака дар Frontend, Backend, таҳияи мобилӣ яке аз барномаи мо барои бачагон оғоз кунед'
                        }
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map(category => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                                    activeCategory === category.id
                                        ? 'bg-black text-white dark:bg-white dark:text-black'
                                        : 'bg-transparent text-gray-700 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/10 border border-gray-300 dark:border-gray-600'
                                }`}
                            >
                                {isRussian ? category.label : category.labelTj}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {displayedCourses.map(course => (
                            <Link key={course.id} href={`/courses/${course.id}`} className="block">
                                <div
                                    className="group relative rounded-3xl overflow-hidden border-2 border-gray-300 dark:border-gray-700 hover:scale-[1.02] transition-all duration-300 cursor-pointer h-full bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
                                    style={{ borderColor: course.borderColor }}
                                >
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <h3 className="text-2xl font-bold text-black dark:text-white flex-1 transition-colors duration-500">
                                                {isRussian ? course.title : course.titleTj}
                                            </h3>
                                            <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gray-200 dark:bg-gray-700 flex-shrink-0 ml-2 transition-colors duration-500">
                                                <Image
                                                    src={course.icon}
                                                    alt={isRussian ? course.title : course.titleTj}
                                                    width={40}
                                                    height={40}
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>

                                        <p className="text-gray-700 dark:text-gray-300 text-sm mb-6 line-clamp-2 transition-colors duration-500">
                                            {isRussian ? course.description : course.descriptionTj}
                                        </p>

                                        <div className="flex items-center justify-between text-sm">
                                            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 transition-colors duration-500">
                                                <Clock size={16} />
                                                <span>{isRussian ? course.duration : course.durationTj}</span>
                                            </div>
                                            <span className="text-gray-500 dark:text-gray-400 transition-colors duration-500">
                                                {isRussian ? course.category : course.categoryTj}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {!showAll && filteredCourses.length > 6 && (
                        <div className="flex justify-center mt-12">
                            <button
                                onClick={() => setShowAll(true)}
                                className="px-8 py-3 bg-transparent border border-gray-600 text-black dark:text-white dark:border-gray-400 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-500 font-medium"
                            >
                                {isRussian ? `Показать все (${filteredCourses.length - 6} more)` : `Ҳама нишон диҳед (${filteredCourses.length - 6} more)`}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
