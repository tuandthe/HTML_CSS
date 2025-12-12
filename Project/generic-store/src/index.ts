import { Store } from "./core/store.js";
import type { Product } from "./interfaces/product.js";
import { getProductSummary } from "./utils/productUtils.js";

function main() {
    console.log("Generic Store Module Loaded");
    const myStore = new Store<Product>();

    const add = myStore.addItem({
        name: "Sample Item",
        price: 100,
        description: "This is a sample item",
        category: "Electronics",
        inStock: true
    })
    // const add2 = myStore.addItem({
    //     name: "Another Item",
    //     price: 50,
    //     description: "This is another item",
    //     category: "Books",
    //     inStock: false
    // })
    const update = myStore.updateItem(1, {
        name: "Updated Sample Item",
        price: 120,
        description: "This is an updated sample item",
        category: "Electronics",
        inStock: true
    });
    const update2 = myStore.updateItem(add.id, {
        name: "Updated Sample Item",
        price: 120,
        description: "This is an updated sample item",
        category: "Electronics",
        inStock: true
    });
    

    const getAll = myStore.getAll();
    console.log("Added Item:", add);
    console.log("Updated Item:", add.id);
    console.log("All Items:", myStore.getAll());
    console.log("Get summaries:", getProductSummary(getAll));
}
main();