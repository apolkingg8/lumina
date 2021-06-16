import React, {FC} from "react";
import {observer} from "mobx-react";
import {computedFn} from "mobx-utils";
import {stylesheet} from "typestyle";

export interface SignUpProps {

}

let getStyles = computedFn(() => (stylesheet({
    wrap: {},
})))

let SignUp: FC<SignUpProps> = (props) => {
    let styles = getStyles()

    return (
        <div className={styles.wrap}>

        </div>
    )
}

export default observer(SignUp)
