export function replacePlaceholders(templateHtml, mergeData) {
    return templateHtml.replace(/{{\s*([\w]+)\s*}}/g, (match, p1) => {
        // Support fallback if data missing
        return mergeData[p1] !== undefined ? mergeData[p1] : match;
    });
}
