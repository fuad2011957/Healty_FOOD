import { RecipesBox } from "../layout/ui/RecipesBox";
import { RecipesBoxGreen } from "../layout/ui/RecipesBoxGreen";
import { RecipesBoxImg } from "../layout/ui/RecipesBoxImg";
import { Word } from "../layout/ui/Word";
import Slider from "./Slider.jsx"


export function Recipes() {
    return (
        <div id="recipes" className="recipes flex flex-col gap-8">
            <div className="tittle">
                <Word back={`RECIPES`} front={`Recipes From Our Chefs`}/>
                <div className="line"></div>
            </div>
            <div className="a gap-7">
                <div className="b">
                    <Slider />
                </div>
                <div className="c flex flex-col gap-4.5">
                    <RecipesBox foodTime={`LUNCH`}/>
                    <RecipesBoxImg foodTime={`DINNER`}/>
                    <RecipesBoxGreen foodTime={`SWEETS`}/>
                </div>
            </div>
        </div>
    );
};