// src/types/index.ts

// Base interfaces for activities (talks, projects, articles)
export interface BaseActivity {
  id: string
  date: string
  title: string
  description: string
  createdAt: string
  updatedAt: string
}

export interface TalkActivity extends BaseActivity {
  type: 'talk'
  status: 'accepted' | 'proposed' | 'completed'
  event: string
  eventUrl?: string
  location?: string
}

export interface ProjectActivity extends BaseActivity {
  type: 'project'
  status: 'in-progress' | 'completed' | 'maintenance'
  projectUrl?: string
  githubUrl?: string
  technologies: string[]
}

export interface ArticleActivity extends BaseActivity {
  type: 'article'
  status: 'draft' | 'published' | 'updated'
  articleUrl?: string
  publication?: string
  tags: string[]
  readingTime?: number
}

export type Activity = TalkActivity | ProjectActivity | ArticleActivity

// Progress tracking interfaces
export interface ProgressItem {
  total: number;
  completed: number;
  title: string;
  category: string;
}

// Timeline update interface (different from Activity)
export interface TimelineUpdate {
  date: string;
  text: string;
  category: string;
  year: number;
  link?: {
    url: string;
    text: string;
  };
  additionalText?: string;
}

export interface YearlyData {
  year: number;
  items: ProgressItem[];
  updates: TimelineUpdate[];
}

export interface ProgressData {
  categories: Array<ProgressItem & { id: number }>;
  updates: Array<TimelineUpdate & { id: number }>;
}

// UI state interfaces
export interface ThemeState {
  isDark: boolean;
  toggleTheme: () => void;
}

export interface FilterState {
  activeFilters: string[];
  toggleFilter: (category: string) => void;
}

// If you need to combine activities with timeline updates
export interface CombinedData {
  activities: Array<Activity & { id: number }>;
  progress: ProgressData;
  timeline: Array<TimelineUpdate & { id: number }>;
}
