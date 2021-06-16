import React, {FC} from "react";
import {observer} from "mobx-react";
import {computedFn} from "mobx-utils";
import {stylesheet} from "typestyle";

export interface Step4Props {

}

let getStyles = computedFn(() => (stylesheet({
    wrap: {},
})))

let Step4: FC<Step4Props> = (props) => {
    let styles = getStyles()

    return (
        <div className={styles.wrap}>

        </div>
    )
}

export default observer(Step4)
