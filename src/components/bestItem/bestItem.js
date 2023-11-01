import './bestItem.sass';

function BestItem ({best}) {
    return (
        <div className="best-item_wrapper">
            <img src={best.img} alt="coffee" className="best-item_img" />
            <div className="best-item_descr">{best.name}</div>
            <div className="best-item_price left">{best.price}</div>
        </div>
    )
}

export default BestItem;