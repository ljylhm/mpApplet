const verify = {

    /**
    * @description 获得被检测的数据类型
    * @param {any} obj 检测的数据
    * @return {String} 被检测的数据类型 
    *【摘要】 主要的数据类型
    * String Number Array Object Function Arguments Boolean
    */
    getDataType(data) {
        let _type_name = Object.prototype.toString.call(data);
        if (_type_name) return _type_name.substring(8, _type_name.length - 1);
        else return null;
    },

    // ======== 以下函数用来检测是否是指定数据类型的数据 ========

    /**
    * @description 检测是否是指定数据类型的数据
    * @param {any} obj 检测的数据
    * @return {Boolean} 被检测的数据类型 
    */

    isStr: (data) => verify.getDataType(data) === "String",
    isNumber: (data) => verify.getDataType(data) === "Number",
    isFunction: (data) => verify.getDataType(data) === "Function",
    isArray: (data) => verify.getDataType(data) === "Array",
    isBoolean: (data) => verify.getDataType(data) === "Boolean",
    isArguments: (data) => verify.getDataType(data) === "Arguments",
    isDate: (data) => verify.getDataType(data) === "Date",
    isFile: (data) => verify.getDataType(data) === "File",
    isBlob: (data) => verify.getDataType(data) === "Blob",

    // 因为 Object include Function Array..  是否是面板对象
    isObject(data) {
        if (this.isArray(data)) return false;
        return (data !== null && typeof data === 'object');
    },
    // =========== 检测指定类型函数End ===========
    /**
    * @description 检测是否在浏览器的环境中
    * @return {Boolean} boolean
    */

    inBrowser: function () { // 检查是否在浏览器
        return typeof window !== 'undefined';
    },

    /**
    * @description 检测是否为空对象
    * @param {Object} obj 检测的数据
    * @return {Boolean} boolean
    */
    isEmptyObject(data) {
        console.log("进入到了");
        if (!this.isObject(data)) return false;
        if (Object.keys) return Object.keys(data).length <= 0;
        else { // hack 没有Object.keys的方法情况
            for (let i in data) {
                return false;
            }
            return true;
        }
    }
}

export default verify