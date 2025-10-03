import { Word } from "../layout/ui/Word.jsx";
import { Slider } from "../layout/ui/Slider.jsx";



export function About() {
    return (
        <div className="about">
            <Word back={`ABOUT`} front={`The Basics Of Healthy Food`}/>
            <div className="p">
                <p>In aliqua ea ullamco ad est ex non deserunt nulla. Consectetur sint ea aliquip aliquip consectetur</p>
                <p>voluptate est. Eu minim dolore laboris enim mollit voluptate irure esse aliquip.</p>
            </div>
           <Slider />
        </div>
    )
};

