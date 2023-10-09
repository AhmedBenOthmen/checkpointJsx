import React from "react";
import { product } from "./product.js";

function ProductImage () {

    return (
        <div>
            
            <img src={product.url}></img>

        </div>
    )

}
export default ProductImage;