export function ChefsBox({textName, textChef, chefsPhoto, img1, img2, img3}) {
    return (
        <div className="box-ch">
            <div className="top flex items-center gap-6">
                <div className="ph">
                    <img src={`${chefsPhoto}`} alt="chefPhoto" />
                </div>
                <div className="chefs__names flex flex-col">
                    <h1 className="text-2xl text-foreground">{textName}</h1>
                    <h1 className="text-light-gray">{textChef}</h1>
                </div>
            </div>
            <div className="bottom flex items-center justify-between">
                <img src={`${img1}`} alt="" />
                <img src={`${img2}`} alt="" />
                <img src={`${img3}`} alt="" />
            </div>
        </div>
    )
}