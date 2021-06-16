import logger from "./logger";

@logger.module()
class Example {

    @logger.method()
    foo = ()=> {

    }

    @logger.method()
    bar = async ()=> {

    }

    constructor() {

    }
}

export default new Example()
