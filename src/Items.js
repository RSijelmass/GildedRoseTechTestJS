(function(exports) {
	class Item {
  	constructor(name, sellIn, quality){
    	this.name = name;
    	this.sellIn = sellIn;
    	this.quality = quality;
  	}
	}
	exports.Item = Item;
})(this);

(function(exports) {
	class Sulfuras extends Item {
		updateQuality() { };
	}
	exports.Sulfuras = Sulfuras;
})(this);

(function(exports) {
	class AgedBrie extends Item {
		
		addQuality() {
		 if(this.quality < 50) { this.quality++ };
		};
		
		updateQuality() {
		 this.sellIn-- 
		 
		 this.addQuality()
		 if (this.sellIn < 0) { this.addQuality() };
		};
	};
	exports.AgedBrie = AgedBrie;
})(this);

(function(exports) {
	class Backstage extends Item {
		addQuality() {
		 if(this.quality < 50) { this.quality++ };
		}
		
		updateQuality() {
			this.sellIn-- 
			this.addQuality()

			if (this.sellIn < 11) {	this.addQuality(); }
			if (this.sellIn < 6) { this.addQuality(); }
			if(this.sellIn < 0) { this.quality = 0 };
		};
	};
	exports.Backstage = Backstage;
})(this);

(function(exports) {
class OtherItem extends Item {

	decreaseQuality() {
        if (this.quality > 0) { this.quality-- }
	}
	
	updateQuality() {
		this.sellIn--
		this.decreaseQuality()
 		 if (this.sellIn < 0) {
       this.decreaseQuality()
     }
   };
 	} 
  exports.OtherItem = OtherItem;
})(this);
