"use client";

import styles from "./header.module.scss";
import { Language } from "@/lib/types";
import type { MouseEventHandler } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { home } from "@/lib/home";
import { useEffect, useState } from "react";

const Header = ({ language, position }: { language: Language; position: "hero" | "content" }) => {
    const router = useRouter();
    const { header } = home[language];
    const [uiLang, setUiLang] = useState(language);
    const [destinationLang, setDestinationLang] = useState<Language>(language === "fr" ? "en" : "fr");

    const pathname = usePathname() + "/";
    const newPathname = language === "fr" ? pathname.replace("/fr/", "/en/") : pathname.replace("/en/", "/fr/");

    useEffect(() => {
        setUiLang(language);
    }, [language]);

    useEffect(() => {
        router.prefetch?.(newPathname);
    }, [newPathname, router]);

    const switchLanguage: MouseEventHandler<HTMLAnchorElement> = (event) => {
        event.preventDefault();

        setUiLang(destinationLang);
        setDestinationLang(language);

        setTimeout(() => router.push(newPathname, { scroll: false }), 300);
    };

    return (
        <header id={position} className={styles.header}>
            <Link href="/" title={header.homepage}>Chloé Adrian</Link>
            <Link
                href={newPathname}
                lang={destinationLang}
                title={header.switch}
                onClick={switchLanguage}
                onMouseEnter={() => router.prefetch?.(newPathname)}
            >
                <div>
                    <p>{uiLang}</p>
                </div>
            </Link>
        </header>
    );
};

export default Header;