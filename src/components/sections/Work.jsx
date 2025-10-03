import { Word } from "../layout/ui/Word.jsx"
import { WorkBox } from "../layout/ui/WorkBox.jsx"

export function Work() {
    return (
        <div className="work flex flex-col">
            <div className="tittle">
                <Word front={`How It Works`} back={`WORK`}/>
                <div className="line"></div>
            </div>

            <div className="boxs flex gap-10.5">
                <WorkBox topText={`Pick meals`} bottomText={`Choose your meals from our diverse weekly menu. Find gluten or dairy free, low carb & veggie options.`}/>
                <WorkBox topText={`Choose how often`} bottomText={`Our team of chefs do the prep work - no more chopping, measuring, or sink full of dishes!`}/>
                <WorkBox topText={`Fast Deliveries`} bottomText={`Your freshly prepped 15-min dinner kits arrive on your doorstep in a refrigerated box..`}/>
                <WorkBox topText={`Tasty Meals`} bottomText={`Gobble makes cooking fast, so you have more time to unwind and be with family.`}/>
            </div>
        </div>
    );
};