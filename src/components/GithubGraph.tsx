
import GitHubCalendar from "react-github-calendar";
import { useTheme } from "next-themes";

export default function GithubGraph() {
    const { theme } = useTheme();

    return (
        <div className="w-full overflow-hidden border border-edge rounded-xl bg-card/30 p-4 sm:p-6 flex justify-center">
            <GitHubCalendar
                username="1sisodiyaji"
                colorScheme={theme === "dark" ? "dark" : "light"}
                fontSize={12}
                blockSize={12}
                blockMargin={4}
                style={{
                    color: "hsl(var(--foreground))",
                }}
            />
        </div>
    );
}
