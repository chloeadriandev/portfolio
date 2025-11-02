import styles from "./page.module.scss";
import { home } from "@/lib/home";
import { projects } from "@/lib/projects";
import { Language } from "@/lib/types";
import Hero from "@/components/Hero/hero";
import Header from "@/components/Header/header";
import ProjectCard from "@/components/ProjectCard/projectcard";

const Home = async ({ params }: { params: Promise<{ language: Language }> }) => {
    const { language } = await params;
    const { hero } = home[language];

    return (
        <main className={styles.main}>
            <Hero content={hero} language={language} />
            <div id="universe">
                <Header position="content" language={language} />
                <h2>Projects</h2>
                <section id="projects">
                    {projects.map(project => <ProjectCard key={project.slug} project={project} language={language} />)}
                </section>
            </div>
        </main>
    )
}

export default Home;