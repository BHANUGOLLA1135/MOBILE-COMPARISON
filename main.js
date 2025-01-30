for (var i = 1; i < product.length; i++) {
    document.getElementById("select1").innerHTML += `
    <option value="${i}">${product[i].title}</option>
    `;
    document.getElementById("select2").innerHTML += `
    <option value="${i}">${product[i].title}</option>
    `;
}

function item1(a) {
    var select2 = document.getElementById("select2").value;
    if (a != select2) {
        document.getElementById("img1").src = product[a].image;
        document.getElementById("price1").innerHTML = "INR " + product[a].price;
        // Create bullet points for each sentence
        document.getElementById("desc1").innerHTML = '<ul><li>' + product[a].description.split('. ').join('.</li><li>') + '</li></ul>';
        document.getElementById("brand1").innerHTML = product[a].brand;
    } else {
        // Reset the fields if the same product is selected in both dropdowns
        resetFields('select1', 'img1', 'price1', 'desc1', 'brand1');
    }
}

function item2(a) {
    var select1 = document.getElementById("select1").value;
    if (a != select1) {
        document.getElementById("img2").src = product[a].image;
        document.getElementById("price2").innerHTML = "INR " + product[a].price;
        // Create bullet points for each sentence
        document.getElementById("desc2").innerHTML = '<ul><li>' + product[a].description.split('. ').join('.</li><li>') + '</li></ul>';
        document.getElementById("brand2").innerHTML = product[a].brand;
    } else {
        // Reset the fields if the same product is selected in both dropdowns
        resetFields('select2', 'img2', 'price2', 'desc2', 'brand2');
    }
}

// Helper function to reset fields
function resetFields(selectId, imgId, priceId, descId, brandId) {
    document.getElementById(selectId).selectedIndex = 0;
    document.getElementById(imgId).src = product[0].image;
    document.getElementById(priceId).innerHTML = "";
    document.getElementById(descId).innerHTML = "";
    document.getElementById(brandId).innerHTML = "";
}
