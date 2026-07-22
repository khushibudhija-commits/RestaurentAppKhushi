import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../commoncomponents/header";
import Footer from "../commoncomponents/footer";
import ScrolltoHome from "../commoncomponents/movebacktohome";
import ScrollTop from "../commoncomponents/scrollTop";
import useAuthStore from "../store/customerlogin";

const Common = () => {
  const [theme, setTheme] = useState("light");
  const customerlogin = useAuthStore((state) => state.customerlogin);
  const user = JSON.parse(localStorage.getItem("customer"));

  useEffect(() => {
    console.log(user, "SDFS")
    customerlogin(user);
  }, []);
  
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        theme === "dark" ? "bg-black text-white" : "bg-orange-50 text-gray-900"
      }`}
    >
      <ScrollTop />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <ScrolltoHome />
      <Outlet context={{ theme, toggleTheme }} />
      <ScrolltoHome />
      <Footer theme={theme} />
    </div>
  );
};
export default Common;
