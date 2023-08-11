import {
    FcAssistant,
    FcBriefcase,
    FcSelfie,
    FcVideoCall,
    FcTreeStructure,
    FcStumbleupon,
    FcShop,
    FcSafe,
    FcRotateCamera,
    FcRules
} from "react-icons/fc";
import { ReactNode } from 'react';
interface IconData {
    value: ReactNode;
    label: string;
    icon: ReactNode;
}

const icons: IconData[] = [
    { value: FcAssistant, label: "Assistant", icon: FcAssistant },
    { value: FcBriefcase, label: "Briefcase", icon: FcBriefcase },
    { value: FcSelfie, label: "Selfie", icon: FcSelfie },
    { value: FcVideoCall, label: "Video Call", icon: FcVideoCall },
    { value: FcTreeStructure, label: "Tree Structure", icon: FcTreeStructure },
    { value: FcStumbleupon, label: "StumbleUpon", icon: FcStumbleupon },
    { value: FcShop, label: "Shop", icon: FcShop },
    { value: FcSafe, label: "Safe", icon: FcSafe },
    { value: FcRotateCamera, label: "Rotate Camera", icon: FcRotateCamera },
    { value: FcRules, label: "Rules", icon: FcRules }

];

export default icons;