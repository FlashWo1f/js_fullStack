import pathToRegexp from 'path-to-regexp';

function compilePath(path, options) {
    const regexp = pathToRegexp(path, [], options);
    return {
        regexp
    }
}
function matchPath(pathName, options = {}) {
    const { path, exact = false, strict = false, sensitive = false } = options;
    const paths = [].concat(path)
    return paths.reduce((matched, path) => {
        if(matched) return matched;
        const { regexp } = compilePath(path, {
            strict,
            sensitive,
            end: exact
        })
        const match = regexp.exec(pathName);
        if(!match) return null;
        return {}
    }, null)
}

export default matchPath