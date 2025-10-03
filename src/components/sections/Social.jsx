import { SocialBox } from "../layout/ui/SocialBox.jsx";
import { SocialBoxImg } from "../layout/ui/SocialBoxImg.jsx";
import { Word } from "../layout/ui/Word.jsx";
import { InstagramIcon } from "lucide-react";
import { FacebookIcon } from "lucide-react";
import { TwitterIcon } from "lucide-react";


export function Social() {
    return (
        <div className="social">
            <div className="tittle">
                <Word back={`SOCIAL`} front={`We in Social`}/>
                <div className="line"></div>
            </div>
            <div className="boxs flex items-center gap-7">
                <SocialBox DennisFerguson ={`@DennisFerguson`} socialImg={<TwitterIcon size={'20px'} color="#737373"/>} socialText={`Twitter`}/>
                <SocialBoxImg socialImg={<InstagramIcon size={'20px'} color="#737373"/>} socialText={`Instagram`}/>
                <SocialBox socialImg={<FacebookIcon size={'20px'} color="#737373"/>} socialText={`Facebook`}/>
            </div>
        </div>
    );
};