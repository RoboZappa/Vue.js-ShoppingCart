// Developer: Jordan Gilmore
// Project:   Vue Shopping Cart


var app = new Vue({
    el: "#app",
    data: {
        cartQty: 0,
        taxRate: 0.075,
        subTotal: 0,
        itemSelected: "None",
        items: 
            [
                {name: "Boldly Go", ordered: 0, imgSrc: "images/coffee1.jpg", price: 9.99, qty: 7},
                {name: "Creme Supreme", ordered: 0, imgSrc: "images/coffee2.jpg", price: 4.99, qty: 10},
                {name: "Punchie", ordered: 0, imgSrc: "images/coffee3.jpg", price: 6.49, qty: 5}
            ]
        
    },
    methods: {
        // unused at this point
        getName(sentName){
            this.itemSelected = sentName;
        },
        orderItem(sentOrder){
            sentOrder.ordered++;
            sentOrder.qty--;
            this.cartQty++;
            this.subTotal += sentOrder.price;
            
        },
        removeItem(sentReject){
            sentReject.ordered--;
            sentReject.qty++;
            this.subTotal -= sentReject.price;
            // Removes the total from 
            this.cartQty--;
        },
        deleteItem(sentDeletion){
            this.cartQty -= sentDeletion.ordered;
            this.subTotal -= (sentDeletion.price * sentDeletion.ordered);
            sentDeletion.qty += sentDeletion.ordered;
            sentDeletion.ordered = 0;
            
        }

    },
    computed: {
        tax(){
            return (this.subTotal * this.taxRate).toFixed(2);
        },
        final(){
            return ((this.subTotal * this.taxRate) + this.subTotal).toFixed(2);
        }
    }
})
