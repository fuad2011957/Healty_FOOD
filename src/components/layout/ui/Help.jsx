import { Clock4 } from 'lucide-react';
import { Navigation } from 'lucide-react';
import { Phone } from 'lucide-react';



export function Help() {
    return (
        <article className='privet'>
            <div className={`flex flex-col items-center gap-3`}>
                <Clock4 color='#737373'/>
                <div className="text">
                    <p>Today 10:00 am - 7:00 pm</p>
                    <p>Working hours</p>
                </div>
            </div>
            <div className={`flex flex-col items-center gap-3`}>
                <Navigation fill='#737373' color='#737373'/>
                <div className="text">  
                    <p>Velyka Vasylkivska 100</p>
                    <p>Get Directions</p>
                </div>
            </div>
            <div className={`flex flex-col items-center gap-3`}>
                <Phone fill='#737373' color='#737373'/>
                <div className="text">
                    <p>+38 (063)833 24 15</p>
                    <p className="text-gray-700">Call Online</p>
                </div>
            </div>
        </article>
    )  
};