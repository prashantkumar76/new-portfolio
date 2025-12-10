import { Leetcodecalendar } from "react-leetcode-calendar";
import { useTheme } from "next-themes";

export default function LeetCodeGraph() {
    const { theme } = useTheme();

    return (
        <div className="w-full overflow-hidden border border-edge rounded-xl bg-card/30 p-4 sm:p-6 flex justify-center">
            <div 
                className="leetcode-calendar-wrapper"
                style={{
                    fontSize: '12px',
                    color: 'hsl(var(--foreground))',
                }}
            >
                <Leetcodecalendar username="user5740CW" />
            </div>
        </div>
    );
}