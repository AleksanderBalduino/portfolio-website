interface DevImgAboutProps {
    img: string
}

export function DevImgAbout({ img }: DevImgAboutProps) {
    return (
        <div>
            <img src={img} className="rounded-3xl" />
        </div>
    );
}