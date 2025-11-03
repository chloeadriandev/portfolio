import styles from "./footer.module.scss";
import { Language } from "@/lib/types";
import { main } from "@/lib/main";
import Link from "next/link";
import EmailCopier from "../EmailCopier/emailcopier";

const Footer = ({ language }: { language: Language }) => {
    const { github, linkedin, copyright, gcu, thanks } = main[language].footer;

    return (
        <footer className={styles.footer}>
            <div id="contact">
                <EmailCopier language={language} />
                <Link href={github.url}>{github.title}</Link>
                <Link href={linkedin.url}>{linkedin.title}</Link>
            </div>
            <div id="copyright">
                <Link href="/gcu">{gcu}</Link>
                <p>{thanks}</p>
                <p>{copyright}</p>
            </div>
        </footer>
    )
}

export default Footer;