function changeMenu(category){
    if (category === "female") {
        document.body.style.background = getComputedStyle(document.documentElement).getPropertyValue('--color-female');
    }
    else if (category === "male") {
        document.body.style.background = getComputedStyle(document.documentElement).getPropertyValue('--color-male');
    }
    else {
        document.body.style.background = getComputedStyle(document.documentElement).getPropertyValue('--color-child');
    }
}