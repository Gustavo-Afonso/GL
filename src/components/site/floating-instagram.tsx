import { InstagramIcon } from "./brand-icons";
import { INSTAGRAM_URL } from "@/lib/site-data";

export function FloatingInstagram() {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir Instagram"
      className="fixed right-4.5 bottom-4.5 z-90 flex size-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f58529_0%,#dd2a7b_50%,#8134af_75%,#515bd4_100%)] shadow-[0_10px_30px_rgba(221,42,123,.45)] sm:hidden"
    >
      <InstagramIcon className="size-6.5 text-white" />
    </a>
  );
}
