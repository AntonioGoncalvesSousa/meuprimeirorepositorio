import { House, AlignJustify, Search, ShoppingCart } from "lucide-react";
// import Sunny from '../../assets/images/sunnyLine'
import Sunny from "../../assets/images/sunny.png"

const navBar = () => {
    return (
        <>
            <nav className="bg-black h-20 w-screen fixed bottom-0 left-0 z-50 flex flex-row justify-around items-center ">
                <House className="text-white h-8 w-8"/>
                <AlignJustify className="text-white h-8 w-8"/>
                <img src={Sunny} className="h-9 w-10"/>
                <Search className="text-white h-8 w-8"/>
                <ShoppingCart className="text-white h-8 w-8"/>
            </nav>
        </>
    )
}

export default navBar;