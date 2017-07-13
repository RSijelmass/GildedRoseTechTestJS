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
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
			if(this.items[i].name === 'Sulfuras, Hand of Ragnaros') { continue; }
      this.items[i].sellIn-- 
			
			// if(this.items[i].name === 'Aged Brie') { continue; }
			// if item is other
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
				// checks boundaries quality
        if (this.items[i].quality > 0) {
					// if item is other
					// updates quality
            this.items[i].quality = this.items[i].quality - 1
        }
				// if item is Aged Brie or Backstage
      } else {
				// checks boundaries quality
        if (this.items[i].quality < 50) {
					//updates quality
          this.items[i].quality = this.items[i].quality + 1
						// if item is Backstage
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
						// if sellin < 11
            if (this.items[i].sellIn < 11) {
							// checks boundaries quality
              if (this.items[i].quality < 50) {
								// updates quality
                this.items[i].quality = this.items[i].quality + 1
              }
            }
						// if sellin < 6
            if (this.items[i].sellIn < 6) {
							// checks quality boundaries
              if (this.items[i].quality < 50) {
								// updates quality
                this.items[i].quality = this.items[i].quality + 1
              }
            }
          }
        }
      }
			// if item is other, Brie, Backstage 
				// sellIn - 1
			// if sellIn < 0
      if (this.items[i].sellIn < 0) {
				// if item is other
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
						// checks boundaries quality
            if (this.items[i].quality > 0) {
								// update quality
                this.items[i].quality = this.items[i].quality - 1
            }
						// if item is backstage
          } else {
						// update quality to 0
            this.items[i].quality = this.items[i].quality - this.items[i].quality
          }
					// if item is brie
        } else {
					// check boundaries quality
          if (this.items[i].quality < 50) {
						// update quality
            this.items[i].quality = this.items[i].quality + 1
          }
        }
      }
    }

    return this.items;
  }
}
