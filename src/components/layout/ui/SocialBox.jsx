export function SocialBox({socialImg, socialText, DennisFerguson}) {

    return (
        
        <div className="box-s">
            <div className="top">
                <div className="social-box text-foreground flex items-center gap-3">
                    <div className="kol">
                        {socialImg}
                    </div>
                    {socialText}
                </div>
                <div className="btn">
                    <button className="cursor-pointer">Follow Us</button>
                </div>
            </div>
            <div className="bottom">
                <h2 className="text-light-gray">24 Jun at 16:20 pm</h2>
                <div className="scroll-place text-1xl text-foreground">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>
                <h2 className="text-primary">{DennisFerguson}</h2>
            </div>
        </div>
    );
};