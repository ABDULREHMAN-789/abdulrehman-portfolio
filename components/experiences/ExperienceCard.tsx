import { MdSchool, MdWork } from 'react-icons/md'
import { motion } from 'framer-motion';

interface ExperienceProps {
  index: number,
  company?: string,
  position?: string,
  title?: string,
  desc?: string[],
  institute?: string,
  institution?: string,
  degree?: string,
  duration?: string,
}

const Experience = ({ index, company, position, title, desc, institute, institution, degree, duration }: ExperienceProps) => {

  const orgName = company || institution || institute;
  const roleTitle = title || position || degree;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`mb-6 md:mb-8 flex md:justify-between items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse left-timeline' : 'right-timeline'}`}
    >
      <div className="order-1 md:w-5/12"></div>

      <span className="z-20 flex items-center order-1 justify-center w-6 h-6 md:w-9 md:h-9 bg-violet-200 rounded-full ring-4 md:ring-8 ring-white dark:ring-grey-800 dark:bg-violet-900">
        {company ? (
          <MdWork className="text-base md:text-xl text-violet-600 dark:text-violet-400" />
        ) : (
          <MdSchool className="text-base md:text-xl text-violet-600 dark:text-violet-400" />
        )}
      </span>

      <div className="order-1 rounded-lg w-full ml-3 md:ml-0 bg-white dark:bg-grey-800 md:w-5/12 p-3 md:px-4 md:py-4 shadow-sm hover:shadow-md transition-shadow">
        <h3 className="mb-2 font-medium text-lg md:text-xl">{orgName}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{roleTitle} {duration ? `| ${duration}` : ''}</p>
        {desc && desc.length > 0 && (
          <ul className="text-sm text-gray-400 mt-2 ml-4 list-disc">
            {desc.map((d, i) => (
              <li key={i} className='mb-0.5'>{d}</li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  )
}

export default Experience