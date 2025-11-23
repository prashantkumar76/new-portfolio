
import { cn } from "@/lib/utils";

export function ProfileCover() {
    return (
        <div
            className={cn(
                "aspect-[2/1] border-x border-edge select-none sm:aspect-[3/1]",
                "flex items-center justify-center text-black dark:text-white",
                "relative overflow-hidden",
                "bg-black/5 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-[size:10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/5 dark:[--pattern-foreground:var(--color-white)]/5"
            )}
        >
            <div className="absolute inset-0 bg-grid-black dark:bg-grid-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-20" />
            {/* Optional: Add a logo or mark here if desired, otherwise it's just the pattern */}
        </div>
    );
}
