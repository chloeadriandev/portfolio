import styles from "./page.module.scss";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import { Language, ProjectSlug, ProjectParams } from "@/lib/types";
import { main } from "@/lib/main";
import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<ProjectParams> }): Promise<Metadata> {
    const { language, slug } = await params;
    const project = projects.find(p => p.slug === slug) ?? notFound();

    return {
        title: project.title,
        description: project.copy[language].tagline,
        alternates: {
            languages: {
                en: `/en/project/${slug}`,
                fr: `/fr/project/${slug}`,
            }
        }
    };
}

const ProjectPage = async ({ params }: { params: Promise<{ language: Language, slug: ProjectSlug }> }) => {
    const { language, slug } = await params;
    const { skills } = main[language].showcase;

    const project = projects.find(project => project.slug === slug);
    if (!project) {
        notFound();
    }

    const { title, tags, images } = project;
    const { description, links } = project.copy[language];

    return (
        <main className={styles.project}>
            <Header language={language} position="content" />
            <Image
                src={`/images/${slug}/1.jpg`}
                priority={true}
                alt="" fill={true} sizes="100vw"
            />
            <section>
                <aside>
                    {Array(images - 1).fill("").map((image, index) =>
                        <Image
                            src={`/images/${slug}/${index + 2}.jpg`}
                            key={index}
                            alt="" fill={true} sizes="33vw"
                        />
                    )}
                </aside>
                <article>
                    <div>
                        <h2>{title}</h2>
                        <div id="tags" aria-label={skills}>
                            {tags.map(tag =>
                                <p key={tag}>{tag}</p>
                            )}
                        </div>
                        <div id="links">
                            {links.map(({ url, title }) =>
                                <Link href={url} key={url}>
                                    <span>{title}</span>
                                </Link>
                            )}
                        </div>
                        <div id="description">
                            {description.map((paragraph, index) =>
                                <p key={index}>{paragraph}</p>
                            )}
                        </div>
                    </div>
                </article>
            </section>
            <Footer language={language} />
        </main>
    )
}

export default ProjectPage;