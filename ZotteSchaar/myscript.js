let totalCost = 0;
let setOfTypes = "";
let products = [];

$(function () {                       //run when the DOM is ready
    $(".sidebar-item").click(function () {  //use a class, since your ID gets mangled
        if ($(this).hasClass("female")) {
            document.body.style.background = getComputedStyle(document.documentElement).getPropertyValue('--color-female');
            $(".female-option").removeClass("non-visible");
            $(".male-option").addClass("non-visible");
            $(".child-option").addClass("non-visible");
        } else if ($(this).hasClass("male")) {
            document.body.style.background = getComputedStyle(document.documentElement).getPropertyValue('--color-male');
            $(".female-option").addClass("non-visible");
            $(".male-option").removeClass("non-visible");
            $(".child-option").addClass("non-visible");
        } else {
            document.body.style.background = getComputedStyle(document.documentElement).getPropertyValue('--color-child');
            $(".female-option").addClass("non-visible");
            $(".male-option").addClass("non-visible");
            $(".child-option").removeClass("non-visible");
        }
    })
});

$(function () {                       //run when the DOM is ready
    $(".option").click(function () {  //use a class, since your ID gets mangled
        let type;
        if ($(this).hasClass("activated")) {
            $(this).removeClass("activated");      //add the class to the clicked element
            type = $(this).children(".type").text();
            cost = $(this).children(".cost").text();
            removeProduct(type, cost);
        } else {
            $(this).addClass("activated");      //add the class to the clicked element
            type = $(this).children(".type").text();
            cost = $(this).children(".cost").text();
            addProduct(type, cost);
        }
    })
});

function addProduct(type, cost) {

    totalCost += parseFloat(cost.replace(/[^0-9,]/g, '').replace(',', '.'));
    let sum = calculateDisplaySum(totalCost)
    $("#sum").text(sum);

    products.push(type + " (" + cost + ")");
    let setOfTypes = defineSetOfTypes(products);
    $("#receipt").html(setOfTypes);
}

function removeProduct(type, cost) {
    totalCost -= parseFloat(cost.replace(/[^0-9,]/g, '').replace(',', '.'));
    let sum = calculateDisplaySum(totalCost);
    $("#sum").text(sum);

    let index = products.indexOf(type + " (" + cost + ")");
    if (index > -1) {
        products.splice(index, 1);
    }
    let setOfTypes = defineSetOfTypes(products);
    $("#receipt").html(setOfTypes);
}

function defineSetOfTypes(products) {
    let setOfTypes = ""
    let counter = 0;
    products.forEach(function (element) {
            if (counter === 0) {
                setOfTypes += element;
            } else if (counter === 5){
                setOfTypes = "<div class='row'><div class='col-6'>" + setOfTypes + "</div><div class='col-6'>";
                setOfTypes += "\+" + element;
            }
            else {
                setOfTypes += "<br> \+ " + element;
            }
            counter += 1;
        }
    )

    if (counter > 5){
        setOfTypes += "</div>"
    }

    return setOfTypes;

}

function calculateDisplaySum(totalCost) {
    let sum;
    if (totalCost * 2 % 2 === 0) {
        sum = totalCost + ",-";
    } else {
        sum = totalCost;
    }

    sum = "€" + sum;

    return sum;
}