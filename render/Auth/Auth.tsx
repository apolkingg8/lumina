import React, {FC} from "react";
import {observer} from "mobx-react";
import {computedFn} from "mobx-utils";
import {stylesheet} from "typestyle";

export interface AuthProps {

}

let getStyles = computedFn(() => (stylesheet({
    wrap: {},
})))

let Auth: FC<AuthProps> = (props) => {
    let styles = getStyles()

    return (
        <div className={styles.wrap}>

        </div>
    )
}

export default observer(Auth)
