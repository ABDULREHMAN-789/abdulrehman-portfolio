import { education, experience } from "@/types/main"
import { useState } from "react"
import SectionWrapper from "../SectionWrapper"
import ExperienceCard from "./ExperienceCard"
import { experiences as localExperiences } from "@/utils/data/experience"
import { educations as localEducations } from "@/utils/data/education"

interface Props {
    experienceData: experience[]
    educationData: education[]
}

const Experiences = ({ experienceData, educationData }: Props) => {

    const [show, setShow] = useState("Experience")

    const experiences = (experienceData && experienceData.length > 0 ? experienceData : localExperiences) as experience[];
    const educations = (educationData && educationData.length > 0 ? educationData : localEducations) as education[];

    const activeList = show === "Experience" ? experiences : educations;

    return (
        <SectionWrapper id="experience" className="min-h-screen">
            <h2 className="text-4xl text-center">Experience</h2>

            <div className="w-fit mx-auto mt-6 p-1.5 md:p-2 bg-white dark:bg-grey-800 rounded-lg flex gap-2 items-center border border-gray-100 dark:border-grey-700/50 shadow-sm">
                {['Experience', 'Education'].map((e, i) => (
                    <button
                        key={i}
                        onClick={() => setShow(e)}
                        className={`py-2 px-4 rounded-md font-medium text-sm md:text-base transition-colors ${
                            show === e
                                ? 'bg-violet-600 text-white shadow-sm'
                                : 'hover:bg-gray-100 hover:dark:bg-grey-900 text-gray-700 dark:text-gray-300'
                        }`}
                    >
                        {e}
                    </button>
                ))}
            </div>

            <div className="lg:container sm:mx-4 lg:mx-auto lg:w-5/6 2xl:w-3/4">
                <div className="relative wrap overflow-hidden p-4 md:py-10 md:px-0">
                    <div className="left-6 md:left-1/2 absolute border-opacity-20 border-gray-400 dark:border-grey-800 h-full border"></div>

                    {activeList.map((e, i) => (
                        // @ts-ignore
                        <ExperienceCard key={e.id || i} {...e} index={i} />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Experiences