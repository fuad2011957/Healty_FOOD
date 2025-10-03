import { Button } from "../layout/ui/Button.jsx";
import { Help } from "../layout/ui/Help.jsx";
import { H1 } from "../layout/ui/H1.jsx";
import { P } from "../layout/ui/P.jsx";

export function OrderNow() {
    return (
        <>
            <H1 />
            <P />
            <Button text={`Order Now`} />
            <Help />
        </>
    )
};