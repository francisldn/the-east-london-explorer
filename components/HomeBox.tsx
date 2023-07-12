import Image from "next/image";
interface HomeBoxProp {
    title: string;
    imageUrl: string;
}

const HomeBox = ({title, imageUrl}:HomeBoxProp) => {
    return (
        <div className = "my-6 rounded-xl bg-slate-300 border-slate-400 overflow-hidden hover:scale-110 cursor-pointer transition-all">
            
                <Image
                width={0}
                height={0}
                layout="responsive"
                src={imageUrl}
                alt={title}
                sizes="(max-width: 640px) 100vw, (max-width: 750px) 50vw, 33vw"
                priority={true }
                />
                
            <div>
                <h2 className="text-2xl text-center py-3">{title}</h2>
            </div>
        </div>
    );
}

export default HomeBox;