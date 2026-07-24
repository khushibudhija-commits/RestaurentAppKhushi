import { useNavigate, useOutletContext } from "react-router-dom";
import { Sparkles } from "lucide-react";
import {
  ChefHat,
  Leaf,
  Truck,
} from "lucide-react";
import {
  Users,
  UtensilsCrossed,
  Award,
} from "lucide-react";
import { Quote, Star } from "lucide-react";
const testimonials = [
  {
    id: 1,
    name: "Aarav Sharma",
    image: "/customers/customer1.jpg",
    review:
      "The Seasons Restaurant exceeded all my expectations. The food was delicious, the ambience was elegant, and the service was outstanding.",
    role: "Food Blogger",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Verma",
    image: "/customers/customer2.jpg",
    review:
      "Absolutely loved the desserts and coffee. Every dish was fresh and beautifully presented. Highly recommended!",
    role: "Regular Customer",
    rating: 5,
  },
  {
    id: 3,
    name: "Rohan Mehta",
    image: "/customers/customer3.jpg",
    review:
      "The online table booking system was seamless and the staff was extremely welcoming. Will definitely visit again.",
    role: "Business Client",
    rating: 5,
  },
];
const stats = [
    {
      icon: <Users size={40} />,
      number: "25K+",
      title: "Happy Customers",
      description: "Thousands of satisfied customers who love our food and hospitality.",
    },
    {
      icon: <UtensilsCrossed size={40} />,
      number: "150+",
      title: "Delicious Dishes",
      description: "A wide variety of cuisines prepared with premium ingredients.",
    },
    {
      icon: <ChefHat size={40} />,
      number: "20+",
      title: "Expert Chefs",
      description: "Professional chefs creating unforgettable dining experiences.",
    },
    {
      icon: <Award size={40} />,
      number: "25+",
      title: "Years Experience",
      description: "Serving delicious food with excellence and passion since day one.",
    },
  ];

 const features = [
    {
      icon: <ChefHat size={42} />,
      title: "Master Chefs",
      desc: "Our experienced chefs prepare every dish with passion, creativity, and authentic flavors.",
    },
    {
      icon: <Leaf size={42} />,
      title: "Fresh Ingredients",
      desc: "We use only farm-fresh vegetables, premium spices, and high-quality ingredients every day.",
    },
    {
      icon: <Truck size={42} />,
      title: "Fast Delivery",
      desc: "Fresh meals delivered quickly to your doorstep while maintaining quality and taste.",
    },
    {
      icon: <Award size={42} />,
      title: "Premium Quality",
      desc: "Luxury dining experience with exceptional food, elegant ambience, and outstanding service.",
    },
  ];

