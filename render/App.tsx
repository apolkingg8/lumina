import React, {FC} from "react";
import {observer} from "mobx-react";
import {computedFn} from "mobx-utils";
import {stylesheet} from "typestyle";

export interface AppProps {

}

let getStyles = computedFn(() => (stylesheet({
    wrap: {},
})))

let App: FC<AppProps> = (props) => {
    let styles = getStyles()

    return (
        <div className={styles.wrap}>

        </div>
    )
}

export default observer(App)
