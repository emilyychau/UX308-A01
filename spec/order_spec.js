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
        expect(aResults[0]).toBe("No worries, see you soon!")
    });
    it("test size regular", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        expect(aResults1[0]).toBe("Which drink would you like?")
    });
    it("test size large", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        expect(aResults1[0]).toBe("Which drink would you like?")
    });
    it("test drink type - regular matcha", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("matcha milk tea");
        expect(aResults2[0]).toBe("What type of milk would you like?")
    });
    it("test drink type - large matcha", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("matcha milk tea");
        expect(aResults2[0]).toBe("What type of milk would you like?")
    });
    it("test drink type - regular roasted", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("roasted milk tea");
        expect(aResults2[0]).toBe("What type of milk would you like?")
    });
    it("test drink type - large roasted", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("roasted milk tea");
        expect(aResults2[0]).toBe("What type of milk would you like?")
    });
    it("test drink type - regular taro", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("taro milk tea");
        expect(aResults2[0]).toBe("What type of milk would you like?")
    });
    it("test drink type - large taro", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("taro milk tea");
        expect(aResults2[0]).toBe("What type of milk would you like?")
    });
    it("test drink type - regular earl grey", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("earl grey milk tea");
        expect(aResults2[0]).toBe("What type of milk would you like?")
    });
    it("test drink type - large earl grey", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("earl grey milk tea");
        expect(aResults2[0]).toBe("What type of milk would you like?")
    });
    it("test drink type - regular b/s", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("brown sugar milk tea");
        expect(aResults2[0]).toBe("What type of milk would you like?")
    });
    it("test drink type - large b/s", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("brown sugar milk tea");
        expect(aResults2[0]).toBe("What type of milk would you like?")
    });
    it("test drink type - regular jasmine", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("jasmine jade milk tea");
        expect(aResults2[0]).toBe("What type of milk would you like?")
    });
    it("test drink type - large jasmine", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("jasmine jade milk tea");
        expect(aResults2[0]).toBe("What type of milk would you like?")
    });
    it("test whole milk - regular matcha", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("matcha milk tea");
        const aResults3 = oOrder.handleInput("whole");
        expect(aResults3[0]).toBe("What toppings would you like to add?")
    });
    it("test whole milk - large matcha", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("matcha milk tea");
        const aResults3 = oOrder.handleInput("whole");
        expect(aResults3[0]).toBe("What toppings would you like to add?")
    });
    it("test almond milk - regular matcha", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("matcha milk tea");
        const aResults3 = oOrder.handleInput("almond");
        expect(aResults3[0]).toBe("What toppings would you like to add?")
    });
    it("test almond milk - large matcha", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("matcha milk tea");
        const aResults3 = oOrder.handleInput("almond");
        expect(aResults3[0]).toBe("What toppings would you like to add?")
    });
    it("test oat milk - regular matcha", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("matcha milk tea");
        const aResults3 = oOrder.handleInput("oat");
        expect(aResults3[0]).toBe("What toppings would you like to add?")
    });
    it("test oat milk - large matcha", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("matcha milk tea");
        const aResults3 = oOrder.handleInput("oat");
        expect(aResults3[0]).toBe("What toppings would you like to add?")
    });
    it("test soy milk - regular matcha", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("matcha milk tea");
        const aResults3 = oOrder.handleInput("soy");
        expect(aResults3[0]).toBe("What toppings would you like to add?")
    });
    it("test soy milk - large matcha", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("matcha milk tea");
        const aResults3 = oOrder.handleInput("soy");
        expect(aResults3[0]).toBe("What toppings would you like to add?")
    });
    it("test whole milk - regular roasted", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("roasted milk tea");
        const aResults3 = oOrder.handleInput("whole");
        expect(aResults3[0]).toBe("What toppings would you like to add?")
    });
    it("test whole milk - large roasted", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("roasted milk tea");
        const aResults3 = oOrder.handleInput("whole");
        expect(aResults3[0]).toBe("What toppings would you like to add?")
    });
    it("test almond milk - regular roasted", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("roasted milk tea");
        const aResults3 = oOrder.handleInput("almond");
        expect(aResults3[0]).toBe("What toppings would you like to add?")
    });
    it("test almond milk - large roasted", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("roasted milk tea");
        const aResults3 = oOrder.handleInput("almond");
        expect(aResults3[0]).toBe("What toppings would you like to add?")
    });
    it("test oat milk - regular roasted", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("roasted milk tea");
        const aResults3 = oOrder.handleInput("oat");
        expect(aResults3[0]).toBe("What toppings would you like to add?")
    });
    it("test oat milk - large roasted", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("roasted milk tea");
        const aResults3 = oOrder.handleInput("oat");
        expect(aResults3[0]).toBe("What toppings would you like to add?")
    });
    it("test soy milk - regular roasted", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("roasted milk tea");
        const aResults3 = oOrder.handleInput("soy");
        expect(aResults3[0]).toBe("What toppings would you like to add?")
    });
    it("test soy milk - large roasted", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("roasted milk tea");
        const aResults3 = oOrder.handleInput("soy");
        expect(aResults3[0]).toBe("What toppings would you like to add?")
    });
    it("test whole milk - regular earl", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("earl grey milk tea");
        const aResults3 = oOrder.handleInput("whole");
        expect(aResults3[0]).toBe("What toppings would you like to add?")
    });
    it("test whole milk - large earl", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("earl grey milk tea");
        const aResults3 = oOrder.handleInput("whole");
        expect(aResults3[0]).toBe("What toppings would you like to add?")
    });
    it("test almond milk - regular earl", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("earl grey milk tea");
        const aResults3 = oOrder.handleInput("almond");
        expect(aResults3[0]).toBe("What toppings would you like to add?")
    });
    it("test almond milk - large earl", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("earl grey milk tea");
        const aResults3 = oOrder.handleInput("almond");
        expect(aResults3[0]).toBe("What toppings would you like to add?")
    });
    it("test oat milk - regular earl", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("earl grey milk tea");
        const aResults3 = oOrder.handleInput("oat");
        expect(aResults3[0]).toBe("What toppings would you like to add?")
    });
    it("test oat milk - large earl", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("earl grey milk tea");
        const aResults3 = oOrder.handleInput("oat");
        expect(aResults3[0]).toBe("What toppings would you like to add?")
    });
    it("test soy milk - regular earl", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("earl grey milk tea");
        const aResults3 = oOrder.handleInput("soy");
        expect(aResults3[0]).toBe("What toppings would you like to add?")
    });
    it("test soy milk - large earl", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("earl grey milk tea");
        const aResults3 = oOrder.handleInput("soy");
        expect(aResults3[0]).toBe("What toppings would you like to add?")
    });
    it("test whole milk - regular earl", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("earl grey milk tea");
        const aResults3 = oOrder.handleInput("whole");
        expect(aResults3[0]).toBe("What toppings would you like to add?")
    });
    it("test whole milk - large earl", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("earl grey milk tea");
        const aResults3 = oOrder.handleInput("whole");
        expect(aResults3[0]).toBe("What toppings would you like to add?")
    });
    it("test almond milk - regular earl", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("earl grey milk tea");
        const aResults3 = oOrder.handleInput("almond");
        expect(aResults3[0]).toBe("What toppings would you like to add?")
    });
    it("test almond milk - large earl", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("earl grey milk tea");
        const aResults3 = oOrder.handleInput("almond");
        expect(aResults3[0]).toBe("What toppings would you like to add?")
    });
    it("test oat milk - regular earl", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("earl grey milk tea");
        const aResults3 = oOrder.handleInput("oat");
        expect(aResults3[0]).toBe("What toppings would you like to add?")
    });
    it("test oat milk - large earl", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("earl grey milk tea");
        const aResults3 = oOrder.handleInput("oat");
        expect(aResults3[0]).toBe("What toppings would you like to add?")
    });
    it("test soy milk - regular earl", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("earl grey milk tea");
        const aResults3 = oOrder.handleInput("soy");
        expect(aResults3[0]).toBe("What toppings would you like to add?")
    });
    it("test soy milk - large earl", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("earl grey milk tea");
        const aResults3 = oOrder.handleInput("soy");
        expect(aResults3[0]).toBe("What toppings would you like to add?")
    });

    // stopped at earl grey
    it("test pearl - regular matcha", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("matcha milk tea");
        const aResults3 = oOrder.handleInput("whole");
        const aResults4 = oOrder.handleInput("tapioca");
        expect(aResults4[0]).toBe("What sugar level would you like?")
    });
    it("test pudding - regular matcha", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("matcha milk tea");
        const aResults3 = oOrder.handleInput("whole");
        const aResults4 = oOrder.handleInput("pudding");
        expect(aResults4[0]).toBe("What sugar level would you like?")
    });
    it("test grass jelly - regular matcha", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("matcha milk tea");
        const aResults3 = oOrder.handleInput("whole");
        const aResults4 = oOrder.handleInput("grass jelly");
        expect(aResults4[0]).toBe("What sugar level would you like?")
    });
    it("test sago - regular matcha", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("matcha milk tea");
        const aResults3 = oOrder.handleInput("whole");
        const aResults4 = oOrder.handleInput("sago");
        expect(aResults4[0]).toBe("What sugar level would you like?")
    });
    it("test crystal - regular matcha", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("regular");
        const aResults2 = oOrder.handleInput("matcha milk tea");
        const aResults3 = oOrder.handleInput("whole");
        const aResults4 = oOrder.handleInput("crystal pearl");
        expect(aResults4[0]).toBe("What sugar level would you like?")
    });
    it("test pearl - large matcha", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("matcha milk tea");
        const aResults3 = oOrder.handleInput("whole");
        const aResults4 = oOrder.handleInput("pearl");
        expect(aResults4[0]).toBe("What sugar level would you like??")
    });
    it("test pudding - large matcha", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("matcha milk tea");
        const aResults3 = oOrder.handleInput("whole");
        const aResults4 = oOrder.handleInput("pudding");
        expect(aResults4[0]).toBe("What sugar level would you like??")
    });
    it("test grass jelly - large matcha", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("matcha milk tea");
        const aResults3 = oOrder.handleInput("whole");
        const aResults4 = oOrder.handleInput("grass jelly");
        expect(aResults4[0]).toBe("What sugar level would you like??")
    });
    it("test sago - large matcha", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("matcha milk tea");
        const aResults3 = oOrder.handleInput("whole");
        const aResults4 = oOrder.handleInput("sago");
        expect(aResults4[0]).toBe("What sugar level would you like??")
    });
    it("test crystal pearl - large matcha", function(){
        const oOrder = new Order("002-028-2025");
        oOrder.handleInput("hello")
        const aResults = oOrder.handleInput("yes");
        const aResults1 = oOrder.handleInput("large");
        const aResults2 = oOrder.handleInput("matcha milk tea");
        const aResults3 = oOrder.handleInput("whole");
        const aResults4 = oOrder.handleInput("crystal pearl");
        expect(aResults4[0]).toBe("What sugar level would you like??")
    });
  });
  
  