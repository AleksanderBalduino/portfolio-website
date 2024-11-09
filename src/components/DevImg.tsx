interface DevImgProps {
    img: string
}

export function DevImg({ img }: DevImgProps) {
    return (
        <div className="boxImgProfile">
            <img className='imgProfile' src={img} />
        </div>
    );
}