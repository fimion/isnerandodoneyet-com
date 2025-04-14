import type {
  YearlyData,
  ProgressItem,
  Update,
  ProgressData,
} from '../types/index';

class ProgressService {
  private years: YearlyData[] = [
    {
      year: 2022,
      items: [
        {
          total: 7,
          completed: 4,
          title: 'Talks',
          category: 'Talks',
        },
        {
          total: 7,
          completed: 2,
          title: 'Completed\nProjects',
          category: 'Projects',
        },
        {
          total: 7,
          completed: 0,
          title: 'Articles',
          category: 'Articles',
        },
      ],
      updates: [
        {
          date: 'April 1, 2022',
          text: 'Created a list of talks on',
          category: 'Talks',
          year: 2022,
          link: {
            url: 'https://sessionize.com/Nerajno',
            text: 'Sessionize',
          },
        },
        {
          date: 'August 12, 2022',
          text: 'Updated a list of talks on',
          category: 'Talks',
          year: 2022,
          link: {
            url: 'https://www.papercall.io/speakers/45142',
            text: 'PaperCall',
          },
        },
        {
          date: 'April 28, 2022',
          text: 'Talk accepted to',
          category: 'Talks',
          year: 2022,
          link: {
            url: 'https://www.MagnoliaJS.com/',
            text: 'MagnoliaJS',
          },
        },
        {
          date: 'July 3, 2022',
          text: 'Talk accepted to',
          category: 'Talks',
          year: 2022,
          link: {
            url: 'https://www.refactr.tech/',
            text: 'Refactr',
          },
        },
        {
          date: 'July 30, 2022',
          text: 'Talk accepted to',
          category: 'Talks',
          year: 2022,
          link: {
            url: 'https://www.atldevcon.com/',
            text: 'AtlDevCon 2022',
          },
        },
        {
          date: 'Aug 13, 2022',
          text: 'Talk accepted to',
          category: 'Talks',
          year: 2022,
          link: {
            url: 'https://www.prairiedevcon.com/',
            text: 'Prairie Dev Con',
          },
        },
        {
          date: 'Sept 25, 2022',
          text: 'Spoke at MagnoliaJS, MagnoliaJS and AtlDevCon 2022 in the week of September 11-17, 2022.',
          category: 'Talks',
          year: 2022,
        },
        {
          date: 'Sept 25, 2022',
          text: 'Speaking at',
          category: 'Talks',
          year: 2022,
          link: {
            url: 'https://www.meetup.com/atlantajug/',
            text: 'ATLJUG',
          },
        },
        {
          date: '2022',
          text: 'Revised my',
          category: 'Projects',
          year: 2022,
          link: {
            url: 'https://developindvlpr.com/',
            text: 'portfolio',
          },
          additionalText: 'to its most current version.',
        },
        {
          date: 'Nov 9, 2022',
          text: 'Gave my talk on',
          category: 'Talks',
          year: 2022,
          link: {
            url: 'https://twitter.com/nerajno/status/1591142693820067840?s=20&t=wbDw7NqFSwXBSTc6U6ldYg',
            text: 'Open-Sourced Learning',
          },
          additionalText: 'at ConnectTech2022.',
        },
        {
          date: 'Dec 1, 2022',
          text: 'Gave a lighting talk on',
          category: 'Talks',
          year: 2022,
          link: {
            url: 'https://www.meetup.com/software-craftsmanship-atlanta/events/cbtsxsydcqbcb/',
            text: 'How Not !To Be Mentored',
          },
          additionalText: 'at Software Crafters Atlanta Meeting.',
        },
        {
          date: 'Dec 2, 2022',
          text: 'Completed V1 of',
          category: 'Projects',
          year: 2022,
          link: {
            url: 'https://theburble.netlify.app/',
            text: 'Burble',
          },
        },
        {
          date: 'Nov 27, 2022',
          text: 'Wrote',
          category: 'Articles',
          year: 2022,
          link: {
            url: 'https://dev.to/nerajno/now-what-how-to-keep-learning-after-landing-the-1st-tech-job-3nhj',
            text: 'Tips on How To Keep Learning after Landing the 1st Tech Job',
          },
        },
      ],
    },
    {
      year: 2023,
      items: [
        {
          total: 8,
          completed: 3,
          title: 'Talks',
          category: 'Talks',
        },
        {
          total: 5,
          completed: 3,
          title: 'Projects',
          category: 'Projects',
        },
        {
          total: 10,
          completed: 4,
          title: 'Articles',
          category: 'Articles',
        },
      ],
      updates: [
        {
          date: 'Jan 15, 2023',
          text: 'Started planning talks for',
          category: 'Talks',
          year: 2023,
          link: {
            url: '#',
            text: '2023 conference season',
          },
        },
        {
          date: 'Feb 20, 2023',
          text: 'Published article on',
          category: 'Articles',
          year: 2023,
          link: {
            url: '#',
            text: 'Vue 3 Composition API',
          },
        },
      ],
    },
    {
      year: 2024,
      items: [
        {
          total: 7,
          completed: 0,
          title: 'Talks',
          category: 'Talks',
        },
        {
          total: 7,
          completed: 0,
          title: 'Projects',
          category: 'Projects',
        },
        {
          total: 7,
          completed: 0,
          title: 'Articles',
          category: 'Articles',
        },
      ],
      updates: [
        {
          date: 'Jan 15, 2024',
          text: 'Started planning talks for',
          category: 'Talks',
          year: 2024,
          link: {
            url: '#',
            text: '2024 conference season',
          },
        },
      ],
    },
    {
      year: 2025,
      items: [
        {
          total: 10,
          completed: 3,
          title: 'Talks',
          category: 'Talks',
        },
        {
          total: 10,
          completed: 0,
          title: 'Projects',
          category: 'Projects',
        },
        {
          total: 10,
          completed: 0,
          title: 'Articles',
          category: 'Articles',
        },
      ],
      updates: [
        {
          date: 'April 5, 2025',
          text: 'Started planning talks for',
          category: 'Talks',
          year: 2025,
          link: {
            url: 'Need link to my website',
            text: '2025 conference season',
          },
        },
      ],
    },
  ];

