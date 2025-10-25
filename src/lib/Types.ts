export interface SkillBubble {
    id: number;
    name: string;
    level: number;
    color: string;
};
export interface SkillListDataTypes {
    title: string;
    skills: string[];
    icon: React.ReactNode;
};
export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    url: string;
};
export interface ProjectCardProps {
    project: Project;
    isFocused: boolean;
    setFocusedId: (id: number | null) => void;
};
export interface Experience {
    id: number;
    role: string;
    company: string;
    duration: string;
    description: string[];
    tech: string[];
};
export interface TimelineItemProps {
    experience: Experience;
    index: number;
};
export interface VisitorInfo {
    location: string;
};
export interface Certification {
    id: number;
    name: string;
    issuer: string;
    date: string;
    description: string;
    image: string;
    credentialId: string;
};
export interface MyBatteryManager extends EventTarget {
    charging: boolean;
    level: number;
    onlevelchange: ((this: MyBatteryManager, ev: Event) => void) | null;
    onchargingchange: ((this: MyBatteryManager, ev: Event) => void) | null;
    addEventListener: (
        type: 'levelchange' | 'chargingchange',
        listener: (this: MyBatteryManager, ev: Event) => void
    ) => void;
};
export interface NetworkInfo {
    downlink: number;
    rtt: number;
    effectiveType: string;
    saveData: boolean;
};
export interface NetworkConnection extends EventTarget {
    type: string;
    effectiveType: string;
    downlink: number;
    rtt: number;
    saveData: boolean;
    addEventListener: (type: string, listener: EventListener) => void;
    removeEventListener: (type: string, listener: EventListener) => void;
};
export interface NavigatorWithConnection extends Navigator {
    connection?: NetworkConnection;
    mozConnection?: NetworkConnection;
    webkitConnection?: NetworkConnection;
};