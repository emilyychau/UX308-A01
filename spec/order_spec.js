import { Order } from '../Order.js'

describe("Tests all stages of an order", function() {
    it("test hello", function() {
        const oOrder = new Order("002-028-2025");
        const aResults = oOrder.handleInput("hello");
        expect(aResults[0]).toBe("Welcome to Chatime! Let’s get started on an order for you today.")
    });
    it("test start order", function() {
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        expect(aResults[0]).toBe("What size drink would you like to order: regular [+0.00], or large [+0.70]?")
    });
    it("test defer order", function() {
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("no");
        expect(aResults[0]).toBe("Thanks for trying our reservation system")
    });
  });
  
  