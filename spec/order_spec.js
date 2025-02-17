import { Order } from '../Order.js'

describe("Tests all stages of an order", function() {
    it("test hello", function() {
        const oOrder = new Order("002-028-2025");
        const aResults = oOrder.handleInput("hello");
        expect(aResults[0]).toBe("Welcome to Chatime! Let’s get started on an order for you today.")
    });
    it("test size regular", function() {
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        expect(aResults[0]).toBe("Your rapid test is reserved under the phone number 999-999-9999")
    });
    it("test size large", function() {
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("no");
        expect(aResults[0]).toBe("Thanks for trying our reservation system")
    });
  });
  
  