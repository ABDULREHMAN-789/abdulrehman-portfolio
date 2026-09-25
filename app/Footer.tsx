import { social } from "@/types/main";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaCode, FaPhoneAlt } from 'react-icons/fa';

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
}

export default function Footer({ socials, name }: { socials: social[], name: string }) {

    const { theme } = useTheme()

    return (
        <footer className="w-full bg-white dark:bg-grey-800 text-gray-500 dark:text-gray-300">

            <div className="xl:max-w-6xl mx-auto md:mx-6 lg:mx-10 xl:mx-auto py-4 lg:py-6 flex flex-col-reverse md:flex-row gap-2 md:gap-0 justify-between items-center">

                <p className="text-sm mt-2 md:mt-0 font-medium">
                    Designed &amp; Developed by
                    <span className="text-violet-600 font-semibold"> {name}</span>
                </p>

                <div className="hidden xl:flex items-center gap-2">
                    <Link href={'https://nextjs.org'} target="_blank">
                        <Image alt="Next.js" width={45} height={45} src="/nextjs.svg" className={`${theme === 'dark' ? 'invert' : 'invert-0'} opacity-80 hover:opacity-100 transition-opacity`} />
                    </Link>
                    <p className="text-sm">X</p>
                    <Link href={'https://vercel.com'} target="_blank">
                        <Image alt="Tailwind CSS" width={52} height={52} src="/vercel.svg" className={`${theme === 'dark' ? 'invert' : 'invert-0'} opacity-80 hover:opacity-100 transition-opacity`} />
                    </Link>
                </div>

                {/* Social Links */}
                <div className="flex xl:hidden items-center gap-2">
                    {socials.map((s: social) => {
                        const IconComponent = getSocialIcon(s.icon);
                        return (
                            <Link href={s.link} target="_blank" rel="noreferrer" key={s.icon} title={s.name || s.icon} className="grid place-items-center p-3 rounded-full text-lg hover:bg-gray-100 hover:dark:bg-grey-900 transition-colors">
                                <IconComponent />
                            </Link>
                        )
                    })}
                    <Link href="tel:+923090446608" title="Call: +92 309-0446608" className="grid place-items-center p-3 rounded-full text-lg hover:bg-gray-100 hover:dark:bg-grey-900 transition-colors">
                        <FaPhoneAlt />
                    </Link>
                </div>

            </div>

        </footer>
    )
}