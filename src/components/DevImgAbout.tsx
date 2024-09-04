interface DevImgAboutProps {
    img: string
}

export function DevImgAbout({ img }: DevImgAboutProps) {
    return (
        <div>
            <img src={img} className="w-[500px] h-[650px] object-cover rounded-3xl" />
        </div>
    );
}