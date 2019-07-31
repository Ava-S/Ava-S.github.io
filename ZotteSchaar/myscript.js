let totalCost = 0;
let products = {
    "female-option": [0, []],
    "female-two-option": [0, []],
    "male-option": [0, []],
    "child-option": [0, []],
};

let dictionary = {
    "female-option": "Vrouw 1",
    "female-two-option": "Vrouw 2",
    "male-option": "Man",
    "child-option": "Kinderen"
}

let standardCost = {
    "Brushing": "€22,5/€27,5",
    "Opsteken": "€35,-/€50,-",
    "Meisjes (12j)": "€17,5/€20,-"
}
let mode = "female-option";

$(function () {                       //run when the DOM is ready
    $(".sidebar-item").click(function () {  //use a class, since your ID gets mangled
        document.body.style.background = $(this).css('background-color');
        if ($(this).hasClass("female")) {
            $(".female-option.combo").removeClass("non-visible");
            $(".female-option.normal").addClass("non-visible");
            $(".female-two-option").addClass("non-visible");
            $(".option-type").removeClass('active');
            $(".option-type:contains('Combo')").addClass('active');
            $(".male-option").addClass("non-visible");
            $(".child-option").addClass("non-visible");
            $(".child-two-option").addClass("non-visible");
            $(".child-three-option").addClass("non-visible");
            $(".option-type").removeClass("non-visible");
            $(".child-title").addClass("non-visible");
            mode = "female-option";
        } else if ($(this).hasClass("female-two")){
            $(".female-two-option.combo").removeClass("non-visible");
            $(".female-two-option.normal").addClass("non-visible");
            $(".option-type").removeClass('active');
            $(".option-type:contains('Combo')").addClass('active');
            $(".female-option").addClass("non-visible");
            $(".male-option").addClass("non-visible");
            $(".child-option").addClass("non-visible");
            $(".child-two-option").addClass("non-visible");
            $(".child-three-option").addClass("non-visible");
            $(".option-type").removeClass("non-visible");
            $(".child-title").addClass("non-visible");
            mode = "female-two-option"
        } else if ($(this).hasClass("male")) {
            $(".female-option").addClass("non-visible");
            $(".female-two-option").addClass("non-visible");
            $(".male-option").removeClass("non-visible");
            $(".child-option").addClass("non-visible");
            $(".child-two-option").addClass("non-visible");
            $(".child-three-option").addClass("non-visible");
            $(".option-type").addClass("non-visible");
            $(".child-title").addClass("non-visible");
            mode = "male-option";
        } else {
            $(".female-option").addClass("non-visible");
            $(".female-two-option").addClass("non-visible");
            $(".male-option").addClass("non-visible");
            $(".child-option").removeClass("non-visible");
            $(".child-two-option").removeClass("non-visible");
            $(".child-three-option").removeClass("non-visible");
            $(".option-type").addClass("non-visible");
            $(".child-title").removeClass("non-visible");
                mode = "child-option";
        }
    })
});

$(function(){
    $(".option-type").click(function(){
        $(".option-type").removeClass("active");
        $(this).addClass("active");
            if($(this).children(".type").text() === "Combo"){
                $("." + mode + ".combo").removeClass("non-visible");
                $("." + mode + ".normal").addClass("non-visible");
            } else if ($(this).children(".type").text() === "Normaal"){
                $("." + mode + ".combo").addClass("non-visible");
                $("." + mode + ".normal").removeClass("non-visible");
            }
        }
    )
})

$(function () {                       //run when the DOM is ready
    $(".option").click(function () {  //use a class, since your ID gets mangled
        let type;
        if ($(this).hasClass("child-option")) {
            mode = "child-option";
        }else if ($(this).hasClass("child-two-option")){
            mode = "child-two-option";
        } else if ($(this).hasClass("child-three-option")) {
            mode = "child-three-option";
        }
        if ($(this).hasClass("activated")) {
            $(this).removeClass("activated");      //add the class to the clicked element
            type = $(this).children(".type").text();
            cost = $(this).children(".cost").text();
            checkRemoveCosts(type, cost);
        } else {
            type = $(this).children(".type").text();
            cost = $(this).children(".cost").text();
            checkAddCosts(type, cost);
        }
    })
});

