import Image from "next/image";

const SRC: Record<"candwin" | "blockwin" | "bubbleswin" | "ballonswin", string> = {
  candwin: "/games/candwin.jpeg",
  blockwin: "/games/blockwin.jpeg",
  bubbleswin: "/games/bubbleswin.jpeg",
  ballonswin: "/games/ballonswin.jpeg",
};

export function GamePhoto({
  variant,
  alt,
  priority = false,
}: {
  variant: "candwin" | "blockwin" | "bubbleswin" | "ballonswin";
  alt: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={SRC[variant]}
      alt={alt}
      fill
      priority={priority}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="object-cover"
    />
  );
}
