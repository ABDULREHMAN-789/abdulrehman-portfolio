type skill = {
    name: string,
    image: string,
    category: string
}

type project = {
    id?: number,
    name: string,
    image?: string,
    techstack?: string,
    tools?: string[],
    role?: string,
    description?: string,
    category?: string,
    links?: {
        visit?: string,
        code?: string,
        video?: string
    },
    code?: string,
    demo?: string
}

type experience = {
    id?: number,
    company: string,
    position?: string,
    title?: string,
    startDate?: string,
    endDate?: string,
    duration?: string,
    desc?: string[]
}

type education = {
    id?: number,
    institute?: string,
    institution?: string,
    degree?: string,
    title?: string,
    startDate?: string,
    endDate?: string,
    duration?: string,
    desc?: string[]
}

type main = {
    name: string,
    titles: string[],
    heroImage: string,
    shortDesc: string,
    techStackImages: string[],
}

type about = {
    aboutImage: string,
    aboutImageCaption: string,
    title: string,
    location?: string,
    about: string,
    resumeUrl: string,
    callUrl: string
}

type social = {
    name?: string,
    icon: string,
    link: string
}

type data = {
    main: main,
    about: about,
    skills: skill[],
    projects: project[],
    experiences: experience[],
    educations: education[]
    socials: social[]
}

export type { data, main, about, skill, project, experience, education, social };