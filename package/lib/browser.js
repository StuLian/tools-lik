/**
 * @description 返回当前url
 * @param {*} -
 * @return {string} url
 * @example isSubnetMask ('133@qq.com') => true
 */
const currentURL = () => window.location.href;

/**
 * @description 获取url参数（第一种）
 * @param {string} name 获取参数名称
 * @param {string} origin 传入的url, 不传获取地址栏url
 * @return {string} 指定的url中的参数
 * @example isSubnetMask ('133@qq.com') => true
 */
const getUrlParam = (name, origin = null) => {
    const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = null;
    if (origin == null) {
        r = window.location.search.substr(1).match(reg);
    }
    else {
        r = origin.substr(1).match(reg);
    }
    if (r != null)
        return decodeURIComponent(r[2]);
    return '';
};

/**
 * @description 修改url中的参数
 * @param {string} paramName 参数名称
 * @param {string} origin 传入的url
 * @return {string} 修改后的url
 * @example isSubnetMask ('133@qq.com') => true
 */
const replaceParamVal = (paramName, replaceWith) => {
    const oUrl = location.href.toString();
    // eslint-disable-next-line no-eval
    const re = eval('/(' + paramName + '=)([^&]*)/gi');
    location.href = oUrl.replace(re, paramName + '=' + replaceWith);
    return location.href;
};

/**
 * @description 删除 url 中指定的参数
 * @param {string} name 删除的参数名称
 * @return {string} 修改后的 url
 * @example isSubnetMask ('133@qq.com') => true
 */
const deleteUrlParam = (name) => {
    const loca = location;
    const baseUrl = loca.origin + loca.pathname + "?";
    const query = loca.search.substr(1);
    if (query.indexOf(name) > -1) {
        const obj = {};
        const arr = query.split("&");
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].split("=");
            obj[arr[i][0]] = arr[i][1];
        }
        delete obj[name];
        // eslint-disable-next-line no-useless-escape
        const url = baseUrl + JSON.stringify(obj).replace(/[\"\{\}]/g, "").replace(/\:/g, "=").replace(/\,/g, "&");
        return url;
    }
};

/**
 * @description 获取窗口可视范围的高度
 * @param {*} 没有参数
 * @return {number} 窗口可视范围的高度
 * @example isSubnetMask ('133@qq.com') => true
 */
const getClientHeight = () => {
    let clientHeight = 0;
    if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
    }
    else {
        clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
    }
    return clientHeight;
};

/**
 * @description 获取窗口可视范围的宽度
 * @param {*} 没有参数
 * @return {number} 窗口可视范围的宽度
 * @example isSubnetMask ('133@qq.com') => true
 */
const getClientWidth = () => {
    const d = document;
    const a = d.compatMode === "BackCompat" ? d.body : d.documentElement;
    return a.clientWidth;
};

/**
 * @description 获取窗口宽度
 * @param {*} 没有参数
 * @return {number} 获取窗口宽度
 * @example isSubnetMask ('133@qq.com') => true
 */
const getPageWidth = () => {
    const g = document;
    const a = g.body;
    const f = g.documentElement;
    const d = g.compatMode === "BackCompat" ? a : g.documentElement;
    return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);
};

/**
 * @description 获取窗口尺寸
 * @param {*} 没有参数
 * @return {number} 窗口尺寸
 */
const getViewportOffset = () => {
    if (window.innerWidth) {
        return {
            w: window.innerWidth,
            h: window.innerHeight
        };
    }
    else {
        // ie8及其以下
        if (document.compatMode === "BackCompat") {
            // 怪异模式
            return {
                w: document.body.clientWidth,
                h: document.body.clientHeight
            };
        }
        else {
            // 标准模式
            return {
                w: document.documentElement.clientWidth,
                h: document.documentElement.clientHeight
            };
        }
    }
};

/**
 * @description 获取滚动条距离顶部高度
 * @param {*} 没有参数
 * @return {number} 距离顶部高度
 * @example isSubnetMask ('133@qq.com') => true
 */
const getPageScrollTop = () => {
    const a = document;
    return a.documentElement.scrollTop || a.body.scrollTop;
};

/**
 * @description 获取滚动条距左边的宽度
 * @param {*} 没有参数
 * @return {number} 距左边的宽度
 * @example isSubnetMask ('133@qq.com') => true
 */
