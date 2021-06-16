import React, {FC} from "react";
import {observer} from "mobx-react";
import {computedFn} from "mobx-utils";
import {stylesheet} from "typestyle";

export interface ToturialProps {

}

let getStyles = computedFn(() => (stylesheet({
    wrap: {},
})))

let Toturial: FC<ToturialProps> = (props) => {
    let styles = getStyles()

    return (
        <div className={styles.wrap}>

        </div>
    )
}

export default observer(Toturial)
