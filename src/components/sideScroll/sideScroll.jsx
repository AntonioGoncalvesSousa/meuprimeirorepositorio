import Desenhos from "../../data/desenhos.js";

const SideScroll = () => {
    const circuloDesenhos = Desenhos.map((desenho, index) => {

        const backgroundClass = desenho.cor === "orange-600" ? "bg-orange-600" : "bg-purple-900";

        return (
            <div key={index} className={`w-16 h-16 rounded-full ${backgroundClass} flex flex-col items-center justify-center m-4 shadow-md shadow-black/70`} >
                <img src={desenho.imagem} className="h-9 w-10" />
            </div>
        );
    });

    return (
        <section className="w-screen h-32 flex items-center">
            <div className="flex w-full items-center h-full p-4 justify-evenly">
                {circuloDesenhos}
            </div>
        </section>
    );
};

export default SideScroll;