function checkRemoveCosts(type, cost){
    if (cost.includes("Nieuw")){
        $("." + mode +":contains('" + type + "') .cost").text(standardCost[type]);
    }
    removeProduct(type, cost);

}

function checkAddCosts(type, cost){
    if (cost.includes("/")){
        $("#modal-price .error").addClass("non-visible");
        $("#modal-price #modal-type").text(type);
        $("#modal-price .modal-body label").text("Prijs (" +  cost  + " ): ");
        $("#modal-price").find('input[name="NewCost"]').val("")
        $("#modal-price").modal();
    } else {
        addProduct(type, cost);
    }
}

$(function () {                       //run when the DOM is ready
    $("#cancel_receipt").click(function () {
        products = {
            "female-option": [0, []],
            "female-two-option": [0, []],
            "male-option": [0, []],
            "child-option": [0, []],
        };
        totalCost = 0;
        $("#sum").text(calculateDisplaySum(totalCost));
        $("#receipt").html("");
        $(".option").removeClass("activated");

    })
});

$(function () {                       //run when the DOM is ready
    $("#checkout_receipt").click(function () {
        products = {
            "female-option": [0, []],
            "female-two-option": [0, []],
            "male-option": [0, []],
            "child-option": [0, []],
        };
        totalCost = 0;
        $("#sum").text(calculateDisplaySum(totalCost));
        $("#receipt").html("");
        $(".option").removeClass("activated");

    })
});

$(function () {                       //run when the DOM is ready
    $(".save").click(function () {
        let newCost = $("#modal-price").find('input[name="NewCost"]').val();
        if (newCost == 0){
            $("#modal-price .error").removeClass("non-visible");
        } else {
            $("#modal-price .error").addClass("non-visible");
            let newType = $("#modal-price #modal-type").text();
            $("." + mode +":contains('" + newType + "') .cost").text("Nieuw: " + calculateDisplaySum(newCost));
            addProduct(newType, "Nieuw: " + calculateDisplaySum(newCost));
            $('#modal-price').modal('toggle');
        }
    })
});

function addProduct(type, cost) {
    $("." + mode +":contains('" + type + "')").addClass("activated");      //add the class to the clicked element
    if (mode === "child-two-option" || mode === "child-three-option"){
        mode = "child-option";
    }
    totalCost += parseFloat(cost.replace(/[^0-9,]/g, '').replace(',', '.'));
    let sum = calculateDisplaySum(totalCost)
    $("#sum").text(sum);

    products[mode][0] += parseFloat(cost.replace(/[^0-9,]/g, '').replace(',', '.'));
    products[mode][1].push(type + " (" + cost +")");
    let setOfProducts = defineSetOfProducts();
    $("#receipt").html(setOfProducts);
}

function removeProduct(type, cost) {
    if (mode === "child-two-option" || mode === "child-three-option"){
        mode = "child-option";
    }
    totalCost -= parseFloat(cost.replace(/[^0-9,]/g, '').replace(',', '.'));
    let sum = calculateDisplaySum(totalCost);
    $("#sum").text(sum);
    console.log(products);
    console.log(cost);
    products[mode][0] -= parseFloat(cost.replace(/[^0-9,]/g, '').replace(',', '.'));
    let index = products[mode][1].indexOf(type + " (" + cost + ")");
    console.log(type + " (" + cost + ")");
    if (index > -1) {
        products[mode][1].splice(index, 1);
    }
    console.log(products);
    let setOfProducts = defineSetOfProducts();
    $("#receipt").html(setOfProducts);
}

function defineSetOfProducts() {
    let setOfTypes = ""
    let first = true;
    for(const k in products) {
        const v = products[k];
        if (v[0] > 0){
             if (first){
                 first = false;
             } else {
                 setOfTypes += "<br> \+ ";
             }
             setOfTypes += dictionary[k] + " (" + calculateDisplaySum(v[0]) + ")";
        }
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