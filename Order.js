export class Order {
    constructor(sFrom) {
      this.OrderState = {
        WELCOMING: () => {
          let aReturn = [];
          this.stateCur = this.OrderState.SIZE;
          aReturn.push("Welcome to Chatime! Would you like get started on an order for today?");
          if (sInput.to.LowerCase().startsWith('y')){
            aReturn.push("Sounds great!");
          }
          else {
            aReturn.push("No worries, see you soon!");
            this.isDone = true;
          }
          return aReturn;
        },
        SIZE: (sInput) =>{
          let aReturn = [];
          this.stateCur = this.OrderState.DRINK;
          aReturn.push("What size drink would you like to order: regular [+0.00], or large [+0.70]?");
          if (sInput.to.LowerCase().startsWith('r')){
            this.Size = "regular";
            this.Cost = this.Cost + 0;
          }
          else if (sInput.to.LowerCase().startsWith('l')){
            this.Size = "large";
            this.Cost = this.Cost + 0.7;
          }
          else {
            aReturn.push("Sorry, that's not a menu option. Your order will proceed as a regular sized milk tea.");
            this.Cost = this.Cost + 0;
          }
          aReturn.push("Which drink would you like?");
          aReturn.push("We have Matcha Milk Tea, Roasted Milk Tea, Taro Milk Tea, Brown Sugar Milk Tea, Jasmine Jade Milk Tea, Earl Grey Milk Tea, Black Milk Tea");
          return aReturn;  
        },
        DRINK: (sInput) =>{
          let aReturn = [];
          this.stateCur = this.OrderState.MILK;
          if (sInput.toLowerCase().startsWith('r')){
            this.Drink = "Roasted Milk Tea";
            this.Cost = this.Cost + 6;
          }
          else if (sInput.toLowerCase().startsWith('t')){
            this.Drink = "Taro Milk Tea";
            this.Cost = this.Cost + 6;
          }
          else if (sInput.toLowerCase().startsWith('e')){
            this.Drink = "Earl Grey Milk Tea";
            this.Cost = this.Cost + 6;
          }
          else if (sInput.toLowerCase().startsWith('m')){
            this.Drink = "Matcha Milk Tea";
            this.Cost = this.Cost + 6;
          }
          else if (sInput.toLowerCase().startsWith('b')){
            this.Drink = "Brown Sugar Milk Tea";
            this.Cost = this.Cost + 7;
          }
          else if (sInput.toLowerCase().startsWith('j')){
            this.Drink = "Jasmine Jade Milk Tea";
            this.Cost = this.Cost + 6;
          }
          else {
            aReturn.push("Sorry, that's not a possible menu option. Your order will proceed as a black milk tea.");
          }
          aReturn.push("What type of milk would you like?");
          aReturn.push("We have Whole [+0.00], Almond [+0.70], Oat [+0.70] or Soy [+0.70] milk");
          return aReturn;
        },
        MILK: (sInput) =>{
          let aReturn = [];
          this.stateCur = this.OrderState.TOPPING;
          if (sInput.toLowerCase().startsWith('w')){
            this.Milk = "whole",
            this.Cost = this.Cost + 0;
          }
          else if (sInput.toLowerCase().startsWith('a')){
            this.Milk = "almond",
            this.Cost = this.Cost + 0.7;
          }
          else if (sInput.toLowerCase().startsWith('o')){
            this.Milk = "oat";
            this.Cost = this.Cost + 0.7;
          }
          else if (sInput.toLowerCase().startsWith('s')){
            this.Milk = "soy";
            this.Cost = this.Cost + 0.7;
          }
          else {
            this.Milk = "none";
            this.Cost = this.Cost + 0;
            aReturn.push("Sorry that's not a possible dairy or dairy alternative option. Your order will proceed with no dairy.");
          }
          aReturn.push("What toppings would you like to add?");
          aReturn.push("We have Tapioca [+0.70], Pudding [+0.70], Grass Jelly [+0.70], Sago [+0.70], Crystal Boba [+0.70] or No toppings [+0.00]?");
          return aReturn;
        },
        TOPPING: (sInput) =>{
          let aReturn = [];
          this.stateCur = this.OrderState.SUGAR;
          if (sInput.toLowerCase().startsWith('t')){
            this.Top = "tapioca";
            this.Cost = this.Cost + 0.7;
          }
          else if (sInput.toLowerCase().startsWith('p')){
            this.Top = "pudding";
            this.Cost = this.Cost + 0.7;
          }
          else if (sInput.toLowerCase().startsWith('g')){
            this.Top = "grass jelly";
            this.Cost = this.Cost + 0.7;
          }
          else if (sInput.toLowerCase().startsWith('s')){
            this.Top = "sago";
            this.Cost = this.Cost + 0.7;
          }
          else if (sInput.toLowerCase().startsWith('c')){
            this.Top = "crystal boba";
            this.Cost = this.Cost + 0.7;
          }
          else{
            aReturn.push("No toppings were selected. Your order will proceed with no toppings.");
          }
          aReturn.push("What sugar level would you like?");
          aReturn.push("We have 100% (regular) sugar, 80% sugar, 50% (half) sugar, 30% sugar, or 0% (no) sugar");
          return aReturn;
        },
        SUGAR: (sInput) =>{
          let aReturn = [];
          this.stateCur = this.OrderState.ICE;
          if(sInput.startsWith('8')){
            this.Sugar = "80% sugar";
          }
          else if (sInput.startsWith('5')){
            this.Sugar = "50% sugar";
          }
          else if (sInput.startsWith('3')){
            this.Sugar = "30% sugar";
          }
          else if (sInput.toLowerCase().startsWith('0') || sInput.toLowerCase().startsWith('z')){
            this.Sugar = "0% sugar";
          }
          else {
            this.Sugar = "100% (regular) sugar";
            aReturn.push("Your order will proceed with 100% (regular) sugar");
          }
          aReturn.push("Would you like to customize the ice level or temperature of your drink?");
          aReturn.push("We have options for regular ice, light ice, no ice, and a hot version of this drink.");
          return aReturn;
        },
        ICE: (sInput) => {
          let aReturn = [];
          this.stateCur = this.OrderState.FINALIZE;
          if (sInput.toLowerCase().startsWith('l')){
            this.Ice = "Less ice";
          }
          else if (sInput.toLowerCase().startsWith('n')){
            this.Ice = "No ice";
          }
          else if (sInput.toLowerCase().startsWith('h')){
            this.Ice = "Hot drink";
          }
          else {
              this.Ice = "Regular ice";
              aReturn.push("Your order will proceed with the regular level of ice.");
          }
          aReturn.push("Thank you for ordering today with Chatime. Before verifying the contents of your order, would you like to add a croissant?");
          return aReturn;
        },
        FINALIZE: (sInput) =>{
          let aReturn = [];
          this.stateCur = this.OrderState.RESERVING;
          if (sInput.toLowerCase().startsWith('y')){
            this.BakeCode = true;
            this.Cost = this.Cost + 5;
          }
          else if (sInput.toLowerCase().startsWith('n')){
            this.BakeCode = false;
            this.Cost = this.Cost + 0;
          }
          else {
            aReturn.push("Sorry that's not a valid response. Your order will proceed with no croissant add-ons.");
          }
          aReturn.push("Your order is ready to send. To confirm your order type 'yes', to cancel your order type 'cancel'");
          return aReturn;
        },
        RESERVING: (sInput) => {
          let aReturn = [];
          this.stateCur = this.OrderState.CONFIRM;
          this.isDone = true;
          if (sInput.toLowerCase().startsWith('y') || this.BakeCode){
            aReturn.push(`Your SMS order of ${this.Size} ${this.Drink} with ${this.Milk} milk, ${this.Top}, and BakeCode croissant are reserved. Your total for this order is $${this.Cost}.00`);
          }
          else if (sInput.toLowerCase().startsWith('c') || this.BakeCode){
            aReturn.push(`You still need to confirm your SMS order of ${this.Size} ${this.Drink} with ${this.Milk} milk, ${this.Top}, and BakeCode croissant. Your total for this order is $${this.Cost}.00`);
          }
          else if (sInput.toLowerCase().startsWith('y')){
            aReturn.push(`Your SMS order of ${this.Size} ${this.Drink} with ${this.Milk} milk, ${this.Top} is reserved. Your total for this order is $${this.Cost}.00`); 
          }
          else if (sInput.toLowerCase().startsWith('c')){
            aReturn.push(`You still need to confirm your SMS order of ${this.Size} ${this.Drink} with ${this.Milk} milk, ${this.Top}. Your total for this order is $${this.Cost}.00`);
          }
          else {
            aReturn.push("Sorry, there seems to be a problem with your order confirmation. We apologize for the inconvenience and recommend you visit our Waterloo store in-person to resolve this issue.");
            aReturn.push("The address for our Waterloo location is 255 King St North Unit 9");
            this.isDone = true;
          }
          return aReturn;
        },
        CONFIRM: (sInput) => {
          let aReturn = [];
          this.isDone = true;
          if (sInput.toLowerCase().startsWith('y')) {
            aReturn.push("Your order will be ready for pick up in approximately 10 minutes.");
            aReturn.push("Please pick your order at our Waterloo location at 255 King St North Unit 9");
            this.stateCur = this.OrderState.CONFIRM;
          } else if (sInput.toLowerCase().startsWith('c')) {
            aReturn.push("Please verify your order and confirm that you are ready to proceed");
          } else {
            aReturn.push("Thanks for trying out Chatime's SMS ordering system");
            aReturn.push("You can also order in person at our Waterloo location at 255 King St North Unit 9");
            aReturn.push("We'll see you next time")
          }
          return aReturn;
        },
      };
  
      this.stateCur = this.OrderState.WELCOMING;
      this.isDone = false;
      this.BakeCode = false;
      this.Milk = "no";
      this.Size = "regular";
      this.Drink = "black milk tea";
      this.Sugar = "100% (regular)";
      this.Ice = "regular";
      this.Cost = 0;
      this.Top = "no toppings";

    }
    handleInput(sInput) {
      return this.stateCur(sInput);
    }
    isDone() {
      return this.isDone;
    }
  }