  // Get data for a specific year
  getYearData(year: number): YearlyData | undefined {
    return this.years.find((y) => y.year === year);
  }

  // Calculate overall progress percentage for a specific year
  calculateOverallProgress(year: number): number {
    const yearData = this.getYearData(year);
    if (!yearData) return 0;

    const totalItems = yearData.items.reduce(
      (sum, item) => sum + item.total,
      0
    );
    const completedItems = yearData.items.reduce(
      (sum, item) => sum + item.completed,
      0
    );

    return totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
  }

  // Get all available years
  getAvailableYears(): number[] {
    return this.years.map((y) => y.year);
  }

  // Get all categories for a specific year
  getCategoriesForYear(year: number): string[] {
    const yearData = this.getYearData(year);
    if (!yearData) return ['All'];

    const categories = new Set<string>();
    categories.add('All');

    yearData.items.forEach((item) => {
      categories.add(item.category);
    });

    return Array.from(categories);
  }

  // Add a new progress update
  addUpdate(update: Update): void {
    const yearData = this.getYearData(update.year);
    if (yearData) {
      yearData.updates.push(update);
    }
  }

  // Update progress for a category
  updateProgress(year: number, category: string, completed: number): void {
    const yearData = this.getYearData(year);
    if (!yearData) return;

    const item = yearData.items.find((i) => i.category === category);
    if (item) {
      item.completed = Math.min(completed, item.total);
    }
  }

  // Fetch all progress data
  fetchProgressData(): ProgressData {
    // Get the current year or the most recent year with data
    const currentYear = new Date().getFullYear();
    const yearData =
      this.getYearData(currentYear) ||
      this.years.sort((a, b) => b.year - a.year)[0];

    if (!yearData) {
      return { categories: [], updates: [] };
    }

    // Format the data as expected by the HomePage component
    return {
      categories: yearData.items.map((item, index) => ({
        id: index + 1,
        ...item,
      })),
      updates: yearData.updates.map((update, index) => ({
        id: index + 1,
        ...update,
      })),
    };
  }
}

// Create and export the service instance
export const progressService = new ProgressService();

// Export the fetchProgressData function directly for components that need it
export const fetchProgressData = async (): Promise<ProgressData> => {
  return progressService.fetchProgressData();
};
