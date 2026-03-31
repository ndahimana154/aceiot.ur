import {
    Award,
    GraduationCap,
    Globe2,
    ShieldCheck,
    Clock3,
    Search,
} from 'lucide-react'

export const navLinks = [
    { label: 'Home', href: '/#home' },
    { label: 'Background', href: '/#background' },
    { label: 'Programs', href: '/#programs' },
    { label: 'Our Staff', href: '/#staff' },
    { label: 'Research', href: '/#research' },
    { label: 'News', href: '/news' },
]

export const programCards = [
    {
        title: 'Masters in ICT',
        description: 'Specialized training for next-generation IoT professionals and applied researchers.',
        icon: GraduationCap,
        accent: 'bg-sky-100 text-sky-800',
    },
    {
        title: 'PhD in ICT',
        description: 'Advanced research programs with an emphasis on innovation, policy, and sustainability.',
        icon: Award,
        accent: 'bg-amber-100 text-amber-900',
    },
    {
        title: 'Professional ICT Programs',
        description: 'Short courses and executive training for industry leaders and government partners.',
        icon: Globe2,
        accent: 'bg-slate-100 text-slate-900',
    },
]

export const graduateStats = [
    { label: 'PhD Graduates', value: 28, icon: Award, accent: 'from-cyan-500 to-sky-700' },
    { label: 'MSc Graduates', value: 142, icon: GraduationCap, accent: 'from-amber-400 to-yellow-500' },
    { label: 'Rwandan Graduates', value: 125, icon: ShieldCheck, accent: 'from-slate-500 to-slate-700' },
    { label: 'International Graduates', value: 45, icon: Globe2, accent: 'from-violet-500 to-fuchsia-600' },
    { label: 'Female Graduates', value: 78, icon: Clock3, accent: 'from-pink-500 to-rose-600' },
    { label: 'Male Graduates', value: 89, icon: Search, accent: 'from-sky-500 to-cyan-600' },
]

export const ongoingStats = [
    { label: 'PhD Students', value: 34, icon: Award, accent: 'from-cyan-500 to-sky-700' },
    { label: 'MSc Students', value: 186, icon: GraduationCap, accent: 'from-amber-400 to-yellow-500' },
    { label: 'Rwandan Students', value: 164, icon: ShieldCheck, accent: 'from-slate-500 to-slate-700' },
    { label: 'International Students', value: 56, icon: Globe2, accent: 'from-violet-500 to-fuchsia-600' },
    { label: 'Female Students', value: 102, icon: Clock3, accent: 'from-pink-500 to-rose-600' },
    { label: 'Male Students', value: 118, icon: Search, accent: 'from-sky-500 to-cyan-600' },
]

export const newsList = [
    {
        slug: 'smart-campus-launch',
        title: 'ACEIoT Launches Smart Campus Research Hub',
        summary: 'A new research hub is open to accelerate smart-city projects across Rwanda and the region.',
        category: 'Research',
        date: 'March 20, 2026',
    },
    {
        slug: 'world-bank-partnership',
        title: 'World Bank Supports Next Cohort of ICT Leaders',
        summary: 'A three-year project will expand PhD and MSc scholarships for high-impact innovation.',
        category: 'Partnership',
        date: 'February 15, 2026',
    },
    {
        slug: 'women-in-iot',
        title: 'Women in IoT: A New Fellowship Program',
        summary: 'The center launches a fellowship to boost female leadership in Internet-of-Things research.',
        category: 'Community',
        date: 'January 28, 2026',
    },
    {
        slug: 'research-symposium-2026',
        title: 'ACEIoT Research Symposium 2026',
        summary: 'Join the annual symposium showcasing student projects in AI, sensors, and data systems.',
        category: 'Events',
        date: 'April 10, 2026',
    },
]

export const eventList = [
    {
        title: 'IoT Systems Workshop',
        date: 'May 12, 2026',
        description: 'Hands-on sessions for sensor networks, edge analytics and smart infrastructure.',
    },
    {
        title: 'Youth Innovation Challenge',
        date: 'June 1, 2026',
        description: 'A hackathon for students building practical solutions in health, energy, and agriculture.',
    },
    {
        title: 'International Research Forum',
        date: 'July 22, 2026',
        description: 'Panels with global partners on digital transformation and academic collaboration.',
    },
]

export const announcements = [
    {
        title: 'Application deadline extended',
        note: 'Master and PhD applicants now have until 30 June 2026 to submit their portfolios.',
        important: true,
    },
    {
        title: 'Scholarship information session',
        note: 'Join the online briefing on World Bank funded scholarships for ACEIoT programs.',
    },
    {
        title: 'New lab equipment arrival',
        note: 'The new edge-computing lab is now available for student projects and faculty research.',
    },
]

export const partnerLogos = [
    {
        name: 'World Bank',
        logo: new URL('../assets/wrld.png', import.meta.url).href,
    },
    {
        name: 'UR',
        logo: new URL('../assets/urlogo2019.png', import.meta.url).href,
    },
    { name: 'African Union' },
    { name: 'IEEE' },
]

export const staffList = [
    {
        name: 'Dr. Amina Niyonzima',
        role: 'Director, Research & Innovation',
        focus: 'Smart systems, policy, mentorship',
    },
    {
        name: 'Prof. Jean-Claude Habimana',
        role: 'PhD Program Coordinator',
        focus: 'IoT architecture and sustainable deployment',
    },
    {
        name: 'Ms. Claudine Uwera',
        role: 'Program Manager',
        focus: 'Industry partnerships and student success',
    },
]

export const researchHighlights = [
    {
        title: 'Sensor networks for precision agriculture',
        summary: 'Low-cost IoT systems that improve yield, water use and community resilience.',
    },
    {
        title: 'Edge AI for health monitoring',
        summary: 'Distributed analytics for real-time patient and environmental sensing.',
    },
    {
        title: 'Urban infrastructure optimization',
        summary: 'Smart transport, energy, and security solutions powered by integrated data.',
    },
]
