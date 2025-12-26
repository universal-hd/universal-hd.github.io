function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function matcher(groupNames, rexp, pathname) {
    const match = pathname.match(rexp);
    if (!match) {
        return null;
    }

    let result = {};
    for (let i = 0; i < groupNames.length; ++i) {
        const paramName = groupNames[i];
        const paramValue = match[i + 1];
        result[paramName] = paramValue;
    }
    return result;
}

function createMatcher(pattern) {
    let rexpSrc = "^";
    let groupNames = [];

    const parts = pattern.split('/').filter(item => item);
    for (let part of parts) {
        if (part.startsWith(":")) {
            groupNames.push(part.slice(1));
            rexpSrc += "\\/([^\\/]*)";
        } else {
            rexpSrc += "\\/" + escapeRegExp(part);
        }
    }

    rexpSrc += "(?:\\/.*)?$";
    return matcher.bind(null, groupNames, new RegExp(rexpSrc));
}

function findMatch(matchers) {
    for (let matcher of matchers) {
        const match = matcher(window.location.pathname);
        if (match) {
            return match;
        }
    }
    return null;
}

const matchers = [createMatcher("series/:number"), createMatcher("film/:number")];
const match = findMatch(matchers);
if (match) {
    const number = match.number;
    document.querySelector(".kinobox").setAttribute("data-kinopoisk", number);
}
