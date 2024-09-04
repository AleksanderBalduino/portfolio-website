interface DevImgProps {
    img: string
}

export function DevImg({ img }: DevImgProps) {
    return (
        <div className="boxImgProfile w-[500px] h-[500px]">
            <div className='bgImgProfile bg-red-500 opacity-25 w-[500px] h-[500px]'></div>
            <img className='imgProfile absolute top-0' src={img} />
        </div>
    );
}