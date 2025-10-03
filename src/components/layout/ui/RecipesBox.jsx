import { Eye } from 'lucide-react';
import { MessageSquareMore } from 'lucide-react';

export function RecipesBox({foodTime}) {
    return (
        <div className="box-r">
            <div className="box-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident excepturi iure in laudantium dolorem.
            </div>
            <div className="bottom">
                <div className="time flex gap-4 items-center">
                    <span id="food-time">{foodTime}</span>
                    <p>07 Jan 2016</p>
                </div>
                <div className="views-com flex gap-4.5 items-center">
                    <div className="view flex gap-2.5 items-center">
                        <Eye color='#cfcfcf'/>
                        <p>275</p>
                    </div>
                    <div className="com flex gap-2.5 items-center">
                    <MessageSquareMore color='#cfcfcf'/>
                        <p>12</p>
                    </div>
                </div>
            </div>
        </div>
    );
};