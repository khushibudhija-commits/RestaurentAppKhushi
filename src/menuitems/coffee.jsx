import {  useOutletContext } from "react-router-dom";
import coffee from "../menuitems/coffeedata";

import useCartStore from "../store/cart";
import SliderModule from "react-slick";
const Slider = SliderModule.default;

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Coffee = () => {
  
  const { theme } = useOutletContext();
  const isDark = theme === "dark";
const addToCart = useCartStore((state) => state.addToCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    centerMode: true,
    centerPadding: "20px",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
  <section
      className={`min-h-screen cursor-pointer py-20 px-6 transition-all
        cursor-pointer duration-500 ${
        isDark
          ? "bg-linear-to-b from-black via-zinc-900 to-black text-white"
          : "bg-linear-to-b from-orange-50 via-amber-50 to-orange-100 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <p
            className={`uppercase tracking-[6px] text-sm mb-2 ${
              isDark ? "text-[#E4C590]" : "text-[#8a4b12]"
            }`}
          >
            Fresh & Delicious
          </p>

          <h1
            className={`text-5xl font-bold ${
              isDark ? "text-[#E4C590]" : "text-[#8a4b12]"
            }`}
          >
            Coffee
          </h1>
          <div
            className={`w-24 h-1 mx-auto mt-4 rounded-full ${
              isDark ? "bg-[#E4C590]" : "bg-[#8a4b12]"
            }`}
          ></div>
        </div>
        <Slider {...settings}>
          {coffee.map((item) => (
            <div key={item.id} className="px-4 py-4">
              <div
                className={`rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
                  isDark
                    ? "bg-zinc-900 border border-zinc-700"
                    : "bg-white border border-orange-200 shadow-lg"
                }`}
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-72 object-cover transition duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3
                    className={`text-3xl font-bold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.name}
                  </h3>
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-xl font-semibold text-[#D6B56C]">
                      ₹{item.price}
                    </p>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="w-9 h-9 rounded-full bg-red-500 text-white
                 hover:bg-red-600 transition text-lg font-bold"
                      >
                        −
                      </button>
                      <span
                        className={`text-lg font-bold ${
                          isDark ? "text-white" : "text-[#3c2415]"
                        }`}
                      >
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="w-9 h-9 rounded-full bg-green-500 text-white
                 hover:bg-green-600 transition text-lg font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-5">
                    <h3
                      className={`text-xl font-bold ${
                        isDark ? "text-white" : "text-[#3c2415]"
                      }`}
                    >
                      Total : ₹{item.price * item.quantity}
                    </h3>
                  </div>
                  <div
                    className={`w-16 h-1 rounded-full mx-auto my-4 ${
                      isDark ? "bg-[#E4C590]" : "bg-[#8a4b12]"
                    }`}
                  ></div>
                  <button
                    onClick={() => addToCart(item)}
                    className={`mt-5 px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                      isDark
                        ? "bg-[#E4C590] text-black hover:bg-white"
                        : "bg-[#8a4b12] text-white hover:bg-[#E4C590] hover:text-black"
                    }`}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Coffee;