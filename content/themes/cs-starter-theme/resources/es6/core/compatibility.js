if (!document.getElementsByClassName) {
    document.getElementsByClassName = function (className) {

        let elArray = [];
        let tmp = document.getElementsByTagName("*");
        let regex = new RegExp("(^|\\s)" + className + "(\\s|$)");

        for (let i = 0; i < tmp.length; i++) {

            if (regex.test(tmp[i].className)) {
                elArray.push(tmp[i]);
            }
        }

        return elArray;
    };
}

if (!document.getElementsByTagName) {
    document.getElementsByClassName = function (className, ctx) {
        let context = ctx ? ( typeof ctx === "string" ? document.querySelector(ctx) : ctx ) : document;
        return context.querySelectorAll && context.querySelectorAll("." + className)
    };
}

if (!Element.prototype.addEventListener) {

    Element.prototype.addEventListener = function addEvent(event, elem, func) {
        if (elem.addEventListener) {
            elem.addEventListener(event, func, false);
        }
        else if (elem.attachEvent) {
            elem.attachEvent("on" + event, func);
        }
        else {
            elem["on" + event] = func;
        }
    }
}
