import styles from "./page.module.scss";
import { main } from "@/lib/main";
import { projects } from "@/lib/projects";
import { Language } from "@/lib/types";
import Hero from "@/components/Hero/hero";
import Header from "@/components/Header/header";
import ProjectCard from "@/components/ProjectCard/projectcard";
import Image from "next/image";

const Home = async ({ params }: { params: Promise<{ language: Language }> }) => {
    const { language } = await params;
    const { hero, showcase, about } = main[language];

    return (
        <main className={styles.main}>
            <Hero content={hero} language={language} />
            <div id="universe">
                <Header position="content" language={language} />
                <h2>{showcase.title}</h2>
                <section id="projects">
                    {projects.map(project => <ProjectCard key={project.slug} project={project} language={language} />)}
                </section>
                <h2>{about.title}</h2>
                <section id="about">
                    <div id="photos">
                        <div>
                            <Image src="/images/about/old.jpg" alt="" fill={true} sizes="50vw" />
                            <p>{about.captions.old} | 1999</p>
                        </div>
                        <div>
                            <Image src="/images/about/recent.jpg" alt="" fill={true} sizes="50vw" />
                            <p>{about.captions.recent} | 2025</p>
                        </div>
                    </div>
                    <div id="content">
                        {about.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Home;