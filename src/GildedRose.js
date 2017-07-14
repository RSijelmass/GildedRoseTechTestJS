class Shop {
  constructor(items=[]){
    this.items = items;
  }

	classFor(itemName) {
		switch(itemName) {
			case 'Sulfuras, Hand of Ragnaros':
				return Sulfuras
			case 'Aged Brie':
				return AgedBrie
			case 'Backstage passes to a TAFKAL80ETC concert':
				return Backstage
			default:
				return OtherItem
		}
	}

 	updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
			var itemClass = this.classFor(this.items[i].name)

		 	this.items[i] = new itemClass(this.items[i].name, this.items[i].sellIn, this.items[i].quality)
			this.items[i].updateQuality();
			   
		}
    return this.items;
  }
}
