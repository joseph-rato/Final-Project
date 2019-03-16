// used to check if objects are empty 
// used especially to see if we need to load all products to a direct link to website

export const isEmpty = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

