"use client"

import { Language } from "@/lib/types";
import { useState } from "react";
import { main } from "@/lib/main";

const EmailCopier = ({ language }: { language: Language }) => {
    const { email } = main[language].footer;
    const [copied, setCopied] = useState(false);

    const copyEmailAddress = async () => {
        await navigator.clipboard.writeText("hello@chloeadrian.dev");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            onClick={copyEmailAddress}
            aria-live="polite"
            aria-label={copied ? email.copied.aria : email.copy.aria}
            className="footer__link"
        >
            {copied ? email.copied.display : email.copy.display}
        </button>
    )
}

export default EmailCopier;