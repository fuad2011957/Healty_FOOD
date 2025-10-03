import { Star } from "lucide-react";
import { StarHalf } from "lucide-react";
import { SquareArrowOutUpRight } from "lucide-react";
import { Button } from "./Button.jsx";

export function DishesBox({ img }) {
  return (
    <section className="box-d bg-dark-gray p-7">
      <div className="img">
        <img id="scale" src={img} alt="img" />
        <div className="share bg-amber-300">
          <SquareArrowOutUpRight color="#ffffff" strokeWidth="2px" />
        </div>
      </div>
      <div className="bottom">
        <div className="bottom__tittle">
          <h1 className="text-foreground text-3xl">Featured Meal</h1>
          <p className="text12">Served with french fries + drink</p>
        </div>
        <div className="bottom__descripsion">
          <p className="text12">
            Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper
            patty, Add Tender crisp patty and more...
          </p>
        </div>
        <div className="bottom__btn flex items-center gap-17 justify-between">
          <div className="star__box flex gap-1">
            <Star color="#F9AD3D" fill="#F9AD3D" />
            <Star color="#F9AD3D" fill="#F9AD3D" />
            <Star color="#F9AD3D" fill="#F9AD3D" />
            <StarHalf color="#F9AD3D" fill="#F9AD3D" />

            <p>12</p>
          </div>
          <Button text={`ORDER`} />
        </div>
      </div>
    </section>
  );
}
