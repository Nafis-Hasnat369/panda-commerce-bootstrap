// problem 2

const h2Text = document.getElementsByTagName("h2");
for (const h2 of h2Text) {
    h2.style.color = "lightblue";
};
// problem: 3

const backPack = document.getElementById("backpack");
backPack.style.backgroundColor = "tomato";
// problem: 4

const cardClass = document.getElementsByClassName("card");
for (const card of cardClass) {
    card.style.borderRadius = "30px";
};

// problem: 5
function clickHandeler() {
    console.log("Yeah mamma, I can click!!!");
};

// problem: 6
const btnAccess = document.getElementsByClassName("panda-btn-buy-now");
for (btn of btnAccess) {
    btn.addEventListener("click", function (event) {
        event.target.style.display = "none";
    });
};

// problem : 9
document.getElementById("subscribe").addEventListener("dblclick", function () {
    document.getElementById("stay-touch").style.backgroundColor = "cyan";
});