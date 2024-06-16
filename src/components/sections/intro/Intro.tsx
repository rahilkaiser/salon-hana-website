import ImageCard from "@/components/core/image-card/ImageCard";

export const Intro = () => {


    return (
        <div className="mx-auto max-w-screen-lg bg-white flex flex-col justify-center text-center p-8 space-y-8 mt-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 font-serif">
                Kosmetik in Berlin für Höchste Ansprüche
            </h1>
            <span className="block mx-auto mt-4 mb-8 w-16 h-1 bg-primary"></span>
            <div className="px-4 md:px-8 lg:px-16">
                <p className="text-xl leading-relaxed">
                    In unserem Kosmetik-Institut in Berlin können Sie in geschmackvollem Ambiente eine Auszeit vom
                    Alltag nehmen, während sich ein Team von zehn ausgewiesenen Profis um Ihre Schönheit kümmert.
                    Grosszügige Behandlungsräume, ein exklusiver Beauty-Shop und eine lauschige Innenhof-Terrasse laden
                    zum Entspannen ein.
                </p>
            </div>
            <div
                className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-8 pt-40">
                <ImageCard
                    href={'team'}
                    imageUrl="https://mlvj6gh278jg.i.optimole.com/cb:-M3q.40215/w:726/h:522/q:90/f:best/https://www.beautycarezuerich.ch/wp-content/uploads/2022/07/team.jpg"
                    title="Unser Team"
                />
                <ImageCard
                    href={'salon'}
                    imageUrl="https://mlvj6gh278jg.i.optimole.com/cb:-M3q.40215/w:726/h:522/q:90/f:best/https://www.beautycarezuerich.ch/wp-content/uploads/2022/07/kabine.jpg"
                    title="Ambiente"
                />
                <ImageCard
                    href={'services'}
                    imageUrl="https://mlvj6gh278jg.i.optimole.com/cb:-M3q.40215/w:726/h:522/q:90/f:best/https://www.beautycarezuerich.ch/wp-content/uploads/2022/07/behandlungen-1.jpg"
                    title="Dienstleistungen"
                />
            </div>
        </div>
    );
};
