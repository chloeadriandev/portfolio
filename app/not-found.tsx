"use client";

import "./globals.scss";
import Header from "@/components/Header/header";
import { Language } from "@/lib/types";
import Link from "next/link";
import { useParams } from "next/navigation";
import localFont from "next/font/local";
import { Victor_Mono } from "next/font/google";

const victorMono = Victor_Mono();
const cooperHewittBook = localFont({
    src: "../public/fonts/CooperHewitt-Book.otf"
});

export default function NotFound() {
    const { language } = useParams<{ language: Language }>();
    const lang = (language === "en" || language === "fr") ? language : "en";

    return (
        <main>
            <Header language={lang} position="details" />
            <h1>404</h1>
            <p>{lang === "en" ? "Page not found." : "Page non trouvée."}</p>
            <Link href={`/${lang}`}>
                {lang === "en" ? "Go back home" : "Retour à l'accueil"}
            </Link>
        </main>
    );
}