import { nationalityToCountryCode } from "./constants";
import { Meal } from "./types";

export const makeHashtags = (item: Meal | null) => {
    var fullText = ''
    if (item?.strTags == null)
    {
        return [false, null]
    }
    const tags = item.strTags.split(',')
    tags.forEach(tag => {
        tag = '#' + tag
        if (fullText.length == 0)
        {
            fullText = tag + ' '
        }
        else
        {
            fullText += tag + ' '
        }
    });

    return [true, fullText]
}

export const convertToFlags = (item: Meal) => {
    return nationalityToCountryCode[item.strArea]
}