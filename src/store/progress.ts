import { defineStore } from 'pinia';
import type { YearlyData, ProgressItem, Update, ProgressData } from '../types';

// Initial static data (updated with 2025 articles)
const initialYears: YearlyData[] = [
  {
    year: 2022,
    items: [
      { total: 10, completed: 4, title: 'Talks', category: 'Talks' },
      {
        total: 10,
        completed: 2,
        title: 'Completed\nProjects',
        category: 'Projects',
      },
      { total: 10, completed: 0, title: 'Articles', category: 'Articles' },
    ],
    updates: [
      {
        date: 'April 1, 2022',
        text: 'Created a list of talks on',
        category: 'Talks',
        year: 2022,
        link: { url: 'https://sessionize.com/Nerajno', text: 'Sessionize' },
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
        link: { url: 'https://www.MagnoliaJS.com/', text: 'MagnoliaJS' },
      },
      {
        date: 'July 3, 2022',
        text: 'Talk accepted to',
        category: 'Talks',
        year: 2022,
        link: { url: 'https://www.refactr.tech/', text: 'Refactr' },
      },
      {
        date: 'July 30, 2022',
        text: 'Talk accepted to',
        category: 'Talks',
        year: 2022,
        link: { url: 'https://www.atldevcon.com/', text: 'AtlDevCon 2022' },
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
        link: { url: 'https://www.meetup.com/atlantajug/', text: 'ATLJUG' },
      },
      {
        date: '2022',
        text: 'Revised my',
        category: 'Projects',
        year: 2022,
        link: { url: 'https://developindvlpr.com/', text: 'portfolio' },
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
        link: { url: 'https://theburble.netlify.app/', text: 'Burble' },
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
      { total: 10, completed: 3, title: 'Talks', category: 'Talks' },
      { total: 10, completed: 3, title: 'Projects', category: 'Projects' },
      { total: 10, completed: 4, title: 'Articles', category: 'Articles' },
    ],
    updates: [
      {
        date: 'Jan 15, 2023',
        text: 'Started planning talks for',
        category: 'Talks',
        year: 2023,
        link: { url: '#', text: '2023 conference season' },
      },
      {
        date: 'Feb 20, 2023',
        text: 'Published article on',
        category: 'Articles',
        year: 2023,
        link: { url: '#', text: 'Vue 3 Composition API' },
      },
    ],
  },
  {
    year: 2024,
    items: [
      { total: 10, completed: 0, title: 'Talks', category: 'Talks' },
      { total: 10, completed: 0, title: 'Projects', category: 'Projects' },
      { total: 10, completed: 0, title: 'Articles', category: 'Articles' },
    ],
    updates: [
      {
        date: 'Jan 15, 2024',
        text: 'Started planning talks for',
        category: 'Talks',
        year: 2024,
        link: { url: '#', text: '2024 conference season' },
      },
    ],
  },
  {
    year: 2025,
    items: [
      { total: 10, completed: 5, title: 'Talks', category: 'Talks' },
      { total: 10, completed: 2, title: 'Projects', category: 'Projects' },
      { total: 10, completed: 6, title: 'Articles', category: 'Articles' },
    ],
    updates: [
      // TALKS - Already listed
      {
        date: 'April 29, 2025',
        text: "Social Goodness || Civic Hacking - What's in it for me?",
        category: 'Talks',
        year: 2025,
        link: {
          url: 'https://developingdvlpr.com/speaking',
          text: "Social Goodness || Civic Hacking - What's in it for me? || DevOps Days Atlanta 2025",
        },
      },
      {
        date: 'April 5, 2025',
        text: 'Skills to Bills: A Users Guide to Demonstrated Competency',
        category: 'Talks',
        year: 2025,
        link: {
          url: 'https://developingdvlpr.com/speaking',
          text: 'Skills to Bills: A Users Guide to Demonstrated Competency || Orlando Code Camp 2025',
        },
      },
      {
        date: 'March 6, 2025',
        text: 'How !To Be Mentored',
        category: 'Talks',
        year: 2025,
        link: {
          url: 'https://developingdvlpr.com/speaking',
          text: 'How !To Be Mentored || DevNexus 2025',
        },
      },
      {
        date: 'May 23, 2025',
        text: 'Back to Basics: Essential JavaScript Foundations for Modern Framework Development',
        category: 'Talks',
        year: 2025,
        link: {
          url: 'https://developingdvlpr.com/speaking',
          text: 'Back to Basics: Essential JavaScript Foundations for Modern Framework Development|| 200OK 2025',
        },
      },
      {
        date: 'August 28, 2025',
        text: 'Carolina Codes 2025: My First-Time Speaker Experience',
        category: 'Talks',
        year: 2025,
        link: {
          url: 'https://dev.to/nerajno/carolina-codes-2025-my-first-time-speaker-experience-89a',
          text: 'Carolina Codes 2025 Conference Speaker',
        },
      },
      
      // PROJECTS - Already listed
      {
        date: 'July 20, 2025',
        text: 'IsNerandoDoneYet ~ Status Tracker Of the Current Years Progress',
        category: 'Projects',
        year: 2025,
        link: {
          url: 'https://isnerandodoneyet.com/',
          text: 'IsNerandoDoneYet ~ Status Tracker Of the Current Years Progress',
        },
      },
      {
        date: 'July 12, 2025',
        text: 'DevelopingDvlpr ||  MVP of Current Portfolio',
        category: 'Projects',
        year: 2025,
        link: {
          url: 'https://developingdvlpr.com/',
          text: 'DevelopingDvlpr ||  MVP of Current Portfolio',
        },
      },
      
      // ARTICLES - New additions from blog
      {
        date: 'January 20, 2025',
        text: 'Published: Building with TypeScript: A Lego-Based Guide',
        category: 'Articles',
        year: 2025,
        link: {
          url: 'https://dev.to/nerajno/building-with-typescript-a-lego-based-guide-194k',
          text: 'Building with TypeScript: A Lego-Based Guide',
        },
      },
      {
        date: 'May 20, 2025',
        text: 'Published: 11 JavaScript Fundamentals for Vue Developers',
        category: 'Articles',
        year: 2025,
        link: {
          url: 'https://dev.to/nerajno/11-javascript-fundamentals-for-vue-developers-42a1',
          text: '11 JavaScript Fundamentals for Vue Developers',
        },
      },
      {
        date: 'August 15, 2025',
        text: 'Published: And It Was Written - An Introspective on the Importance of READMEs',
        category: 'Articles',
        year: 2025,
        link: {
          url: 'https://dev.to/nerajno/and-it-was-written-an-introspective-in-the-importance-of-readmes-ipp',
          text: 'And It Was Written: The Importance of READMEs',
        },
      },
      {
        date: 'August 28, 2025',
        text: 'Published: Carolina Codes 2025 - My First-Time Speaker Experience',
        category: 'Articles',
        year: 2025,
        link: {
          url: 'https://dev.to/nerajno/carolina-codes-2025-my-first-time-speaker-experience-89a',
          text: 'Carolina Codes 2025: My First-Time Speaker Experience',
        },
      },
      {
        date: 'September 2025',
        text: 'Published: Mastering D3.js for Interactive Data Visualization',
        category: 'Articles',
        year: 2025,
        link: {
          url: 'https://developingdvlpr.com/blog/why-d3js-enhancing-your-storytelling-technically',
          text: 'Mastering D3.js for Interactive Data Visualization',
        },
      },
      {
        date: 'September 2025',
        text: 'Published: How !To Be Mentored V2 - Building Resilient Tech Careers Through Strategic Mentorship',
        category: 'Articles',
        year: 2025,
        link: {
          url: 'https://developingdvlpr.com/blog/how-to-be-mentored-v2-building-resilient-tech-careers-through-strategic-mentorship',
          text: 'How !To Be Mentored V2: Building Resilient Tech Careers Through Strategic Mentorship',
        },
      },
    ],
  },
];

export const useProgressStore = defineStore('progress', {
  state: () => ({
    years: initialYears as YearlyData[],
  }),
  getters: {
    getYearData:
      (state) =>
      (year: number): YearlyData | undefined => {
        return state.years.find((y) => y.year === year);
      },
    calculateOverallProgress:
      (state) =>
      (year: number): number => {
        const yearData = state.years.find((y) => y.year === year);
        if (!yearData) return 0;
        const totalItems = yearData.items.reduce(
          (sum, item) => sum + item.total,
          0
        );
        const completedItems = yearData.items.reduce(
          (sum, item) => sum + item.completed,
          0
        );
        return totalItems > 0
          ? Math.round((completedItems / totalItems) * 100)
          : 0;
      },
    getCategoriesForYear:
      (state) =>
      (year: number): string[] => {
        const yearData = state.years.find((y) => y.year === year);
        if (!yearData) return [];
        return yearData.items.map((item) => item.category);
      },
    fetchProgressData: (state) => (): ProgressData => {
      // Get the current year or the most recent year with data
      const currentYear = new Date().getFullYear();
      const yearData =
        state.years.find((y) => y.year === currentYear) ||
        state.years.slice().sort((a, b) => b.year - a.year)[0];
      if (!yearData) {
        return { categories: [], updates: [] };
      }
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
    },
  },
  actions: {
    updateProgress(year: number, category: string, completed: number) {
      const yearData = this.years.find((y) => y.year === year);
      if (!yearData) return;
      const item = yearData.items.find((i) => i.category === category);
      if (item) {
        item.completed = Math.min(completed, item.total);
      }
    },
    // Add more actions as needed
  },
});