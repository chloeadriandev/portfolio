import styles from "./hero.module.scss";
import Link from "next/link";
import { HeroContent, Language } from "@/lib/types";
import Header from "../Header/header";

const Hero = ({ content, language }: { content: HeroContent, language: Language }) => {
    const { title, tagline, cta } = content;

    return (
        <section className={styles.hero}>
            <Header language={language} position="hero" />
            <div>
                <h1>{title}</h1>
                <p>{tagline}</p>
                <Link href="#content">{cta}</Link>
            </div>
        </section>
    )
}

export default Hero;