import { project } from "@/types/main"
import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaVideo } from "react-icons/fa"
import { BiLinkExternal } from "react-icons/bi"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } }
};

const Project = ({ name, image, category, techstack, tools, role, description, links, code, demo }: project) => {

    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const visitUrl = links?.visit || demo;
    const codeUrl = links?.code || code;
    const videoUrl = links?.video;

    const hasLinks = Boolean((visitUrl && visitUrl.trim()) || (codeUrl && codeUrl.trim()) || (videoUrl && videoUrl.trim()));

    return (
        <motion.div
            ref={ref}
            variants={cardVariants}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-col gap-2 bg-white dark:bg-grey-800 rounded-lg p-4 justify-between h-full">

            <div>
                <div className="relative group rounded-lg bg-violet-50 dark:bg-grey-900 overflow-hidden">
                    <Image
                        alt={name}
                        width={800}
                        height={500}
                        className="w-full h-48 object-cover object-center rounded-lg group-hover:scale-105 transition-transform duration-300"
                        src={image || "/herobgc.jpg"}
                    />
                    {hasLinks &&
                        <div className="absolute top-0 scale-x-0 group-hover:scale-100 transition-transform origin-left duration-200 ease-linear bg-gray-800 bg-opacity-60 w-full h-full rounded-lg flex items-center gap-4 justify-center">
                            {visitUrl?.trim() &&
                                <Link href={visitUrl} target="_blank" className="bg-white text-black p-2 rounded-lg hover:bg-black hover:text-white transition-all">
                                    <BiLinkExternal size={20} />
                                </Link>
                            }
                            {codeUrl?.trim() &&
                                <Link href={codeUrl} target="_blank" className="bg-white text-black p-2 rounded-lg hover:bg-black hover:text-white transition-all">
                                    <FaGithub size={20} />
                                </Link>
                            }
                            {videoUrl?.trim() &&
                                <Link href={videoUrl} target="_blank" className="bg-white text-black p-2 rounded-lg hover:bg-black hover:text-white transition-all">
                                    <FaVideo size={20} />
                                </Link>
                            }
                        </div>
                    }
                </div>

                <div className="my-3 flex flex-col gap-2">
                    <div className="flex items-start justify-between gap-2 flex-wrap">
                        <h3 className="text-xl font-semibold">{name}</h3>
                        {role && (
                            <span className="text-xs px-2.5 py-0.5 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 font-medium">
                                {role}
                            </span>
                        )}
                    </div>
                    {description && (
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>
            </div>

            <div className="pt-2 border-t border-gray-100 dark:border-grey-700/50 mt-auto">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                    <span className="font-semibold text-gray-700 dark:text-gray-200">Tools: </span>
                    {techstack || tools?.join(', ')}
                </p>
            </div>

        </motion.div>
    )
}

export default Project