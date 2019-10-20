
// Create a generic Map (an Object like an Array, but instead with Key-Value Pairs). The key will always be a string.

class MyMap<T extends number | string> {
    
    private map: {[key: string]: T} = {};

    printMap() {
        for(let key in this.map) {
            console.log(key, this.map[key]);
        }
    }

    getItem(key: string) {
        return this.map[key];
    }

    setItem(key: string, item: T) {
        this.map[key] = item;
    }

    clear() {
        this.map = {};
    }
}

const numMap = new MyMap<number>();
numMap.setItem("apples", 10);
numMap.setItem("bananas", 3);
numMap.printMap();
numMap.clear();
numMap.printMap();

const numMap2 = new MyMap<string>();
numMap2.setItem("apples", "10");
numMap2.setItem("bananas", "3");
numMap2.printMap();
numMap2.clear();
numMap2.printMap();