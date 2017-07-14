class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

	checkBoundariesQuality(item) {
		if(item.quality < 50 && (item.quality > 0 || item.name === "Aged Brie")) { return true }
	};

 	handleSulfuras(item) { };

	handleBrie(item) {
      item.sellIn-- 
				if(this.checkBoundariesQuality(item)) {
          item.quality++
				}
				
      	if (item.sellIn < 0) {
          if (this.checkBoundariesQuality(item)) {
            item.quality++
         }
				};
	};

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
				// checks boundaries quality
        if (item.quality > 0) {
					// updates quality
            item.quality = item.quality - 1
        }
			// if sellIn < 0
      if (item.sellIn < 0) {
						// checks boundaries quality
            if (item.quality > 0) {
								// update quality
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
					this.handleBrie(item)
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
