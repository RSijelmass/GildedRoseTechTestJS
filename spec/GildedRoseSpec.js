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
});
