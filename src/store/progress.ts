import { defineStore } from 'pinia';
import type { YearlyData, ProgressItem, Update, ProgressData } from '../types';

// Comprehensive update with all articles from blog and dev.to
const initialYears: YearlyData[] = [
  // Template for 2026 - Ready for future updates
  /*{
    year: 2026,
    items: [
      { total: 10, completed: 0, title: 'Talks', category: 'Talks' },
      { total: 10, completed: 0, title: 'Articles', category: 'Articles' },
      { total: 10, completed: 0, title: 'Projects', category: 'Projects' },
      { total: 5, completed: 0, title: 'Mentorship', category: 'Mentorship' },
      { total: 5, completed: 0, title: 'Leadership', category: 'Leadership' },
    ],
    updates: [],
  },*/
  
  {
    year: 2025,
    items: [
      { total: 10, completed: 6, title: 'Talks', category: 'Talks' },
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
          url: 'https://devnexus.com/',
          text: 'DevNexus 2025',
        },
      },
      {
        date: 'April 5, 2025',
        text: 'Skills to Bills: A Users Guide to Demonstrated Competency || Orlando Code Camp 2025',
        category: 'Talks',
        year: 2025,
        link: {
          url: 'https://orlandocodecamp.com/',
          text: 'Orlando Code Camp 2025',
        },
      },
      {
        date: 'April 29, 2025',
        text: "Social Goodness || Civic Hacking - What's in it for me? || DevOps Days Atlanta 2025",
        category: 'Talks',
        year: 2025,
        link: {
          url: 'https://www.devopsdays.org/atlanta',
          text: 'DevOps Days Atlanta 2025',
        },
      },
      {
        date: 'May 23, 2025',
        text: 'Back to Basics: Essential JavaScript Foundations || 200OK 2025',
        category: 'Talks',
        year: 2025,
        link: {
          url: 'http://200ok.us',
          text: '200OK 2025',
        },
      },
      {
        date: 'August 2025',
        text: 'Carolina Codes 2025 Conference Speaker',
        category: 'Talks',
        year: 2025,
        link: {
          url: 'https://carolina.codes',
          text: 'Carolina Code Conference 2025',
        },
      },
      {
        date: 'September 2025',
        text: 'Speaking at Atlanta Developers\' Conference 2025',
        category: 'Talks',
        year: 2025,
        link: {
          url: 'https://www.atldevcon.com/',
          text: 'Atlanta Developers\' Conference 2025',
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
        date: 'January 2025',
        text: 'Published: Building with TypeScript: A Lego-Based Guide',
        category: 'Articles',
        year: 2025,
        link: {
          url: 'https://developingdvlpr.com/blog/building-with-typescript-a-lego-based-guide',
          text: 'Building with TypeScript: A Lego-Based Guide',
        },
      },
      {
        date: 'May 2025',
        text: 'Published: 11 JavaScript Fundamentals for Vue Developers',
        category: 'Articles',
        year: 2025,
        link: {
          url: 'https://developingdvlpr.com/blog/11-javascript-fundamentals-for-vue-developers',
          text: '11 JavaScript Fundamentals for Vue Developers',
        },
      },
      {
        date: 'August 2025',
        text: 'Published: And It Was Written - An Introspective on the Importance of READMEs',
        category: 'Articles',
        year: 2025,
        link: {
          url: 'https://developingdvlpr.com/blog/and-it-was-written',
          text: 'And It Was Written: An Introspective on the Importance of READMEs',
        },
      },
      {
        date: 'August 2025',
        text: 'Published: Carolina Codes 2025 - My First-Time Speaker Experience',
        category: 'Articles',
        year: 2025,
        link: {
          url: 'https://developingdvlpr.com/blog/carolina-codes-2025-my-first-time-speaker-experience',
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
  
  {
    year: 2024,
    items: [
      { total: 10, completed: 4, title: 'Talks', category: 'Talks' },
      { total: 10, completed: 0, title: 'Projects', category: 'Projects' },
      { total: 10, completed: 3, title: 'Articles', category: 'Articles' },
    ],
    updates: [
      // TALKS - 4 confirmed from Sessionize
      {
        date: 'February 2024',
        text: 'Speaking at DevNexus 2024',
        category: 'Talks',
        year: 2024,
        link: {
          url: 'https://devnexus.com/',
          text: 'DevNexus 2024'
        },
      },
      {
        date: 'March 2024',
        text: 'Speaking at Orlando Code Camp 2024',
        category: 'Talks',
        year: 2024,
        link: {
          url: 'https://orlandocodecamp.com/',
          text: 'Orlando Code Camp 2024'
        },
      },
      {
        date: 'September 2024',
        text: 'Speaking at Atlanta Developers\' Conference 2024',
        category: 'Talks',
        year: 2024,
        link: {
          url: 'https://www.atldevcon.com/',
          text: 'Atlanta Developers\' Conference 2024'
        },
      },
      {
        date: 'October 2024',
        text: 'Speaking at Connect.Tech 2024',
        category: 'Talks',
        year: 2024,
        link: {
          url: 'https://2024.connect.tech',
          text: 'Connect.Tech 2024'
        },
      },
      
      // PROJECTS - Need to verify from GitHub
      // TODO: Check GitHub repositories for 2024 projects
      
      // ARTICLES - 3 confirmed
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
        date: 'October 2024',
        text: 'Published: Developer Networking Tools : A Brief IRL Edition',
        category: 'Articles',
        year: 2024,
        link: {
          url: 'https://developingdvlpr.com/blog/developer-networking-tools-a-brief-irl-edition',
          text: 'Developer Networking Tools : A Brief IRL Edition'
        },
      },
      {
        date: 'October 2024',
        text: 'Re-published: Sight beyond Sight - How Blind Software Engineers Make It Work',
        category: 'Articles',
        year: 2024,
        link: {
          url: 'https://developingdvlpr.com/blog/sight-beyond-sight-how-blind-software-engineers-make-it-work',
          text: 'Sight beyond Sight - How Blind Software Engineers Make It Work'
        },
      },
    ],
  },
  
  {
    year: 2023,
    items: [
      { total: 10, completed: 2, title: 'Talks', category: 'Talks' },
      { total: 10, completed: 3, title: 'Projects', category: 'Projects' },
      { total: 10, completed: 5, title: 'Articles', category: 'Articles' },
    ],
    updates: [
      // TALKS - 2 confirmed from Sessionize
      {
        date: 'April 2023',
        text: 'Speaking at Atlanta Cloud Conference 2023',
        category: 'Talks',
        year: 2023,
        link: {
          url: 'https://atlcloudconf.com/',
          text: 'Atlanta Cloud Conference 2023'
        },
      },
      {
        date: 'March 2023',
        text: 'Speaking at DevNexus 2023',
        category: 'Talks',
        year: 2023,
        link: {
          url: 'https://devnexus.com/',
          text: 'DevNexus 2023'
        },
      },
      
      // PROJECTS - Need to verify
      // TODO: Add 3 projects from 2023
      
      // ARTICLES - 5 completed
      {
        date: '2023',
        text: 'Published: So....This is your 1st Tech Conference : #AttendeeEdition',
        category: 'Articles',
        year: 2023,
        link: {
          url: 'https://developingdvlpr.com/blog/so-this-is-your-1st-tech-conference-attendeeedition',
          text: 'So....This is your 1st Tech Conference : #AttendeeEdition'
        },
      },
      {
        date: '2023',
        text: 'Published: So ... This is Your 1st Tech Conference : #VolunteerEdition',
        category: 'Articles',
        year: 2023,
        link: {
          url: 'https://developingdvlpr.com/blog/so-this-is-your-1st-tech-conference-volunteeredition',
          text: 'So ... This is Your 1st Tech Conference : #VolunteerEdition'
        },
      },
      {
        date: 'December 2023',
        text: 'Published: Tech-nically Speaking: 30 Days In',
        category: 'Articles',
        year: 2023,
        link: {
          url: 'https://developingdvlpr.com/blog/tech-nically-speaking-30-days-in',
          text: 'Tech-nically Speaking: 30 Days In'
        },
      },
      {
        date: '2023',
        text: 'Published: How !To Be Mentored (V1)',
        category: 'Articles',
        year: 2023,
        link: {
          url: 'https://developingdvlpr.com/blog/how-to-be-mentored',
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
    year: 2022,
    items: [
      { total: 10, completed: 10, title: 'Talks', category: 'Talks' },
      { total: 10, completed: 2, title: 'Completed\nProjects', category: 'Projects' },
      { total: 10, completed: 1, title: 'Articles', category: 'Articles' },
    ],
    updates: [
      // TALKS - 10 completed
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
      
      // PROJECTS - 2 completed
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
      
      // ARTICLES - 1 completed
      {
        date: 'November 2022',
        text: 'Published: Now What - How To Keep Learning after Landing the 1st Tech Job',
        category: 'Articles',
        year: 2022,
        link: {
          url: 'https://developingdvlpr.com/blog/now-what-how-to-keep-learning-after-landing-the-1st-tech-job',
          text: 'Now What - How To Keep Learning after Landing the 1st Tech Job',
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
      // ARTICLES - 2 completed
      {
        date: '2021',
        text: 'Published: 6 Strategies Learned from 6 months of Job Hunting',
        category: 'Articles',
        year: 2021,
        link: {
          url: 'https://developingdvlpr.com/blog/6-strategies-learned-from-6-months-of-job-hunting',
          text: '6 Strategies Learned from 6 months of Job Hunting'
        },
      },
      {
        date: '2021',
        text: 'Published: My Takeaways From Sit-Downs with Senior Devs',
        category: 'Articles',
        year: 2021,
        link: {
          url: 'https://developingdvlpr.com/blog/my-takeaways-from-sit-downs-with-senior-devs',
          text: 'My Takeaways From Sit-Downs with Senior Devs'
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
      // ARTICLES - 1 completed
      {
        date: '2020',
        text: 'Published: Writing The Needed ReadMe',
        category: 'Articles',
        year: 2020,
        link: {
          url: 'https://developingdvlpr.com/blog/writing-the-needed-readme',
          text: 'Writing The Needed ReadMe'
        },
      },
    ],
  },
  
  {
    year: 2019,
    items: [
      { total: 10, completed: 0, title: 'Talks', category: 'Talks' },
      { total: 10, completed: 0, title: 'Projects', category: 'Projects' },
      { total: 10, completed: 3, title: 'Articles', category: 'Articles' },
    ],
    updates: [
      // ARTICLES - 3 completed
      {
        date: 'October 2019',
        text: 'Published: Hackathons - A Junior Developer\'s Growth Tool',
        category: 'Articles',
        year: 2019,
        link: {
          url: 'https://developingdvlpr.com/blog/hackathons-a-junior-developers-growth-tool',
          text: 'Hackathons - A Junior Developer\'s Growth Tool'
        },
      },
      {
        date: 'October 2019',
        text: 'Published: Sight beyond Sight - How Blind Software Engineers Make It Work',
        category: 'Articles',
        year: 2019,
        link: {
          url: 'https://developingdvlpr.com/blog/sight-beyond-sight-how-blind-software-engineers-make-it-work',
          text: 'Sight beyond Sight - How Blind Software Engineers Make It Work'
        },
      },
      {
        date: 'December 2019',
        text: 'Published: My #2Cents on How To Build A Beginner Friendly Developer Community',
        category: 'Articles',
        year: 2019,
        link: {
          url: 'https://developingdvlpr.com/blog/my-2cents-on-how-to-build-a-beginner-friendly-developer-community',
          text: 'My #2Cents on How To Build A Beginner Friendly Developer Community'
        },
      },
    ],
  },
];

// DATA VERIFICATION STATUS:
// ✅ Articles: All articles from 2019-2025 have been updated with links from developingdvlpr.com/blog
// ✅ 2025 Talks: 5 confirmed talks with dates and conferences
// ✅ 2025 Projects: 2 confirmed projects (DevelopingDvlpr portfolio and IsNerandoDoneYet)
// ✅ 2022: Complete data with 10 talks, 2 projects, and 1 article
// 
// ⚠️ NEEDS VERIFICATION:
// - 2024 Talks: Check Sessionize (https://sessionize.com/Nerajno) and PaperCall profiles
// - 2024 Projects: Check GitHub (https://github.com/Nerajno) for repositories
// - 2023 Talks: Need to add 2 more specific conference talks
// - 2023 Projects: Need to add 3 specific projects
// 
// RESOURCES FOR COMPLETING DATA:
// 1. Sessionize Profile: https://sessionize.com/Nerajno
// 2. PaperCall Profile: https://www.papercall.io/speakers/45142
// 3. GitHub Profile: https://github.com/Nerajno
// 4. Blog: https://developingdvlpr.com/blog/
// 5. Speaking Page: https://developingdvlpr.com/speaking
// 6. Twitter/X for conference announcements
// 7. Conference websites: MagnoliaJS, ConnectTech, Refactr, DevNexus, etc.

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