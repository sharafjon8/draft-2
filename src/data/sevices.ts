// export const services = [
//     {
//         "id": 1,
//         "title": "Разработка телеграмм ботов",
//         "description": "Создание умных и функциональных Telegram-ботов для автоматизации задач и общения с клиентами.",
//     },
//     {
//         "id": 2,
//         "title": "Разработка мобильных приложений",
//         "description": "Проектирование и разработка приложений для iOS и Android с удобным и современным интерфейсом.",
//     },
//     {
//         "id": 3,
//         "title": "Разработка вэб-сайтов/вэб-порталов",
//         "description": "Создание адаптивных сайтов и порталов с уникальным дизайном и удобным управлением контентом.",
//     },
//     {
//         "id": 4,
//         "title": "Автоматизация бизнеса (CRM системы)",
//         "description": "Внедрение CRM-систем для оптимизации продаж, управления клиентами и повышения эффективности бизнеса.",
//     },
//     {
//         "id": 5,
//         "title": "Настройка серверов (DevOps Engineering)",
//         "description": "Установка, настройка"
//     }
// ]

export const services = [
  {
    id: 'development',
    title: 'Разработка',
    description: 'Создание цифровых продуктов для бизнеса и стартапов',
    items: [
      'Мобильные приложения',
      'Веб-сайты',
      'Telegram-боты',
      'Автоматизация бизнес-процессов',
    ],
    examples: [
      'CRM система для учебного центра',
      'Telegram-бот для приема заявок',
      'Корпоративный сайт компании',
    ],
    projects: [
      {
        title: 'CRM система',
        image: '/images/crm.jpg',
        description: '',
        video: ''
      },
      {
        title: 'Telegram бот',
        image: '/images/telegram bot.jpg',
        description: '',
        video: ''
      },
    ],
    icon: '/images/mobile.png',
    // image: '/images/web-design.png',
    borderColor: '#3b82f6',
  },
  {
    id: 'design',
    title: 'Дизайн решений',
    description: 'Современный и продающий дизайн для бизнеса',
    items: [
      'Дизайн сайтов и приложений',
      'Графический дизайн',
      'Баннеры и реклама',
      'Брошюры и презентации',
      'Логотипы и фирменный стиль',
    ],
    examples: [
      'UI/UX для мобильного приложения',
      'Фирменный стиль IT компании',
      'Рекламные баннеры',
    ],
    projects: [
      {
        title: 'UI/UX мобильного приложения',
        image: '/images/ux ui.jpg',
        description: '',
        video: ''
      },
      {
        title: 'Фирменный стиль компании',
        image: '/images/design own.jpg',
        description: '',
        video: ''
      },
    ],
    icon: '/images/web-design.png',
    borderColor: '#ec4899',
  },
  {
    id: 'full-cycle',
    title: 'Комплексные проекты',
    description: 'Полный цикл разработки «под ключ»',
    items: [
      'От идеи до запуска',
      'Техническое проектирование',
      'Разработка и дизайн',
      'Поддержка и сопровождение',
    ],
    examples: [
      'EdTech платформа',
      'Онлайн-сервис бронирования',
      'Корпоративная система учета',
    ],
    projects: [
      {
        title: 'EdTech платформа',
        image: '/images/edtech.jpg',
        description: '',
        video: ''
      },
      {
        title: 'Онлайн-сервис бронирования',
        image: '/images/bron.jpg',

      },
    ],
    icon: '/images/task-management.png',
    borderColor: '#22c55e',
  },
];
