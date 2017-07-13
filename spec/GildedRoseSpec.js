describe("Gilded Rose", function() {
	create_item_and_update = function(name, sellIn, quality) {
			const gildedRose = new Shop([new Item(name, sellIn, quality)])
			return gildedRose.updateQuality();
	};

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

	describe("Brie", function() {
	 	it("quality goes up by one if sellIn ≥ 0", function() {
			item = create_item_and_update("Aged Brie", 2, 0)
			expect(item[0].quality).toEqual(1)
		});
	it("quality goes up by two if sellIn < 0", function() {
			item = create_item_and_update("Aged Brie", -1, 0)
			expect(item[0].quality).toEqual(2)
		});
	});

	describe("Sulfuras", function() {
		it("doesn't change in quality", function() {
			item = create_item_and_update("Sulfuras, Hand of Ragnaros", 0, 40)
			expect(item[0].quality).toEqual(40)
		});
		it("doesn't change in sellIn", function() {
			item = create_item_and_update("Sulfuras, Hand of Ragnaros", 0, 40)
			expect(item[0].sellIn).toEqual(0)
		});
	});

	describe("Backstage", function() {
		it("increases quality by 1 if sellIn > 10", function() {
			item = create_item_and_update("Backstage passes to a TAFKAL80ETC concert", 14, 20)
			expect(item[0].quality).toEqual(21)
		});
		it("increases quality by 2 if sellIn ≤ 10", function() {
			item = create_item_and_update("Backstage passes to a TAFKAL80ETC concert", 8, 20)
			expect(item[0].quality).toEqual(22)
		});
		it("increases quality by 3 if sellIn ≤ 5", function() {
			item = create_item_and_update("Backstage passes to a TAFKAL80ETC concert", 4, 20)
			expect(item[0].quality).toEqual(23)
		});
	});
});
