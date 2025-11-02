import styles from "./projectcard.module.scss";
import Link from "next/link"
import Image from "next/image"
import { Language, Project } from "@/lib/types";

const ProjectCard = ({ project, language }: { project: Project, language: Language }) => {
    const { title, slug, tags } = project;
    const { tagline } = project.copy[language];
    const skillsUsed = language === "en" ? "Skills used" : "Compétences utilisées";

    return (
        <Link href={`/${language}/project/${slug}`} className={styles.project}>
            <Image src={`/images/${slug}/1.jpg`} alt="" fill={true} sizes="(max-width: 768px) 100vw, 33vw" />
            <div>
                <div>
                    <h3>{title}</h3>
                    <p id="tagline">{tagline}</p>
                    <p id="tags" aria-label={skillsUsed}>{tags.join(", ")}</p>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard;