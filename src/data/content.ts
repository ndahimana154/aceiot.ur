
import { GraduationCap, Award, Globe2, ShieldCheck, Clock3, Search } from 'lucide-react'


export const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Programs', href: '/programs' },
    { label: 'Admissions', href: '/admissions' },
    { label: 'Research', href: '/research' },
    { label: 'Our Community', href: '/faculty' },
    { label: 'News', href: '/news' },
    { label: 'Contact', href: '/contact' },
]

export const secondaryLinks = [
    { label: 'Community', href: '/community' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Background', href: '/background' },
    { label: 'Labs', href: '/labs' },
]

// data/programs.ts

export const programCards = [
    {
        title: 'Masters in ICT',
        description: 'Specialized training for next-generation IoT professionals and applied researchers.',
        imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80',
        icon: GraduationCap,
        accent: 'bg-gradient-to-br from-sky-50 to-sky-100 text-sky-700',
        subPrograms: [
            { name: 'IoT & Embedded Systems', duration: '2 years' },
            { name: 'Data Science & AI', duration: '2 years' },
            { name: 'Cybersecurity', duration: '2 years' },
            { name: 'Cloud & Edge Computing', duration: '2 years' },
        ],
        ctaText: 'View master programs'
    },
    {
        title: 'PhD in ICT',
        description: 'Advanced research programs with an emphasis on innovation, policy, and sustainability.',
        imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
        icon: Award,
        accent: 'bg-gradient-to-br from-amber-50 to-amber-100 text-amber-700',
        subPrograms: [
            { name: 'Internet of Things', duration: '3-5 years' },
            { name: 'Artificial Intelligence', duration: '3-5 years' },
            { name: 'Wireless Communications', duration: '3-5 years' },
            { name: 'Green ICT', duration: '3-5 years' },
        ],
        ctaText: 'View PhD tracks'
    },
    {
        title: 'Professional ICT Programs',
        description: 'Short courses and executive training for industry leaders and government partners.',
        imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=900&q=80',
        icon: Globe2,
        accent: 'bg-gradient-to-br from-indigo-50 to-indigo-100 text-indigo-700',
        subPrograms: [
            { name: 'IoT Architecture', duration: '8 weeks' },
            { name: 'Cloud Certification', duration: '12 weeks' },
            { name: 'Executive Leadership', duration: '4 days' },
            { name: 'Custom Enterprise Training', duration: 'Flexible' },
        ],
        ctaText: 'View professional programs'
    }
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
        image: '../assets/nnn.jpg',
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

export const researchStats = [
    { year: '2021', publications: 45, grants: 12, patents: 3 },
    { year: '2022', publications: 67, grants: 18, patents: 7 },
    { year: '2023', publications: 89, grants: 24, patents: 12 },
    { year: '2024', publications: 112, grants: 31, patents: 18 },
    { year: '2025', publications: 134, grants: 38, patents: 25 },
]

export const testimonials = [
    {
        name: 'Dr. Sarah Johnson',
        role: 'PhD Graduate 2024',
        company: 'Research Scientist at MIT',
        quote: 'The ACEIoT program equipped me with cutting-edge skills in IoT systems. The hands-on research experience and mentorship were invaluable for my career.',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    },
    {
        name: 'Michael Nkurunziza',
        role: 'MSc Graduate 2025',
        company: 'IoT Solutions Lead at Kigali Tech Hub',
        quote: 'The interdisciplinary approach and real-world projects prepared me perfectly for industry challenges. I\'m proud to contribute to Rwanda\'s tech ecosystem.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    },
    {
        name: 'Dr. Amina Hassan',
        role: 'Industry Partner',
        company: 'Director of Innovation at African Union',
        quote: 'ACEIoT\'s research outputs have directly informed our continental digital transformation strategy. Their work on smart cities is groundbreaking.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    },
]

export const labImages = [
    {
        url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
        alt: 'IoT Sensors Lab',
        title: 'Advanced Sensors Laboratory',
        description: 'State-of-the-art sensor testing and calibration facility'
    },
    {
        url: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=600&fit=crop',
        alt: 'Edge Computing Lab',
        title: 'Edge Computing & AI Lab',
        description: 'High-performance computing for IoT data processing'
    },
    {
        url: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop',
        alt: 'Wireless Networks Lab',
        title: 'Wireless Networks Laboratory',
        description: 'Research in 5G, LoRa, and satellite communications'
    },
    {
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        alt: 'Smart Systems Lab',
        title: 'Smart Systems Integration Lab',
        description: 'Prototyping and testing of complete IoT solutions'
    },
]

export const galleryItems = [
    {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
        alt: 'Student Research Presentation',
        title: 'Research Symposium 2025',
        description: 'Students presenting their IoT research projects'
    },
    {
        type: 'video',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
        title: 'ACEIoT Lab Tour',
        description: 'Virtual tour of our state-of-the-art facilities'
    },
    {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
        alt: 'Industry Partnership Event',
        title: 'World Bank Partnership Signing',
        description: 'Official launch of our collaboration program'
    },
    {
        type: 'video',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop',
        title: 'Student Innovation Showcase',
        description: 'Highlights from our annual innovation competition'
    },
    {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop',
        alt: 'Field Research',
        title: 'Agricultural IoT Deployment',
        description: 'Field testing of precision agriculture sensors'
    },
    {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop',
        alt: 'International Conference',
        title: 'Global IoT Summit',
        description: 'ACEIoT researchers at international conference'
    },
]
