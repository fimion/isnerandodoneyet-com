import { defineStore } from 'pinia';
import type { YearlyData, ProgressItem, Update, ProgressData } from '../types';

// Comprehensive update with all articles from blog and dev.to
const initialYears: YearlyData[] = [
  {
    year: 2019,
    items: [
      { total: 10, completed: 0, title: 'Talks', category: 'Talks' },
      { total: 10, completed: 0, title: 'Projects', category: 'Projects' },
      { total: 10, completed: 3, title: 'Articles', category: 'Articles' },
    ],
    updates: [
      {
        date: 'October 30, 2019',
        text: 'Published: Hackathons - A Junior Developer\'s Growth Tool',
        category: 'Articles',
        year: 2019,
        link: {
          url: 'https://dev.to/nerajno/hackathons-a-junior-developer-s-growth-tool-2d5k',
          text: 'Hackathons - A Junior Developer\'s Growth Tool'
        },
      },
      {
        date: 'October 30, 2019',
        text: 'Published: Sight beyond Sight - How Blind Software Engineers Make It Work',
        category: 'Articles',
        year: 2019,
        link: {
          url: 'https://dev.to/nerajno/sight-beyond-sight-how-blind-software-engineers-make-it-work-4lo0',
          text: 'Sight beyond Sight - How Blind Software Engineers Make It Work'
        },
      },
      {
        date: 'December 20, 2019',
        text: 'Published: My #2Cents on How To Build A Beginner Friendly Developer Community',
        category: 'Articles',
        year: 2019,
        link: {
          url: 'https://dev.to/nerajno/my-2cents-on-how-to-build-a-beginner-friendly-developer-community-fk',
          text: 'My #2Cents on How To Build A Beginner Friendly Developer Community'
        },
      },
    ],
  },
  {
    year: 2020,
    items: [
      { total: 10, completed: 0, title: 'Talks', category: 'Talks' },
      { total: 10, completed: 0, title: 'Projects', category: 'Projects' },
      { total: 10, completed: 1, title: 'Articles', category: 'Articles' },
    ],
    updates: [
      {
        date: '2020',
        text: 'Published: Writing The Needed ReadMe',
        category: 'Articles',
        year: 2020,
        link: {
          url: 'https://dev.to/nerajno/writing-the-needed-readme-36l2',
          text: 'Writing The Needed ReadMe'
        },
      },
    ],
  },
  {
    year: 2021,
    items: [
      { total: 10, completed: 0, title: 'Talks', category: 'Talks' },
      { total: 10, completed: 0, title: 'Projects', category: 'Projects' },
      { total: 10, completed: 2, title: 'Articles', category: 'Articles' },
    ],
    updates: [
      {
        date: '2021',
        text: 'Published: 6 Strategies Learned from 6 months of Job Hunting',
        category: 'Articles',
        year: 2021,
        link: {
          url: 'https://dev.to/nerajno/6-strategies-learnt-from-6-months-of-job-hunting-14hn',
          text: '6 Strategies Learned from 6 months of Job Hunting'
        },
      },
      {
        date: '2021',
        text: 'Published: My Takeaways From Sit-Downs with Senior Devs',
        category: 'Articles',
        year: 2021,
        link: {
          url: 'https://dev.to/nerajno/my-takeaways-from-sit-downs-with-senior-devs-1c18',
          text: 'My Takeaways From Sit-Downs with Senior Devs'
        },
      },
    ],
  },
  {
    year: 2022,
    items: [
      { total: 10, completed: 10, title: 'Talks', category: 'Talks' },
      { total: 10, completed: 2, title: 'Completed\nProjects', category: 'Projects' },
      { total: 10, completed: 1, title: 'Articles', category: 'Articles' },
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
        text: 'Spoke at MagnoliaJS and AtlDevCon 2022 in September 11-17, 2022.',
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
        date: 'Nov 9, 2022',
        text: 'Gave my talk on Open-Sourced Learning at ConnectTech2022',
        category: 'Talks',
        year: 2022,
        link: {
          url: 'https://twitter.com/nerajno/status/1591142693820067840?s=20&t=wbDw7NqFSwXBSTc6U6ldYg',
          text: 'Open-Sourced Learning',
        },
      },
      {
        date: 'Dec 1, 2022',
        text: 'Gave a lighting talk on How Not !To Be Mentored at Software Crafters Atlanta',
        category: 'Talks',
        year: 2022,
        link: {
          url: 'https://www.meetup.com/software-craftsmanship-atlanta/events/cbtsxsydcqbcb/',
          text: 'How Not !To Be Mentored',
        },
      },
      {
        date: '2022',
        text: 'Revised my portfolio to its most current version',
        category: 'Projects',
        year: 2022,
        link: { url: 'https://developindvlpr.com/', text: 'portfolio' },
      },
      {
        date: 'Dec 2, 2022',
        text: 'Completed V1 of Burble',
        category: 'Projects',
        year: 2022,
        link: { url: 'https://theburble.netlify.app/', text: 'Burble' },
      },
      {
        date: 'Nov 27, 2022',
        text: 'Published: Now What - How To Keep Learning after Landing the 1st Tech Job',
        category: 'Articles',
        year: 2022,
        link: {
          url: 'https://dev.to/nerajno/now-what-how-to-keep-learning-after-landing-the-1st-tech-job-3nhj',
          text: 'Now What - How To Keep Learning after Landing the 1st Tech Job',
        },
      },
    ],
  },
  {
    year: 2023,
    items: [
      { total: 10, completed: 3, title: 'Talks', category: 'Talks' },
      { total: 10, completed: 3, title: 'Projects', category: 'Projects' },
      { total: 10, completed: 5, title: 'Articles', category: 'Articles' },
    ],
    updates: [
      {
        date: 'Jan 15, 2023',
        text: 'Started planning talks for 2023 conference season',
        category: 'Talks',
        year: 2023,
      },
      {
        date: '2023',
        text: 'Published: So....This is your 1st Tech Conference : #AttendeeEdition',
        category: 'Articles',
        year: 2023,
        link: {
          url: 'https://dev.to/nerajno/so-this-is-your-1st-tech-conference-attendeeedition',
          text: 'So....This is your 1st Tech Conference : #AttendeeEdition'
        },
      },
      {
        date: '2023',
        text: 'Published: So ... This is Your 1st Tech Conference : #VolunteerEdition',
        category: 'Articles',
        year: 2023,
        link: {
          url: 'https://dev.to/nerajno/so-this-is-your-1st-tech-conference-volunteeredition',
          text: 'So ... This is Your 1st Tech Conference : #VolunteerEdition'
        },
      },
      {
        date: 'December 29, 2023',
        text: 'Published: Tech-nically Speaking: 30 Days In',
        category: 'Articles',
        year: 2023,
        link: {
          url: 'https://dev.to/nerajno/tech-nically-speaking-30-days-in-4i70',
          text: 'Tech-nically Speaking: 30 Days In'
        },
      },
      {
        date: '2023',
        text: 'Published: How !To Be Mentored (V1)',
        category: 'Articles',
        year: 2023,
        link: {
          url: 'https://dev.to/nerajno/how-to-be-mentored',
          text: 'How !To Be Mentored'
        },
      },
      {
        date: '2023',
        text: 'Published: Vue-elingual: Teaching Your App to Speak Multiple Languages',
        category: 'Articles',
        year: 2023,
        link: {
          url: 'https://developingdvlpr.com/blog/vue-elingual-teaching-your-app-to-speak-multiple-languages',
          text: 'Vue-elingual: Teaching Your App to Speak Multiple Languages'
        },
      },
    ],
  },
  {
    year: 2024,
    items: [
      { total: 10, completed: 0, title: 'Talks', category: 'Talks' },
      { total: 10, completed: 0, title: 'Projects', category: 'Projects' },
      { total: 10, completed: 3, title: 'Articles', category: 'Articles' },
    ],
    updates: [
      {
        date: 'October 29, 2024',
        text: 'Published: Developer Networking Tools : A Brief IRL Edition',
        category: 'Articles',
        year: 2024,
        link: {
          url: 'https://dev.to/nerajno/developer-networking-tools-a-brief-irl-edition-55dl',
          text: 'Developer Networking Tools : A Brief IRL Edition'
        },
      },
      {
        date: '2024',
        text: 'Published: 11 in 11: Concepts Learnt or Relearnt from Zero Day',
        category: 'Articles',
        year: 2024,
        link: {
          url: 'https://developingdvlpr.com/blog/11-in-11-concepts-learnt-or-relearnt-from-zero-day',
          text: '11 in 11: Concepts Learnt or Relearnt from Zero Day'
        },
      },
      {
        date: 'October 30, 2024',
        text: 'Re-published: Sight beyond Sight - How Blind Software Engineers Make It Work',
        category: 'Articles',
        year: 2024,
        link: {
          url: 'https://dev.to/nerajno/sight-beyond-sight-how-blind-software-engineers-make-it-work-4lo0',
          text: 'Sight beyond Sight - How Blind Software Engineers Make It Work'
        },
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
      // TALKS - 5 completed
      {
        date: 'March 6, 2025',
        text: 'How !To Be Mentored || DevNexus 2025',
        category: 'Talks',
        year: 2025,
        link: {
          url: 'https://developingdvlpr.com/speaking',
          text: 'How !To Be Mentored || DevNexus 2025',
        },
      },
      {
        date: 'April 5, 2025',
        text: 'Skills to Bills: A Users Guide to Demonstrated Competency || Orlando Code Camp 2025',
        category: 'Talks',
        year: 2025,
        link: {
          url: 'https://developingdvlpr.com/speaking',
          text: 'Skills to Bills: A Users Guide to Demonstrated Competency || Orlando Code Camp 2025',
        },
      },
      {
        date: 'April 29, 2025',
        text: "Social Goodness || Civic Hacking - What's in it for me? || DevOps Days Atlanta 2025",
        category: 'Talks',
        year: 2025,
        link: {
          url: 'https://developingdvlpr.com/speaking',
          text: "Social Goodness || Civic Hacking - What's in it for me? || DevOps Days Atlanta 2025",
        },
      },
      {
        date: 'May 23, 2025',
        text: 'Back to Basics: Essential JavaScript Foundations || 200OK 2025',
        category: 'Talks',
        year: 2025,
        link: {
          url: 'https://developingdvlpr.com/speaking',
          text: 'Back to Basics: Essential JavaScript Foundations for Modern Framework Development || 200OK 2025',
        },
      },
      {
        date: 'August 2025',
        text: 'Carolina Codes 2025 Conference Speaker',
        category: 'Talks',
        year: 2025,
        link: {
          url: 'https://dev.to/nerajno/carolina-codes-2025-my-first-time-speaker-experience-89a',
          text: 'Carolina Codes 2025 Conference',
        },
      },
      
      // PROJECTS - 2 completed
      {
        date: 'July 12, 2025',
        text: 'DevelopingDvlpr - MVP of Current Portfolio',
        category: 'Projects',
        year: 2025,
        link: {
          url: 'https://developingdvlpr.com/',
          text: 'DevelopingDvlpr Portfolio',
        },
      },
      {
        date: 'July 20, 2025',
        text: 'IsNerandoDoneYet - Status Tracker Of the Current Years Progress',
        category: 'Projects',
        year: 2025,
        link: {
          url: 'https://isnerandodoneyet.com/',
          text: 'IsNerandoDoneYet Progress Tracker',
        },
      },
      
      // ARTICLES - 6 completed
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