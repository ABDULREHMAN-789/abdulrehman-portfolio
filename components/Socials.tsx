import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaCode, FaPhoneAlt } from 'react-icons/fa';
import { social } from '@/types/main';

const LeetCodeIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.535 5.992 5.992 0 0 0 3.321-.738l2.3-1.6a.6.6 0 1 0-.686-.983l-2.3 1.6a4.786 4.786 0 0 1-2.656.59 4.73 4.73 0 0 1-3.844-2.82 4.67 4.67 0 0 1-.28-.813 4.417 4.417 0 0 1-.05-1.888 4.218 4.218 0 0 1 .966-1.681L7.75 9.773 12.522 4.66a.18.18 0 0 1 .255 0l4.772 5.113a.6.6 0 1 0 .876-.818L13.653.438A1.37 1.37 0 0 0 12.692 0h.791zm2.97 10.74a.6.6 0 0 0-.424.176l-8.625 8.625a.6.6 0 1 0 .848.848l8.625-8.625a.6.6 0 0 0-.424-1.024zm-6.22 3.86a.6.6 0 0 0-.424.176l-3.25 3.25a.6.6 0 1 0 .848.848l3.25-3.25a.6.6 0 0 0-.424-1.024z"/>
    </svg>
);

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    FaLinkedin,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaPhone: FaPhoneAlt,
    FaPhoneAlt,
    SiLeetcode: LeetCodeIcon,
    FaLeetcode: LeetCodeIcon,
    leetcode: LeetCodeIcon,
    github: FaGithub,
    linkedin: FaLinkedin,
};

const getSocialIcon = (iconName: string) => {
    return iconMap[iconName] || FaCode;
};

const Socials = ({ socials }: { socials: social[] }) => {
    return (
        <section id='socials' className="fixed xl:bottom-4 xl:left-4 2xl:bottom-10 2xl:left-10 hidden lg:flex flex-col gap-3 z-20">
            {socials.map((s: social) => {
                const IconComponent = getSocialIcon(s.icon);
                return (
                    <Link href={s.link} target="_blank" rel="noreferrer" key={s.icon} title={s.name || s.icon} className="grid place-items-center p-3 hover:animate-bounce rounded-full bg-violet-700 text-white text-lg">
                        <IconComponent />
                    </Link>
                )
            })}
            <Link
                href="tel:+923090446608"
                title="Call: +92 309-0446608"
                className="grid place-items-center p-3 hover:animate-bounce rounded-full bg-violet-700 text-white text-lg"
            >
                <FaPhoneAlt size={18} />
            </Link>
        </section>
    )
}

export default Socials