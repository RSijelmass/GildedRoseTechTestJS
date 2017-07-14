class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class AgedBrie extends Item {
	handleBrie() {
      this.sellIn-- 
				if(this.quality < 50) {
          this.quality++
				}
				
      	if (this.sellIn < 0) {
          if (this.quality < 50) {
            this.quality++
         	}
				};
		return this.quality
	};

}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

	checkBoundariesQuality(item) {
		if(item.quality < 50 && (item.quality > 0 || item.name === "Aged Brie")) { return true }
	};

 	handleSulfuras(item) { };


	handleBackstage(item) {

      item.sellIn-- 
        if (this.checkBoundariesQuality(item)) {
          item.quality++
            if (item.sellIn < 11) {
              if (item.quality < 50) {
                item.quality++
              }
            }
            if (item.sellIn < 6) {
              if (item.quality < 50) {
                item.quality++ 
              }
            }
        }
				if(item.sellIn < 0) {
					item.quality = 0
				};
	};

	handleOther(item) {
		item.sellIn-- 
        if (item.quality > 0) {
            item.quality = item.quality - 1
        }
      if (item.sellIn < 0) {
            if (item.quality > 0) {
                item.quality = item.quality - 1
            }
				}
	};

 	updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
			var item = this.items[i]

			switch(item.name) {
				case 'Sulfuras, Hand of Ragnaros':
					this.handleSulfuras(item)
					continue; 
				case 'Aged Brie':
					this.items[i] = new AgedBrie(item.name, item.sellIn, item.quality)
					this.items[i].handleBrie();
					continue;
				case 'Backstage passes to a TAFKAL80ETC concert':
					this.handleBackstage(item)
					continue;
				default:
      		this.handleOther(item)	
      }
    }

    return this.items;
  }
}
