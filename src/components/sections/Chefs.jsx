import { ChefsBox } from "../layout/ui/ChefsBox.jsx";
import { Word } from "../layout/ui/Word.jsx";

import Avatar1 from "../layout/shared/assets/img/Avatar1.png";
import Avatar2 from "../layout/shared/assets/img/Avatar2.png";
import Avatar3 from "../layout/shared/assets/img/Avatar3.png";

import BigImg1 from "../layout/shared/assets/img/big-img1.png";
import SmallImg1 from "../layout/shared/assets/img/small-img-2.png";
import SmallImg1_ from "../layout/shared/assets/img/small-img-2_.png";

import BigImg2 from "../layout/shared/assets/img/big-img2.png";
import SmallImg2 from "../layout/shared/assets/img/small-img-3.png";
import SmallImg2_ from "../layout/shared/assets/img/small-img-3_.png";

import BigImg3 from "../layout/shared/assets/img/big-img3.png";
import SmallImg3 from "../layout/shared/assets/img/small-img-4.png";
import SmallImg3_ from "../layout/shared/assets/img/small-img-4_.png";

export function Chefs() {
    return (
        <div id="chefs" className="chefs flex flex-col gap-18">
            <div className="tittle">
                <Word back={`CHEFS`} front={`This month's chefs`}/>
                <div className="line"></div>
            </div>

            <div className="boxs flex items-center justify-between w-300">
                <ChefsBox img1={BigImg1} img2={SmallImg1} img3={SmallImg1_} chefsPhoto={Avatar1} textChef={`Chef of the cold`} textName={`Gregory Flores`} />
                <ChefsBox img1={BigImg2} img2={SmallImg2} img3={SmallImg2_} chefsPhoto={Avatar2} textChef={`Chef of the hot`} textName={`Annette Cooper`} />
                <ChefsBox img1={BigImg3} img2={SmallImg3} img3={SmallImg3_} chefsPhoto={Avatar3} textChef={`Сhef macro kitchen`} textName={`Greg Fox`} />
            </div>
        </div>
    )
};