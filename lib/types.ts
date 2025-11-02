export type Language = "en" | "fr";

export type HeroContent = {
    title: string,
    tagline: string,
    cta: string
}

export type ProjectLink = {
    url: string,
    title: string
}

export type ProjectCopy = {
    tagline: string,
    description: string[],
    links: ProjectLink[]
}

export type Project = {
    title: string,
    slug: string,
    tags: string[],
    images: number,
    copy: {
        en: ProjectCopy,
        fr: ProjectCopy
    }
}