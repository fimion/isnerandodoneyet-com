export interface ProgressItem {
  total: number;
  completed: number;
  title: string;
  category: string;
}

export interface Update {
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
  updates: Update[];
}

export interface ThemeState {
  isDark: boolean;
  toggleTheme: () => void;
}

export interface FilterState {
  activeFilters: string[];
  toggleFilter: (category: string) => void;
}
