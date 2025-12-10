import { Leetcodecalendar } from "react-leetcode-calendar";
import { useTheme } from "next-themes";

export default function LeetCodeGraph() {
    const { theme } = useTheme();

    // Define explicit colors for the theme to match your site's aesthetic
    const explicitTheme = {
        light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
        dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    };

    return (
        <div className="w-full overflow-hidden border border-edge rounded-xl bg-card/30 p-4 sm:p-6 flex justify-center">
            <Leetcodecalendar
                username="user5740CW" // Replace with your LeetCode username
                
            />
        </div>
    );
}