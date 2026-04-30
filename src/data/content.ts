
import { GraduationCap, Award, Globe2, ShieldCheck, Clock3, Search } from 'lucide-react'


export const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Programs', href: '/programs' },
    { label: 'Admissions', href: '/admissions' },
    { label: 'Research', href: '/research' },
    { label: 'Staff', href: '/staff' },
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
        title: 'MSc in ICT',
        description: 'Postgraduate study in connected systems, data, and digital infrastructure.',
        imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80',
        icon: GraduationCap,
        accent: 'bg-[color:var(--ace-primary-soft)] text-[color:var(--ace-primary)]',
        subPrograms: [
            { name: 'IoT & Embedded Systems', duration: '2 years' },
            { name: 'Data Science & AI', duration: '2 years' },
            { name: 'Cybersecurity', duration: '2 years' },
            { name: 'Digital Infrastructure', duration: '2 years' },
        ],
        ctaText: 'View MSc programs'
    },
    {
        title: 'PhD in ICT',
        description: 'Research-led doctoral study focused on high-impact ICT challenges in the region.',
        imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
        icon: Award,
        accent: 'bg-[color:var(--ace-secondary-soft)] text-[color:var(--ace-secondary)]',
        subPrograms: [
            { name: 'Internet of Things', duration: '3-5 years' },
            { name: 'Artificial Intelligence', duration: '3-5 years' },
            { name: 'Wireless Communications', duration: '3-5 years' },
            { name: 'Sustainable ICT', duration: '3-5 years' },
        ],
        ctaText: 'View PhD tracks'
    },
    {
        title: 'Executive Courses',
        description: 'Short, focused programmes for working professionals and institutional partners.',
        imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=900&q=80',
        icon: Globe2,
        accent: 'bg-[rgba(19,49,63,0.08)] text-[color:var(--ace-text)]',
        subPrograms: [
            { name: 'IoT Architecture', duration: '8 weeks' },
            { name: 'Cloud Platforms', duration: '12 weeks' },
            { name: 'Leadership for ICT', duration: '4 days' },
            { name: 'Custom Cohorts', duration: 'Flexible' },
        ],
        ctaText: 'View short courses'
    }
]
export const graduateStats = [
    { label: 'PhD Graduates', value: 28, icon: Award, accent: 'linear-gradient(135deg, var(--ace-primary), var(--ace-primary-dark))' },
    { label: 'MSc Graduates', value: 142, icon: GraduationCap, accent: 'linear-gradient(135deg, var(--ace-secondary), #c6a663)' },
    { label: 'Rwandan Graduates', value: 125, icon: ShieldCheck, accent: 'linear-gradient(135deg, var(--ace-primary-dark), var(--ace-primary))' },
    { label: 'International Graduates', value: 45, icon: Globe2, accent: 'linear-gradient(135deg, #5b7280, #2e4958)' },
    { label: 'Female Graduates', value: 78, icon: Clock3, accent: 'linear-gradient(135deg, var(--ace-secondary), #dfbf79)' },
    { label: 'Male Graduates', value: 89, icon: Search, accent: 'linear-gradient(135deg, var(--ace-primary), #3d89a7)' },
]

export const ongoingStats = [
    { label: 'PhD Students', value: 34, icon: Award, accent: 'linear-gradient(135deg, var(--ace-primary), var(--ace-primary-dark))' },
    { label: 'MSc Students', value: 186, icon: GraduationCap, accent: 'linear-gradient(135deg, var(--ace-secondary), #c6a663)' },
    { label: 'Rwandan Students', value: 164, icon: ShieldCheck, accent: 'linear-gradient(135deg, var(--ace-primary-dark), var(--ace-primary))' },
    { label: 'International Students', value: 56, icon: Globe2, accent: 'linear-gradient(135deg, #5b7280, #2e4958)' },
    { label: 'Female Students', value: 102, icon: Clock3, accent: 'linear-gradient(135deg, var(--ace-secondary), #dfbf79)' },
    { label: 'Male Students', value: 118, icon: Search, accent: 'linear-gradient(135deg, var(--ace-primary), #3d89a7)' },
]

export const newsList = [
    {
        slug: 'graduate-research-call',
        title: 'Graduate research call opens for the next intake',
        summary: 'Applicants can now submit proposals in intelligent systems, networks, and digital services.',
        category: 'Research',
        date: 'April 18, 2026',
        image: '../assets/nnn.jpg',
    },
    {
        slug: 'industry-series-launch',
        title: 'Industry Connect series starts this term',
        summary: 'A new programme links postgraduate study with public-sector and industry practice.',
        category: 'Partnership',
        date: 'April 2, 2026',
    },
    {
        slug: 'research-symposium-2026',
        title: 'Research symposium to showcase student work',
        summary: 'The annual symposium will feature short presentations, demos, and partner sessions.',
        category: 'Events',
        date: 'March 21, 2026',
    },
]

export const eventList = [
    {
        title: 'Graduate research clinic',
        date: 'May 12, 2026',
        description: 'A short advisory session for MSc and PhD applicants preparing proposals.',
    },
    {
        title: 'Industry Connect seminar',
        date: 'June 1, 2026',
        description: 'Guest speakers discuss digital infrastructure, public systems, and applied research.',
    },
    {
        title: 'ACEIoT annual symposium',
        date: 'July 22, 2026',
        description: 'A concise programme of student papers, prototypes, and research networking.',
    },
]

export const announcements = [
    {
        title: 'Applications close on 30 June 2026',
        note: 'MSc and PhD applicants should submit transcripts, references, and a short statement of interest.',
        important: true,
    },
    {
        title: 'Scholarship briefing scheduled for 16 May',
        note: 'An online session will outline available funding routes and the required application documents.',
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
        role: 'Director, Research and Innovation',
        focus: 'Applied systems research and postgraduate supervision.',
    },
    {
        name: 'Prof. Jean-Claude Habimana',
        role: 'PhD Program Coordinator',
        focus: 'Doctoral pathways, research quality, and academic advising.',
    },
    {
        name: 'Ms. Claudine Uwera',
        role: 'Program Manager',
        focus: 'Admissions coordination, partnerships, and student support.',
    },
]

export const researchHighlights = [
    {
        title: 'Connected agriculture systems',
        summary: 'Practical sensing tools for water use, crop monitoring, and resilient field operations.',
    },
    {
        title: 'Edge intelligence for health services',
        summary: 'Distributed models for monitoring, triage support, and reliable local data processing.',
    },
    {
        title: 'Digital infrastructure and public systems',
        summary: 'Research on networks, service delivery, and intelligent public infrastructure.',
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
