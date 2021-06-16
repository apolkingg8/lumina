import React, {FC} from "react";
import {observer} from "mobx-react";
import {computedFn} from "mobx-utils";
import {stylesheet} from "typestyle";

export interface LoginProps {

}

let getStyles = computedFn(() => (stylesheet({
    wrap: {},
})))

let Login: FC<LoginProps> = (props) => {
    let styles = getStyles()

    return (
        <div className={styles.wrap}>

        </div>
    )
}

export default observer(Login)