const getPageScrollLeft = () => {
    const a = document;
    return a.documentElement.scrollLeft || a.body.scrollLeft;
};

/**
 * @description 开启全屏
 * @param {HTMLElement} element
 * @return {number} 开启全屏
 */
const launchFullscreen = (element) => {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    }
    else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    }
    else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
    else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullScreen();
    }
};

/**
 * @description 退出全屏
 * @param {HTMLElement} element
 * @return {number} 退出全屏
 */
const exitFullscreen = () => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
};

/**
 * @description 返回当前滚动条位置
 * @param {HTMLElement} element
 * @return {number} 返回当前滚动条位置
 */
const getScrollPosition = (el = window) => ({
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});

/**
 * @description 滚动到指定元素区域
 * @param {HTMLElement} element
 * @return {*} -
 */
const smoothScroll = (element) => document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
});

/**
 * @description 平滑滚动到页面顶部
 * @param {*} -
 * @return {*} -
 */
const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(exports.scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
};

/**
 * @description 平滑滚动到底部
 * @param {HTMLElement} element
 * @return {*} -
 */
const scrollToBottom = (element) => element.scrollIntoView({ behavior: "smooth", block: "end" });

/**
 * @description http跳转https
 * @param {*} -
 * @return {*} -
 */
const httpsRedirect = () => {
    if (location.protocol !== 'https:')
        location.replace('https://' + location.href.split('//')[1]);
};

/**
 * @description 检查页面底部是否可见
 * @param {*} -
 * @return {*} -
 */
const bottomVisible = () => {
    return document.documentElement.clientHeight + window.scrollY >= (document.documentElement.scrollHeight || document.documentElement.clientHeight);
};

/**
 * @description 打开一个窗口
 * @param { string } url
 * @param { string } windowName
 * @param { number } width
 * @param { number } height
 */
const openWindow = (url, windowName, width, height) => {
    const tmpA = (screen.width / 2.0);
    const tmpB = (screen.height / 2.0);
    const x = parseInt(tmpA.toString()) - width / 2.0;
    const y = parseInt(tmpB.toString()) - height / 2.0;
    const isMSIE = navigator.appName === "Microsoft Internet Explorer";
    if (isMSIE) {
        let p = "resizable=1,location=no,scrollbars=no,width=";
        p = p + width;
        p = p + ",height=";
        p = p + height;
        p = p + ",left=";
        p = p + x;
        p = p + ",top=";
        p = p + y;
        window.open(url, windowName, p);
    }
    else {
        const win = window.open(url, "ZyiisPopup", "top=" +
            y +
            ",left=" +
            x +
            ",scrollbars=" +
            scrollbars +
            ",dialog=yes,modal=yes,width=" +
            width +
            ",height=" +
            height +
            ",resizable=no");
        // eslint-disable-next-line no-eval
        eval("try { win.resizeTo(width, height); } catch(e) { }");
        win === null || win === void 0 ? void 0 : win.focus();
    }
};

/**
 * @description 自适应页面（rem）
 * @param { number } width
 */
const AutoResponse = (width = 750) => {
    const target = document.documentElement;
    target.clientWidth >= 600
        ? (target.style.fontSize = "80px")
        : (target.style.fontSize = target.clientWidth / width * 100 + "px");
};

/**
 * @description cookie 存贮
 * @param {String} key  属性
 * @param {JSON.stringify()} value 存贮值
 * @param {String} expire 过期时间,毫秒数
 */
const cookieSet = (key, value, expire) => {
    const d = new Date();
    d.setDate(d.getDate() + expire);
    document.cookie = `${key}=${value};expires=${d.toUTCString()}`;
};

/**
 * @description cookie 获取
 * @param {String} key  属性
 * @return {cookieValue} cookieValue
 */
const cookieGet = (key) => {
    const cookieStr = unescape(document.cookie);
    const arr = cookieStr.split('; ');
    let cookieValue = '';
    for (let i = 0; i < arr.length; i++) {
        const temp = arr[i].split('=');
        if (temp[0] === key) {
            cookieValue = temp[1];
            break;
        }
    }
    return cookieValue;
};

