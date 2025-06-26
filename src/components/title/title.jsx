// import SunnyLogoLaranja from "../../assets/images/sunnyLogoLaranja";
// import SunnyLogoRoxo from "../../assets/images/sunnyLogoRoxo";
import Abelhinha from "../../assets/images/abelhinha.png";
import SunnyVaso from "../../assets/images/sunnyVaso.png";


const title = () => {
    return (
        <section className="bg-black w-screen h-11 overflow-hidden relative text-white drop-shadow-md">
            <div className="flex items-center animate-scroll whitespace-nowrap gap-8">
                <img src={Abelhinha} className="h-9 w-10 p-1" />
                <h5 className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-900 to-white">Sunffly Crew</h5>
                <img src={SunnyVaso} className="h-9 w-10 p-1" />
                <h5 className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-600 to-white">Sunffly Crew</h5>
                <img src={Abelhinha} className="h-9 w-10 p-1" />
                <h5 className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-900 to-white">Sunffly Crew</h5>
                <img src={SunnyVaso} className="h-9 w-10 p-1" />
                <h5 className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-600 to-white">Sunffly Crew</h5>
                <img src={Abelhinha} className="h-9 w-10 p-1" />
            </div>
        </section>
    );
};

export default title;