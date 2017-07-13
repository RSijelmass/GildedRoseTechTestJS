describe("Gilded Rose", function() {
	create_item_and_update = function(name, sellIn, quality) {
			const gildedRose = new Shop([new Item(name, sellIn, quality)])
			return gildedRose.updateQuality();
	};

	describe("general rules", function() {
		it("doesn't change the name", function() {
			const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
			const items = gildedRose.updateQuality();
			expect(items[0].name).toEqual("foo");
		});
		it("never let's quality go under 0", function() {
			item = create_item_and_update("bar", 3, 0)
			expect(item[0].quality).toEqual(0)
		});
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
		it("never let\'s quality go over 50", function() {
			item = create_item_and_update("Aged Brie", -1, 50)
			expect(item[0].quality).toEqual(50)
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
		var name;
		beforeEach(function() {
			name = "Backstage passes to a TAFKAL80ETC concert"
		});
		
		it("increases quality by 1 if sellIn > 10", function() {
			item = create_item_and_update(name, 14, 20)
			expect(item[0].quality).toEqual(21)
		});
		it("increases quality by 2 if sellIn ≤ 10", function() {
			item = create_item_and_update(name, 8, 20)
			expect(item[0].quality).toEqual(22)
		});
		it("increases quality by 3 if sellIn ≤ 5", function() {
			item = create_item_and_update(name, 4, 20)
			expect(item[0].quality).toEqual(23)
		});
		it("never let's quality go over 50", function() {
			item = create_item_and_update(name, 1, 50)
			expect(item[0].quality).toEqual(50)
		});
		it("sets quality to 0 if sellIn < 0", function() {
			item = create_item_and_update(name, -2, 5)
			expect(item[0].quality).toEqual(0)
		});
	});

	describe("Other items", function() {
		it("let's quality decrease by 1 if sellIn ≥ 0 ", function() {
			item = create_item_and_update("baz", 4, 2)
			expect(item[0].quality).toEqual(1)
		});
	it("let's quality decrease by 2 if sellIn < 0 ", function() {
			item = create_item_and_update("baz", -4, 2)
			expect(item[0].quality).toEqual(0)
		});
});
});
