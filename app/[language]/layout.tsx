import "../globals.scss";
import styles from "./page.module.scss";
import { Victor_Mono } from "next/font/google";
import localFont from "next/font/local";
import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { Language } from "@/lib/types";
import { main } from "@/lib/main";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ language: Language }>;
}): Promise<Metadata> {
    const { language } = await params;
    const { metadata, hero } = main[language];

    return {
        title: {
            default: metadata,
            template: `%s | ${metadata}`,
        },
        description: hero.tagline,
        metadataBase: new URL("https://chloeadrian.dev"),
        alternates: {
            languages: {
                en: "/en",
                fr: "/fr",
            },
        }
    };
}

const victorMono = Victor_Mono();
const cooperHewittBook = localFont({
    src: "../../public/fonts/CooperHewitt-Book.otf"
});

const Home = async ({ children, params }: { children: React.ReactNode, params: Promise<{ language: string }> }) => {
    const { language } = await params;
    console.log(language);

    if (language !== "en" && language !== "fr") {
        permanentRedirect("/en/");
    }

    return (
        <html lang={language} data-scroll-behavior="smooth">
            <body className={styles.body}>
                <div id="scroll-container">
                    {children}
                </div>
            </body>
        </html>
    )
}

export default Home;