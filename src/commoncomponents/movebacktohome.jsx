
import { ArrowUp } from "lucide-react";

const ScrolltoTop = ({theme}) => {
   const isDark = theme === "dark";
    return (
        <a href="#">
            <ArrowUp  className={`h-12.5 p-3 w-12.5
             rounded-full bg-gray-900 z-500 fixed right-7.5
              bottom-20 ${
        isDark
          ? "border-orange-900 hover:bg-orange-900"
          : "border-[#7c4a12] hover:bg-[#7c4a12] text-white"
      }` }
              />
        </a>)
}

export default ScrolltoTop