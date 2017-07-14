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
			var item = this.items[i]

			var itemClass = this.classFor(item.name)
		 	var itemNew = new itemClass(item.name, item.sellIn, item.quality)

			itemNew.updateQuality();
			this.items[i] = itemNew;
			   
		}
    return this.items;
  }
}
