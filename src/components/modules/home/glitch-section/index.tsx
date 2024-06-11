import { cn } from "@/lib/utils";
import styles from "./glitch.module.scss";
import { distopianFont, inter } from "@/lib/font";
import CyberButton from "../button";

export default function GlitchSection({
  text,
  description,
}: {
  text: string;
  description: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center min-h-screen",
        distopianFont.className,
        styles.body
      )}
    >
      <div className={cn("text-6xl md:text-9xl", styles.glitch)}>
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className={styles.line}>
            {text}
          </div>
        ))}
      </div>
      <p className={cn("max-w-6xl text-center", inter.className)}>
        {description}
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-5">
        <CyberButton
          title="Download Game"
          symbol="DWN"
          className="w-fit h-11"
        />
        <CyberButton
          title="Discord Server"
          symbol="DSC"
          className="w-fit h-11"
          url="https://discord.gg/pkCbWeuybb"
        />
        {/* <CyberButton title="Download Game" className="w-fit" /> */}
      </div>
    </div>
  );
}
