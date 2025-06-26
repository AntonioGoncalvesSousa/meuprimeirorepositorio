import desenhos from "../../data/desenhos.js";

const title = () => {

    const plotarDesenhos = () => {
        const repete = 8; // número de vezes que a lista será duplicada (mais = mais longa)

        const listaFinal = Array.from({ length: desenhos.length * repete }, (_, i) => {
            const desenho = desenhos[i % desenhos.length]; // ciclo automático

            const gradientClass = desenho.cor === "orange-600" ? "from-orange-600" : "from-purple-900";

            return (
                <div key={i} className="flex items-center mr-4">
                    <img src={desenho.imagem} className="h-9 w-10 p-1" />
                    <h5 className={`font-bold text-transparent bg-clip-text bg-gradient-to-b ${gradientClass} to-white`}>
                        Sunffly Crew
                    </h5>
                </div>
            );
        });

        return listaFinal;
    };




    return (
        <section className="bg-black w-screen h-11 overflow-hidden relative text-white drop-shadow-md border-b-2 border-purple-900">
            <div className="flex items-center animate-scroll whitespace-nowrap gap-10 lg:gap-32">
                {plotarDesenhos()}
            </div>
        </section>
    );
};

export default title;