const Home = () => {
  const { theme, toggleTheme } = useOutletContext();

  const navigate = useNavigate();
  const isDark = theme === "dark";

  return (
    <div >
      <section
        className="relative overflow-hidden  bg-center transition-all duration-700 
        min-h-screen"
        style={{
          backgroundImage: isDark
            ? `linear-gradient(
                rgba(0,0,0,.72),
                rgba(15,23,42,.88)
              ),
              url('/hero-dark.jpg')`
            : `linear-gradient(
                rgba(255,248,240,.55),
                rgba(214,181,108,.25)
              ),
              url('/hero-light.jpg')`,
        }}
      >
        

        <Sparkles
          className={`absolute top-40 left-16 w-8 h-8 animate-bounce ${
            isDark ? "text-[#D6B56C]" : "text-[#7c4a12]"
          }`}
        />

        <Sparkles
          className={`absolute right-24 top-72 w-7 h-7 animate-pulse ${
            isDark ? "text-[#D6B56C]" : "text-[#7c4a12]"
          }`}
        />
        <div
          className="
relative
z-20
flex
flex-col
items-center
justify-center
text-center

sm:px-8
lg:px-12
pt-24

"
        >
          <img
            src={isDark ? "/logo-light.png" : "/logo-dark.png"}
            alt="logo"
           className="
w-40
sm:w-52
md:w-64
lg:w-72
xl:w-80
animate-[float_4s_ease-in-out_infinite]
"
          />
<div
className="
mt-8
inline-flex
items-center
gap-2
rounded-full
px-6
py-3
mb-4
backdrop-blur-xl
border
border-[#D6B56C]/40
bg-white/10
"
>
<p
className={isDark?"text-white":"text-[#3c2415] mb-4"}
>
Premium Fine Dining Experience
</p>

</div>
          <p
            className={`uppercase tracking-[8px] text-sm font-semibold animate-pulse
            ${isDark ? "text-[#D6B56C]" : "text-[#7c4a12]"}`}
          >
            Delightful Experience
          </p>

          <div
            className={`w-28 h-[2px] my-5
            ${isDark ? "bg-[#D6B56C]" : "bg-[#7c4a12]"}`}
          ></div>

          <h1
            className={`font-serif text-5xl md:text-7xl lg:text-8xl leading-tight max-w-6xl animate-[fadeUp_1.2s_ease]
            ${isDark ? "text-white" : "text-[#3c2415]"}`}
          >
            Flavors Inspired by
            <br />
            the Seasons
          </h1>

          <p
            className={`mt-8 max-w-2xl text-lg md:text-xl leading-8 animate-[fadeUp_1.5s_ease]
            ${isDark ? "text-gray-200" : "text-[#5f4630]"}`}
          >
            Experience handcrafted dishes prepared with fresh seasonal
            ingredients, exceptional hospitality, and unforgettable flavors.
          </p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl">

<div
className={`rounded-2xl p-6 backdrop-blur-xl ${
isDark
?"bg-white/10"
:"bg-white/40"
}`}
>

<h2 className="text-3xl font-bold text-[#D6B56C]">
25+
</h2>

<p className={isDark?"text-gray-300":"text-gray-700"}>
Years Experience
</p>

</div>

<div
className={`rounded-2xl p-6 backdrop-blur-xl ${
isDark
?"bg-white/10"
:"bg-white/40"
}`}
>

<h2 className="text-3xl font-bold text-[#D6B56C]">
50+
</h2>

<p className={isDark?"text-gray-300":"text-gray-700"}>
Premium Dishes
</p>

</div>

<div
className={`rounded-2xl p-6 backdrop-blur-xl ${
isDark
?"bg-white/10"
:"bg-white/40"
}`}
>

<h2 className="text-3xl font-bold text-[#D6B56C]">
20k+
</h2>

<p className={isDark?"text-gray-300":"text-gray-700"}>
Happy Customers
</p>

</div>

<div
className={`rounded-2xl p-6 backdrop-blur-xl ${
isDark
?"bg-white/10"
:"bg-white/40"
}`}
>

<h2 className="text-3xl font-bold text-[#D6B56C]">
4.9★
</h2>

<p className={isDark?"text-gray-300":"text-gray-700"}>
Google Rating
</p>

</div>

</div>

          <div className=" justify-center  mt-12">
            <button
              onClick={() => navigate("/home/booking")}
             className="
px-8
sm:px-10
py-4
rounded-xl
bg-[#D6B56C]
text-black
font-semibold
shadow-2xl
hover:scale-105
hover:shadow-[#D6B56C]/40
transition-all
duration-500
"
            >
              Book Now
            </button>
          </div><div
  className="
    mt-10
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-5
    gap-6
    justify-items-center
  "
>
            <div
              className={`group backdrop-blur-lg rounded-3xl overflow-hidden
    transition-all duration-700 hover:-translate-y-4
     hover:scale-102
    ${
      isDark
        ? "bg-white/10 border border-white/10"
        : "bg-white/40 border border-[#D6B56C]/40"
    }`}
            >
              <div className={`
group
w-[280px]
max-w-[280px]
backdrop-blur-xl
rounded-3xl
overflow-hidden
transition-all
duration-700
hover:-translate-y-3
hover:shadow-2xl
hover:scale-[1.03]
${
isDark
?"bg-white/10 border border-white/10"
:"bg-white/50 border border-[#D6B56C]/40"
}
`}>
                <img
                  onClick={() => navigate("/home/drinks")}
                  src="/drinks/mojito.jpeg"
                  alt="Pasta"
                 className="
w-full
h-56
sm:h-60
lg:h-64
object-cover
transition-all
duration-700
group-hover:scale-110
animate-[float_5s_ease-in-out_infinite]
"
                />
              </div>

              <div className="p-5 text-center">
                <h3
                  className={`text-2xl font-serif ${
                    isDark ? "text-white" : "text-[#3c2415]"
                  }`}
                >
                  Fresh Mojito
                </h3>

                <p className="text-[#D6B56C] mt-2">★★★★★</p>

                <p
                  className={`mt-3 text-sm ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Fresh mint flavour.
                </p>
              </div>
            </div>

            <div
              className={`group backdrop-blur-lg rounded-3xl overflow-hidden
    transition-all duration-700 hover:-translate-y-4
     hover:scale-102
    ${
      isDark
        ? "bg-white/10 border border-white/10"
        : "bg-white/40 border border-[#D6B56C]/40"
    }`}
            >
              <div className="overflow-hidden">
                <img
                  onClick={() => navigate("/home/appetizers")}
                  src="/appetizers/pasta.jpeg"
                  alt="Pasta"
                  className="w-62 h-62 object-cover transition-all duration-700
        group-hover:scale-110 animate-[float_5s_ease-in-out_infinite]"
                />
              </div>

              <div className="p-5 text-center">
                <h3
                  className={`text-2xl font-serif ${
                    isDark ? "text-white" : "text-[#3c2415]"
                  }`}
                >
                  Creamy Pasta
                </h3>

                <p className="text-[#D6B56C] mt-2">★★★★★</p>

                <p
                  className={`mt-3 text-sm ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Rich creamy sauce with herbs.
                </p>
              </div>
            </div>

            <div
              className={`group backdrop-blur-lg rounded-3xl overflow-hidden
    transition-all duration-700 hover:-translate-y-4 hover:scale-102
    ${
      isDark
        ? "bg-white/10 border border-white/10"
        : "bg-white/40 border border-[#D6B56C]/40"
    }`}
            >
              <div className="overflow-hidden">
                <img
                  onClick={() => navigate("/home/appetizers")}
                  src="/appetizers/burger.jpeg"
                  alt="Burger"
                  className="w-62 h-62 object-cover transition-all duration-700
        group-hover:scale-110 animate-[float_5s_ease-in-out_infinite]"
                  style={{ animationDelay: ".5s" }}
                />
              </div>

              <div className="p-5 text-center">
                <h3
                  className={`text-2xl font-serif ${
                    isDark ? "text-white" : "text-[#3c2415]"
                  }`}
                >
                  Classic Burger
                </h3>

                <p className="text-[#D6B56C] mt-2">★★★★★</p>

                <p
                  className={`mt-3 text-sm ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Juicy grilled patty with cheese.
                </p>
              </div>
            </div>

            <div
              className={`group backdrop-blur-lg rounded-3xl overflow-hidden
    transition-all duration-700 hover:-translate-y-4
     hover:scale-102
    ${
      isDark
        ? "bg-white/10 border border-white/10"
        : "bg-white/40 border border-[#D6B56C]/40"
    }`}
            >
              <div className="overflow-hidden">
                <img
                  onClick={() => navigate("/home/desserts")}
                  src="/desserts/gulabjamun.jpg"
                  alt="Pasta"
                  className="w-62 h-62 object-cover transition-all duration-700
        group-hover:scale-110 animate-[float_5s_ease-in-out_infinite]"
                />
              </div>

              <div className="p-5 text-center">
                <h3
                  className={`text-2xl font-serif ${
                    isDark ? "text-white" : "text-[#3c2415]"
                  }`}
                >
                  Kesar GulabJamun
                </h3>

                <p className="text-[#D6B56C] mt-2">★★★★★</p>

                <p
                  className={`mt-3 text-sm ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Hot & Delicious.
                </p>
              </div>
            </div>

            <div
              className={`group backdrop-blur-lg rounded-3xl overflow-hidden
    transition-all duration-700 hover:-translate-y-4 hover:scale-102
    ${
      isDark
        ? "bg-white/10 border border-white/10"
        : "bg-white/40 border border-[#D6B56C]/40"
    }`}
            >
              <div className="overflow-hidden">
                <img
                  onClick={() => navigate("/home/appetizers")}
                  src="/appetizers/pizza.jpg"
                  alt="Pizza"
                  className="w-65 h-65 object-cover transition-all duration-700
        group-hover:scale-110 animate-[float_5s_ease-in-out_infinite]"
                  style={{ animationDelay: "1s" }}
                />
              </div>

              <div className="p-5 text-center">
                <h3
                  className={`text-2xl font-serif ${
                    isDark ? "text-white" : "text-[#3c2415]"
                  }`}
                >
                  Italian Pizza
                </h3>

                <p className="text-[#D6B56C] mt-2">★★★★★</p>

                <p
                  className={`mt-3 text-sm ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Fresh mozzarella & basil toppings.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section
      className={`relative overflow-hidden py-24 px-6 transition-all duration-500 ${
        isDark
          ? "bg-gradient-to-b from-[#111827] via-[#171717] to-black"
          : "bg-gradient-to-b from-[#fffaf1] via-[#fdf8f0] to-[#f8f3eb]"
      }`}
    >
      <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-[#D6B56C]/10 blur-3xl"></div>

      <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-[#D6B56C]/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <span
            className={`uppercase tracking-[8px] text-sm font-semibold ${
              isDark ? "text-[#D6B56C]" : "text-[#8a4b12]"
            }`}
          >
            Why Choose Us
          </span>

          <h2
            className={`mt-4 text-4xl md:text-5xl font-bold ${
              isDark ? "text-white" : "text-[#3c2415]"
            }`}
          >
            Experience Luxury Dining
          </h2>

          <div
            className={`mx-auto mt-5 w-24 h-1 rounded-full ${
              isDark ? "bg-[#D6B56C]" : "bg-[#8a4b12]"
            }`}
          />

          <p
            className={`mt-6 max-w-3xl mx-auto leading-8 text-lg ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            We combine authentic recipes, premium ingredients, elegant
            ambience, and exceptional hospitality to create unforgettable
            dining experiences for every guest.
          </p>
        </div>

        <div className="grid gap-8 mt-20 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl border transition-all duration-500 hover:-translate-y-4 ${
                isDark
                  ? "bg-[#1b1b1b] border-gray-800 hover:border-[#D6B56C]"
                  : "bg-white border-gray-200 hover:border-[#8a4b12]"
              } shadow-xl`}
            >
              <div
                className={`absolute top-0 left-0 h-1 w-full ${
                  isDark ? "bg-[#D6B56C]" : "bg-[#8a4b12]"
                }`}
              ></div>

              <div className="p-8 text-center">

                <div
                  className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 ${
                    isDark
                      ? "bg-[#D6B56C] text-black"
                      : "bg-[#8a4b12] text-white"
                  }`}
                >
                  {item.icon}
                </div>

                <h3
                  className={`mt-8 text-2xl font-bold ${
                    isDark ? "text-white" : "text-[#3c2415]"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`mt-5 leading-7 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {item.desc}
                </p>

                <div
                  className={`mx-auto mt-8 h-1 w-0 rounded-full transition-all duration-500 group-hover:w-20 ${
                    isDark ? "bg-[#D6B56C]" : "bg-[#8a4b12]"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-24 rounded-[35px] border p-8 md:p-12 lg:flex lg:items-center lg:justify-between ${
            isDark
              ? "border-[#D6B56C]/30 bg-[#1c1c1c]"
              : "border-[#e8d4a8] bg-white"
          } shadow-2xl`}
        >
          <div>
            <h3
              className={`text-3xl font-bold ${
                isDark ? "text-white" : "text-[#3c2415]"
              }`}
            >
              Every Meal is Crafted with Love ❤️
            </h3>

            <p
              className={`mt-4 max-w-2xl text-lg ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              From carefully selected ingredients to beautifully plated dishes,
              every meal is prepared to give you an unforgettable dining
              experience.
            </p>
          </div>

          <div className="mt-8 lg:mt-0">
            <button   onClick={() => navigate("/home/menu")}
              className={`rounded-xl px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 ${
                isDark
                  ? "bg-[#D6B56C] text-black hover:bg-[#e4c590]"
                  : "bg-[#8a4b12] text-white hover:bg-[#6e3a0e]"
              }`}
            >
              Explore Menu
            </button>
          </div>
        </div>
      </div>
    </section>
     <section
      className={`py-24 px-6 transition-all duration-500 ${
        isDark
          ? "bg-gradient-to-b from-black via-[#111827] to-[#171717]"
          : "bg-gradient-to-b from-[#fffaf1] via-[#fdf8f0] to-[#f7f2ea]"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">

          <span
            className={`uppercase tracking-[8px] text-sm font-semibold ${
              isDark ? "text-[#D6B56C]" : "text-[#8a4b12]"
            }`}
          >
            Our Journey
          </span>

          <h2
            className={`mt-4 text-4xl md:text-5xl font-bold ${
              isDark ? "text-white" : "text-[#3c2415]"
            }`}
          >
            Numbers That Speak
          </h2>

          <div
            className={`w-24 h-1 mx-auto mt-5 rounded-full ${
              isDark ? "bg-[#D6B56C]" : "bg-[#8a4b12]"
            }`}
          />

          <p
            className={`mt-6 max-w-3xl mx-auto text-lg leading-8 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Our passion for delicious food and outstanding service has earned
            the trust of thousands of customers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className={`group rounded-3xl p-8 text-center border transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
                isDark
                  ? "bg-[#1b1b1b] border-gray-800 hover:border-[#D6B56C]"
                  : "bg-white border-gray-200 hover:border-[#8a4b12]"
              }`}
            >
              <div
                className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 ${
                  isDark
                    ? "bg-[#D6B56C] text-black"
                    : "bg-[#8a4b12] text-white"
                }`}
              >
                {item.icon}
              </div>

              <h3
                className={`mt-8 text-5xl font-extrabold ${
                  isDark ? "text-[#D6B56C]" : "text-[#8a4b12]"
                }`}
              >
                {item.number}
              </h3>

              <h4
                className={`mt-3 text-xl font-bold ${
                  isDark ? "text-white" : "text-[#3c2415]"
                }`}
              >
                {item.title}
              </h4>

              <p
                className={`mt-4 leading-7 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {item.description}
              </p>

              <div
                className={`mx-auto mt-6 h-1 w-0 rounded-full transition-all duration-500 group-hover:w-20 ${
                  isDark ? "bg-[#D6B56C]" : "bg-[#8a4b12]"
                }`}
              ></div>
            </div>
          ))}

        </div>
      </div>
    </section>
     <section
      className={`py-20 transition-all duration-500 ${
        isDark
          ? "bg-gradient-to-b from-[#171717] to-black"
          : "bg-gradient-to-b from-orange-50 to-[#fffaf2]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p
            className={`uppercase tracking-[8px] font-semibold mb-4 ${
              isDark ? "text-[#D6B56C]" : "text-[#8a4b12]"
            }`}
          >
            Testimonials
          </p>

          <h2
            className={`text-4xl md:text-5xl font-bold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            What Our Customers Say
          </h2>

          <div
            className={`w-28 h-1 mx-auto mt-6 rounded-full ${
              isDark ? "bg-[#D6B56C]" : "bg-[#8a4b12]"
            }`}
          ></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.id}
              className={`relative rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group ${
                isDark
                  ? "bg-[#1d1d1d] border border-[#2d2d2d] hover:border-[#D6B56C]"
                  : "bg-white border border-orange-100 hover:border-[#8a4b12]"
              }`}
            >
              <div
                className={`absolute -top-10 -right-10 w-28 h-28 rounded-full blur-3xl opacity-30 ${
                  isDark ? "bg-[#D6B56C]" : "bg-orange-300"
                }`}
              />

              <Quote
                size={42}
                className={`mb-6 ${
                  isDark ? "text-[#D6B56C]" : "text-[#8a4b12]"
                }`}
              />

              <p
                className={`leading-8 text-[15px] ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                "{item.review}"
              </p>

              <div className="flex mt-6 gap-1">
                {[...Array(item.rating)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    fill="#FACC15"
                    color="#FACC15"
                  />
                ))}
              </div>

              <div className="flex items-center gap-4 mt-8">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#D6B56C]"
                />

                <div>
                  <h3
                    className={`font-bold text-lg ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.name}
                  </h3>

                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {item.role}
                  </p>
                </div>
              </div>

              <div
                className={`absolute bottom-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
                  isDark ? "bg-[#D6B56C]" : "bg-[#8a4b12]"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
      </section>
    </div>
  );
};

export default Home;
