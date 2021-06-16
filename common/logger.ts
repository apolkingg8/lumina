
class Logger {

    module = (): any => {
        // log module constructor
        // ex: Example constructor()
    }

    method = (): any => {
        // log method i/o/throw
        // ex: Example.foo() <= "arg1" "arg2"
        // ex: Example.foo() => "output1"
        // ex: Example.bar() <= "arg1" "arg2"
        // ex: Example.bar() throw DumbError("HoHoHo")
    }

    constructor() {

    }
}

export default new Logger()
