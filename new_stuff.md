nerando-progress-tracker/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── main.css                 # Tailwind CSS imports
│   ├── components/
│   │   ├── ProgressBar.vue          # Progress bar component
│   │   ├── ProgressCard.vue         # Card for displaying progress metrics
│   │   ├── ProgressUpdate.vue       # Component for displaying updates
│   │   ├── UpdateFilter.vue         # Filter for progress updates
│   │   ├── YearSummary.vue          # Year summary component
│   │   └── layout/
│   │       ├── AppHeader.vue        # Navigation header
│   │       ├── AppFooter.vue        # Footer component
│   │       └── MainLayout.vue       # Main layout wrapper
│   ├── composables/
│   │   ├── useLocalStorage.ts       # Local storage composable
│   │   └── useTheme.ts              # Theme management composable
│   ├── router/
│   │   └── index.ts                 # Vue Router configuration
│   ├── services/
│   │   └── progressService.ts       # Data service
│   ├── types/
│   │   └── index.ts                 # TypeScript type definitions
│   ├── views/
│   │   ├── HomePage.vue             # Home page
│   │   ├── YearPage.vue             # Year detail page
│   │   └── NotFoundPage.vue         # 404 page
│   ├── App.vue                      # Root component
│   └── main.ts                      # Entry point
├── index.html                       # HTML entry point
├── package.json                     # Project dependencies
├── tsconfig.json                    # TypeScript configuration
├── tailwind.config.js               # Tailwind CSS configuration
├── postcss.config.js                # PostCSS configuration
├── vite.config.ts                   # Vite configuration
└── README.md                        # Project documentation
