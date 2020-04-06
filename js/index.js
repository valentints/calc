let btnStart = document.getElementById("start");
let bidgetValue = document.querySelector(".budget-value");
let yearValue = document.querySelector(".year-value");
let monthValue = document.querySelector(".month-value");
let dayValue = document.querySelector(".day-value");

let expensBtn = document.querySelector(".expenses-item-btn");
let expensItems = document.querySelectorAll(".expenses-item");
let expensesValue = document.querySelector(".expenses-value");

let optionalexpensesItem = document.querySelectorAll(".optionalexpenses-item")
let optionalexpensesBtn = document.querySelector(".optionalexpenses-btn");
let optionalExpensesValue = document.querySelector(".optionalexpenses-value")

let countBudgetBtn = document.querySelector(".count-budget-btn");
let countBudget = document.querySelector(".count-budget");
let levelValue = document.querySelector(".level-value");
let dayBudget = document.querySelector(".daybudget");
let dayBudgetttt = document.querySelector(".daybudget-value");

let chooseIncome = document.querySelector(".choose-income");
let incomeValue = document.querySelector(".income-value");
let checkSave = document.getElementById("savings");

let chooseSum = document.querySelector(".choose-sum");
let choosePercent = document.querySelector(".choose-percent");
let monthsavingsValue = document.querySelector(".monthsavings-value");
let yearsavingsValue = document.querySelector(".yearsavings-value");


let money, time;


checkSave.addEventListener('click', function () {
    if (checkSave.checked == true) {
        chooseSum.setAttribute("disabled", false);
        choosePercent.setAttribute("disabled", false);

        chooseSum.addEventListener('input', function () {

            let sum = +chooseSum.value;
            let percent = +choosePercent.value;
            appData.monthIncome = sum / 100 / 12 * percent;
            appData.yearIncome = sum / 100 * percent;

            monthsavingsValue.textContent = appData.monthIncome.toFixed();
            yearsavingsValue.textContent = appData.yearIncome.toFixed();


        });
        choosePercent.addEventListener('input', function () {
            {

                let sum = +chooseSum.value;
                let percent = +choosePercent.value;
                appData.monthIncome = (sum / 100 / 12 * percent).toFixed(1);
                appData.yearIncome = (sum / 100 * percent).toFixed(1);

                monthsavingsValue.textContent = appData.monthIncome;
                yearsavingsValue.textContent = appData.monthIncome;

            }
        });

    } else {
        chooseSum.setAttribute("disabled", true);
        choosePercent.setAttribute("disabled", true);
    }
});




/*  if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});
*/





chooseIncome.addEventListener('input', function () {
    let items = chooseIncome.value;
    appData.income = items.split(",");
    incomeValue.textContent = appData.income;

});

countBudgetBtn.addEventListener('click', function () {

    if (appData.budget != undefined) {

        appData.moneyPerDay = (appData.budget / 30).toFixed();
        countBudget.textContent = appData.moneyPerDay;
        dayBudget.textContent = appData.moneyPerDay;
        dayBudgetttt.textContent = appData.moneyPerDay;
        if (appData.moneyPerDay < 1000) {
            levelValue.textContent = "muy mal!";
        } else if (appData.moneyPerDay < 5000) {
            levelValue.textContent = " mal!";
        } else if (appData.moneyPerDay < 10000) {
            levelValue.textContent = "bien!";
        } else {
            levelValue.textContent = "perfecto!";
        }
    } else {

        countBudget.textContent = "commetiste erros";
        dayBudget.textContent = "commetiste erros";
        dayBudgetttt.textContent = "commetiste erros";

    }

});



optionalexpensesBtn.addEventListener('click', function () {
    for (let i = 0; i < 3; i++) {
        let opt = optionalexpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
    }
})



expensBtn.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < expensItems.length; i++) {
        let a = expensItems[i].value;
        let b = expensItems[++i].value;

        if ((typeof (a)) == 'string' && a != null && a !== " " &&
            a.length <= 50) {
            appData.expenses[a] = b;
            console.log("salio");
            sum += +b;
        } else {
            i = i - 1;
        }
    }
    expensesValue.textContent = sum;

});

btnStart.addEventListener('click', function () {
    money = +prompt('Ingreso mensual?', '');
    time = prompt('Fech actual YYYY-MM-DD', " ");

    while (isNaN(money) || money == " " || money == null || money == false) {
        money = +prompt('Agrega tu ingreso mensual?', '');
    }

    appData.budget = money;
    appData.timeData = time;

    bidgetValue.textContent = money.toFixed(2);
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDay();

});

appData = {

    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,



    checkSaving: function () {
        if (appData.savings == true) {
            let save = +prompt("Ahorro bancario", " ");
            let percent = +prompt("Que porcentaje", " ");

            appData.monthIncome = (save / 100 / 12 * percent).toFixed(2);
            alert("Su ingreso mensual del depósito" + appData.monthIncome);
        }
    },



    chooseIncome: function () {

        appData.income.push(prompt("Algo mas?", " ")),
            appData.income.sort();

    },

};