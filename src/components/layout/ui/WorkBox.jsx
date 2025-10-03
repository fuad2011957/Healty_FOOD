export function WorkBox({topText, bottomText}) {
    return (
        <div className="box">
            <div className="top cursor-default">
                {topText}
            </div>
            <div className="line"></div>
            <div className="text cursor-default">
                {bottomText}
            </div>
        </div>
    );
};