/**
 * @description 获取文件base64编码
 * @param {file} 文件
 * @param {format}  指定文件格式
 * @param {size}  指定文件大小(字节)
 * @param {formatMsg} 格式错误提示
 * @param {sizeMsg}   大小超出限制提示
 * @returns {Promise<any>}
 */
const fileToBase64String = (file, format = ['jpg', 'jpeg', 'png', 'gif'], size = 20 * 1024 * 1024, formatMsg = '文件格式不正确', sizeMsg = '文件大小超出限制') => {
    return new Promise((resolve, reject) => {
        // 格式过滤
        const suffix = file.type.split('/')[1].toLowerCase();
        let inFormat = false;
        for (let i = 0; i < format.length; i++) {
            if (suffix === format[i]) {
                inFormat = true;
                break;
            }
        }
        if (!inFormat) {
            reject(formatMsg);
        }
        // 大小过滤
        if (file.size > size) {
            reject(sizeMsg);
        }
        // 转base64字符串
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            const res = fileReader.result;
            resolve({ base64String: res, suffix: suffix });
            // eslint-disable-next-line prefer-promise-reject-errors
            reject('异常文件，请重新选择');
        };
    });
}

/**
 * @description cookie 删除
 * @param {String} key  属性
 * @return {cookieValue} cookieValue
 */
const cookieRemove = (key) => {
    document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`;
};

/**
 * @description B转换到KB,MB,GB并保留两位小数
 * @param {number } fileSize  文件大小
 * @return {string} 转换后带单位的文件
 */
const formatFileSize = (fileSize) => {
    let temp;
    if (fileSize < 1024) {
        return fileSize + 'B';
    }
    else if (fileSize < (1024 * 1024)) {
        temp = fileSize / 1024;
        temp = temp.toFixed(2);
        return temp + 'KB';
    }
    else if (fileSize < (1024 * 1024 * 1024)) {
        temp = fileSize / (1024 * 1024);
        temp = temp.toFixed(2);
        return temp + 'MB';
    }
    else {
        temp = fileSize / (1024 * 1024 * 1024);
        temp = temp.toFixed(2);
        return temp + 'GB';
    }
}

/**
 * @description base64 转 file
 * @param {base64} base64
 * @param {string} filename
 * @return {string}
 */
const base64ToFile = (base64, filename) => {
    const arr = base64.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const suffix = mime.split('/')[1]; // 图片后缀
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], `${filename}.${suffix}`, { type: mime });
};

/**
 * @description base64 转 blob
 * @param {base64} base64
 * @return {string} blob
 */
const base64ToBlob = (base64) => {
    const arr = base64.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
};

/**
 * @description 复制到剪贴板
 * @param {any} text
 * @return {boolean} 复制成功或失败
 */
const copyToClipboard = (text) => {
    var _a;
    if ((_a = navigator.clipboard) === null || _a === void 0 ? void 0 : _a.writeText) {
        navigator.clipboard.writeText(text);
        return true;
    }
    else {
        return false;
    }
};

/**
 * @description 检测黑暗模式
 * @param {*} 无参数
 * @return {boolean} 是否为暗黑模式
 */
const isDarkMode = () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

/**
     * @description: 防抖
     * @param {*} callback
     * @param {*} delay
     * @return {function}
     */
const debounce = (callback, delay) => {
    let timer = null
    return function () {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => { callback() }, delay)
    }
}

/**
     * @description: 节流
     * @param {*} callback
     * @param {*} delay
     * @return {function}
     */
const throttle = (callback, delay) => {
    let valid = true
    return function () {
        if (!valid) return
        valid = false
        setTimeout(() => {
            callback()
            valid = true
        }, delay)
    }
}

export default {
    currentURL,
    getUrlParam,
    replaceParamVal,
    deleteUrlParam,
    getClientHeight,
    getClientWidth,
    getPageWidth,
    getViewportOffset,
    getPageScrollTop,
    getPageScrollLeft,
    launchFullscreen,
    exitFullscreen,
    getScrollPosition,
    smoothScroll,
    scrollToTop,
    scrollToBottom,
    httpsRedirect,
    bottomVisible,
    openWindow,
    AutoResponse,
    cookieSet,
    cookieGet,
    fileToBase64String,
    cookieRemove,
    formatFileSize,
    base64ToFile,
    base64ToBlob,
    copyToClipboard,
    isDarkMode,
    debounce,
    throttle
}
