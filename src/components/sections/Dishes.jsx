import { DishesBox } from "../layout/ui/DishesBox.jsx";
import { Word } from "../layout/ui/Word.jsx";

import item1 from "../layout/shared/assets/img/item-1.png";
import item2 from "../layout/shared/assets/img/item-2.png";
import item3 from "../layout/shared/assets/img/item-3.png";
import item4 from "../layout/shared/assets/img/item-4.png";
import item5 from "../layout/shared/assets/img/item-5.png";
import item6 from "../layout/shared/assets/img/item-6.png";

const items = [item1, item2, item3, item4, item5, item6];

export function Dishes() {
  return (
    <div id="dishes" className="dishes">
      <div className="tittle2">
        <Word front={`Dish Of The Day`} back={`DISHES`} />
        <div className="line2"></div>
      </div>

      <div className="boxs flex flex-wrap gap-7">
        {items.map((item, index) => (
          <DishesBox img={item} key={index} />
        ))}
      </div>
    </div>
  );
}
