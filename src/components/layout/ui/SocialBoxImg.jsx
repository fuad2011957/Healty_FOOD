import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import instagram1 from "../shared/assets/img/instagram1.png";
import instagram2 from "../shared/assets/img/instagram2.png";
import instagram3 from "../shared/assets/img/instagram3.png";
import instagram4 from "../shared/assets/img/instagram4.png";
import instagram5 from "../shared/assets/img/instagram5.png";
import instagram6 from "../shared/assets/img/instagram6.png";

export function SocialBoxImg({socialImg, socialText, images}) {

    const effectiveImages = useMemo(() => {
        if (Array.isArray(images) && images.length > 0) return images;
        return [instagram1, instagram2, instagram3, instagram4, instagram5, instagram6];
    }, [images]);

    const slides = useMemo(() => {
        const chunkSize = 6; // 3 x 2 grid per slide
        const chunks = [];
        for (let start = 0; start < effectiveImages.length; start += chunkSize) {
            chunks.push(effectiveImages.slice(start, start + chunkSize));
        }
        if (chunks.length === 0) return [effectiveImages];
        // Ensure at least 2 slides so arrows work even with 6 images
        if (chunks.length === 1) {
            const next = [...effectiveImages.slice(3), ...effectiveImages.slice(0, 3)].slice(0, chunkSize);
            return [chunks[0], next];
        }
        return chunks;
    }, [effectiveImages]);

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const goPrev = () => {
        setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goNext = () => {
        setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    };

    return (
        
        <div className="box-s">
            <div className="top">
                <div className="social-box text-foreground flex items-center gap-3">
                    <div className="kol">
                        {socialImg}
                    </div>
                    {socialText}
                </div>
                <div className="btn">
                    <button className="cursor-pointer">Follow Us</button>
                </div>
            </div>
            <div className="bottom2 relative">
                <div className="overflow-hidden w-full">
                    <div
                        className="flex transition-transform duration-300"
                        style={{ transform: `translateX(-${(currentSlideIndex * 100) / slides.length}%)`, width: `${slides.length * 100}%` }}
                    >
                        {slides.map((slideImages, slideIdx) => (
                            <div key={slideIdx} className="p-0" style={{ width: `${100 / slides.length}%` }}>
                                <div className="grid grid-cols-3 gap-0">
                                    {slideImages.map((src, idx) => (
                                        <img key={idx} src={src} alt="" className="w-full" />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {(
                    <>
                        <button
                            className={`absolute left-37.5 top-1/5 -translate-y-1/3 bg-primary rounded-full w-12 h-12 flex items-center justify-center cursor-pointer z-10 ${slides.length === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={goPrev}
                            aria-label="Previous"
                            disabled={slides.length === 1}
                        >
                            <ArrowLeft size={22} color="#1C1C1C" />
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};