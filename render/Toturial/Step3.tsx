import React, {FC} from "react";
import {observer} from "mobx-react";
import {computedFn} from "mobx-utils";
import {stylesheet} from "typestyle";

export interface Step3Props {

}

let getStyles = computedFn(() => (stylesheet({
    wrap: {},
})))

let Step3: FC<Step3Props> = (props) => {
    let styles = getStyles()

    return (
        <div className={styles.wrap}>

        </div>
    )
}

export default observer(Step3)
