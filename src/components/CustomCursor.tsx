import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { VisitorInfo } from "@/lib/Types";


const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visitorInfo, setVisitorInfo] = useState<VisitorInfo>({
    location: "Loading...",
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);

    const getLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        setVisitorInfo(prev => ({
          ...prev,
          location: `${data.city}, ${data.country_name}`,
        }));
      } catch (error) {
        console.error("Error fetching location:", error);
        setVisitorInfo(prev => ({
          ...prev,
          location: "Location unavailable",
        }));
      }
    };

    getLocation();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.div
      className="fixed z-[9999] pointer-events-none"
      style={{
        top: position.y,
        left: position.x,
        transform: "translate(10%, 30%)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col gap-1 bg-white border border-gray-300 px-3 py-2 rounded-lg shadow-lg text-sm">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-blue-500" />
          <span className="text-black font-medium text-sm">{visitorInfo.location ? visitorInfo.location : 'Visitor'}</span>
        </div> 
      </div>
    </motion.div>
  );
};

export default CustomCursor;