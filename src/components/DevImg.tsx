interface DevImgProps {
    img: string
}

export function DevImg({ img }: DevImgProps) {
    return (
        /*<div className="boxImgProfile">
            <div className='bgImgProfile bg-red-500 opacity-25 w-[400px] h-[400px]'></div>
            <img className='imgProfile absolute top-0' src={img} />
        </div>*/

        <div className="boxImgProfile">
            <img className='imgProfile' src={img} />
        </div>
    );
}