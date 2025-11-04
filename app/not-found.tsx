import { permanentRedirect } from "next/navigation";

const NotFound = () => {
    permanentRedirect("/en");
}

export default NotFound;