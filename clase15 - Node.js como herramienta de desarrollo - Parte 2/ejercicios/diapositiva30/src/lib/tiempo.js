const getTime = () => {
    return {
        fyh: new Date().toLocaleTimeString(),
        timeStamp: Date.now()
    };
};

export {
    getTime
}