export const getParamValues = (url) => {
    return url
        .slice(1)
        .split("&")
        .reduce((prev, curr) => {
            const [title, value] = curr.split("=");
            prev[title] = value;
            return prev;
        }, {});
};

export const cleanUpAuthToken = (str) => {
    const urlSearchParams = new URLSearchParams(str);
    const params = Object.fromEntries(urlSearchParams.entries());
    const codeAuth = params.code;
    return codeAuth;
};

