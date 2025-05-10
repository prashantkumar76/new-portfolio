import React, { useEffect, useState } from 'react';
import {
    BatteryFull,
    BatteryMedium,
    BatteryLow,
    BatteryCharging,
    Wifi,
    WifiOff,
    Signal,
    SignalMedium,
    SignalLow,
    Download,
    Network,
    LucideVoicemail,
    WavesIcon,
} from 'lucide-react';

interface MyBatteryManager extends EventTarget {
    charging: boolean;
    level: number; // value between 0 and 1
    onlevelchange: ((this: MyBatteryManager, ev: Event) => void) | null;
    onchargingchange: ((this: MyBatteryManager, ev: Event) => void) | null;
    addEventListener: (
        type: 'levelchange' | 'chargingchange',
        listener: (this: MyBatteryManager, ev: Event) => void
    ) => void;
}

interface NetworkInfo {
    downlink: number;
    rtt: number;
    effectiveType: string;
    saveData: boolean;
}

interface NetworkConnection extends EventTarget {
    type: string;
    effectiveType: string;
    downlink: number;
    rtt: number;
    saveData: boolean;
    addEventListener: (type: string, listener: EventListener) => void;
    removeEventListener: (type: string, listener: EventListener) => void;
}

interface NavigatorWithConnection extends Navigator {
    connection?: NetworkConnection;
    mozConnection?: NetworkConnection;
    webkitConnection?: NetworkConnection;
}

const BatteryStatus: React.FC = () => {
    const [level, setLevel] = useState<number>(100);
    const [charging, setCharging] = useState<boolean>(false);
    const [networkInfo, setNetworkInfo] = useState<NetworkInfo>({
        downlink: 0,
        rtt: 0,
        effectiveType: 'unknown',
        saveData: false,
    });

    useEffect(() => {
        const initBattery = async () => {
            const nav = navigator as Navigator & {
                getBattery?: () => Promise<MyBatteryManager>;
            };

            if (nav.getBattery) {
                try {
                    const battery = await nav.getBattery();
                    const update = () => {
                        const batteryLevel = battery.level;
                        const batteryCharging = battery.charging;

                        if (typeof batteryLevel === 'number' && !isNaN(batteryLevel)) {
                            setLevel(Math.round(batteryLevel * 100));
                        } else {
                            console.warn('Battery level is undefined or invalid:', batteryLevel);
                        }

                        if (typeof batteryCharging === 'boolean') {
                            setCharging(batteryCharging);
                        } else {
                            console.warn('Battery charging status is undefined or invalid:', batteryCharging);
                        }
                    };

                    update();
                    battery.addEventListener('levelchange', update);
                    battery.addEventListener('chargingchange', update);
                } catch (error) {
                    console.error('Failed to get battery status:', error);
                }
            } else {
                console.warn('navigator.getBattery is not supported in this browser');
            }
        };

        const updateNetworkInfo = () => {
            const nav = navigator as NavigatorWithConnection;
            const connection = nav.connection || nav.mozConnection || nav.webkitConnection;
            if (connection) {
                setNetworkInfo({
                    downlink: connection.downlink || 0,
                    rtt: connection.rtt || 0,
                    effectiveType: connection.effectiveType || 'unknown',
                    saveData: connection.saveData || false,
                });
            }
        };

        updateNetworkInfo();

        const nav = navigator as NavigatorWithConnection;
        const connection = nav.connection || nav.mozConnection || nav.webkitConnection;
        if (connection) {
            connection.addEventListener('change', updateNetworkInfo);
        }

        initBattery();

        return () => {
            if (connection) {
                connection.removeEventListener('change', updateNetworkInfo);
            }
        };
    }, []);

    const BatteryIcon = () => {
        if (charging) return <BatteryCharging className="w-5 h-5 text-green-500" />;
        if (level > 70) return <BatteryFull className="w-5 h-5 text-green-500" />;
        if (level > 30) return <BatteryMedium className="w-5 h-5 text-yellow-500" />;
        return <BatteryLow className="w-5 h-5 text-red-500" />;
    };


    return (
        <div className="flex gap-2 px-2 py-1 rounded-lg">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <BatteryIcon />
                    <span className="text-sm font-medium">{isNaN(level) ? 'N/A' : `${level}%`}</span>
                </div>
            </div>

            <div className="flex items-center justify-between space-x-2">
                <Download className='w-5 h-5 text-green-400 text-sm font-medium' />  <span> {networkInfo.downlink.toFixed(2)} Mbps</span>
            </div>

            <div className="flex items-center justify-between space-x-2">
                <WavesIcon className='w-5 h-5 text-green-400 text-sm font-medium' /> <span>{networkInfo.rtt} ms</span>
            </div>

            <div className="flex items-center justify-between space-x-2">
                <Signal className='w-5 h-5 text-green-400 text-sm font-medium' />  <span>{networkInfo.effectiveType}</span>
            </div>
        </div>
    );
};

export default BatteryStatus;