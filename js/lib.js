//ghi js
const product={
    name: "EO CHANG HY",
    price:250
    description: "đây là lan, người đén từ angola, hiện tại đang sinh sống tại Trà Vinh",
    image:"../assets/images/rose.webp",
    link:"chi-tiet .html"


}
function createItem(ibj)
{
    //Xác định khung chứa product-list
            const listProducts = document.getElementById("product-list"); // tác động đến thẻ <div có id = "product-list"

        // tạo container có class="item"

        const item = document.createElement("div"); // <div><div>

        item.setAttribute("class", "item col card");

         // tạo 2 khung chứa hình ảnh và thông tin
         // tạo 1 container chúa hình ảnh có class = "image"==> chỉ có một con là <img>

        const containerImage = document.createElement("div");

        containerImage.setAttribute("class", "image card-body");

        // tạo ảnh

        const img = document.createElement("img");

        img.setAttribute("src",obj.image);

        img.setAttribute("alt", ojb.name);

        img.setAttribute("style", "width:100%; max-width:150px");

        img.setAttribute("class","card-img-top rounded-cirle");


        // đưa ảnh vào khung chứa ảnh 

        containerImage.appendChild(img);

        // tạo 1 container chưa thông tin sản phẩm có class = "info" ==>

        const containerInfo = document.createElement("div");

        containerInfo.setAttribute("class", "info");

        // tên sản phẩm

        const nameProduct = document.createElement("p");

        nameProduct.innerHTML = "NGƯỜI CHUPPI";

        // giá

        const price = document.createElement("p");

        price.innerHTML = "3 cây vàng để lấy được Lan";

        // mô tả

        const description = document.createElement("p");

        description.innerHTML = `

            Đây là Lan đã độc thân được 20 năm.<br>

            Chưa từng làm người yêu ai nhưng lại chứng kiến không biết bao nhiêu cuộc tình của người khác.<br>

            Hiện tại Lan vẫn đang chờ một người xuất hiện, nhưng có vẻ người đó đang đi lạc hơi lâu.<br>

            Chuyên ngành: ăn rồi ngủ.

        `;

        // liên kết

        const linkProduct = document.createElement("a");

        linkProduct.innerHTML = "Xem chi tiết";

        linkProduct.setAttribute("href", "page6.html");

        // gắn các phần tử vào khung thông tin

        containerInfo.appendChild(nameProduct);

        containerInfo.appendChild(price);

        containerInfo.appendChild(description);

        containerInfo.appendChild(linkProduct);

        // gắn hình ảnh và thông tin vào item

        item.appendChild(containerImage);

        item.appendChild(containerInfo);

        // đưa item vào danh sách sản phẩm

        listProducts.appendChild(item);

    </script>

</body>

</html>
}