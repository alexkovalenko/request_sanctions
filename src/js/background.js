const sanction_keyvords = [
    "vk.com",
    "kaspersky.ru",
    "drweb.ru",
    "yandex.ru",
    "auto.ru",
    "kinopoisk.ru",
    "yandex.ua",
    "ok.ru"
];

function shouldBlockRequest(details) {
    for (let sanction_keyvord of sanction_keyvords) {
        if (details.url.indexOf(sanction_keyvord) != -1) {
            return true;
        }
    }
    return false;
}

chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        return {cancel: shouldBlockRequest(details)};
    },
    {urls: ["<all_urls>"]},
    ["blocking"]);