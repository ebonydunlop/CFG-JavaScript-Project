import ZucchiniLasagna from "../src/assets/images/ZucchiniLasagna.jpg";
import ButterChickken from "../src/assets/images/ButterChickken.jpg";
import MongolianBeef from "../src/assets/images/MongolianBeef.jpg";
import NeapolitanPizza from "../src/assets/images/NeapolitanPizza.jpg";
import PorkBellyRamen from "../src/assets/images/PorkBellyRamen.jpg";
import BrieAsparagusQuiche from "../src/assets/images/BrieAsparagusQuiche.jpg";
import SalsaVerdeSeaBass from "../src/assets/images/SalsaVerdeSeaBass.jpg";
import QuinoaBurger from "../src/assets/images/QuinoaBurger.jpg";

const popularRecipes = [
    {
      id: 1,
      name: "Zucchini Lasagna",
      image: ZucchiniLasagna,
      description: "Indulge in a healthier take on traditional lasagna with our savory Zucchini Lasagna.",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Butter Chicken",
      image: ButterChickken,
      description: "A rich and creamy Indian chicken dish.",
      rating: 4.2,
    },
    {
        id: 3,
        name: "Mongolian Beef",
        image: MongolianBeef,
        description: "A stir-fry dish with the perfect blend of sweet and savoury.",
        rating: 5,
    },
    {
        id: 4,
        name: "Authentic Neopolitan Pizza",
        image: NeapolitanPizza,
        description: "Experience a slice of Italy with our authentic Neapolitan pizza.",
        rating: 4.9,
    },
  ];
  
const newRecipes = [
    {
      id: 1,
      name: "Teriyaki Pork Belly Ramen",
      image: PorkBellyRamen,
      description: "Melt-in-your-mouth pork belly meets savory teriyaki sauce in a steaming bowl of ramen.",
      rating: 4.0,
    },
    {
      id: 2,
      name: "Asparagus and Brie Quiche",
      image: BrieAsparagusQuiche,
      description: "A perfect marriage of creamy and earthy flavors.",
      rating: 4.7,
    },
    {
        id: 3,
        name: "Sea Bass with Salsa Verde",
        image: SalsaVerdeSeaBass,
        description: "Succulent sea bass paired with tangy, herbaceous salsa verde.",
        rating: 4.5,
      },
    {
        id: 4,
        name: "Crispy Quinoa Burgers",
        image: QuinoaBurger,
        description: "A delicious and nutritious alternative to beef burgers.",
        rating: 4.1,
    },
  ];
  
export { popularRecipes, newRecipes };
  