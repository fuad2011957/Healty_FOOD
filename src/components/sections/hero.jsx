import { OrderNow } from "./OrderNow.jsx";
import { About } from "./About.jsx";
import { Work } from "./Work.jsx";
import { Dishes } from "./Dishes.jsx";
import { Chefs } from "./Chefs.jsx";
import { Recipes } from "./Recipes.jsx";
import { Social } from "./Social.jsx";

function Hero() {
  return (
    <section>
      <OrderNow />
      <About />
      <Work />
      <Dishes />
      <Chefs />
      <Recipes />
      <Social />
    </section>
  );
}

export default Hero;
