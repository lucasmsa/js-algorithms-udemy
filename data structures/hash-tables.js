class HashTable{
    constructor(size = 71){
      this.keyMap = new Array(size);
    }

    hash(key){
      let sum = 0, limit = Math.min(key.length, 100), index;
      for(let i = 0; i < limit; i++){
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        sum = (sum * 8191 + value) % this.keyMap.length;
      }
      return sum;
    }

    set(key, value){
      let ind = this.hash(key), arr = [];
      arr.push(key, value);
      if(this.keyMap[ind] == null){
        this.keyMap[ind] = [];
      }
      this.keyMap[ind].push(arr);
      return ind;
    }

    get(key){
      let hashed = this.hash(key);
      for(let i = 0; i < this.keyMap[hashed].length; i++){
        if(key == this.keyMap[hashed][i][0]) return this.keyMap[hashed][i] +
         ' - Bucket: [' + hashed + ']';
      }
      return undefined;
    }

    delete(key){
      let hashed = this.hash(key), data = [];
      for(let i = 0; i < this.keyMap[hashed].length; i++){
        if(key == this.keyMap[hashed][i][0]){
          data.push(this.keyMap[hashed][i]);
          this.keyMap[hashed][i] = null;
        }
      return undefined;
    }

    keys(){
      let arr = [];
      for(let i = 0; i < this.keyMap.length; i++){
        if(this.keyMap[i] !=  null){
          for(let j = 0; j < this.keyMap[i].length; j++){
            if(!arr.includes(this.keyMap[i][j][0])){
              arr.push(this.keyMap[i][j][0]);
            }
          }
        }
      }
      return arr;
    }


    values(){
      let arr = [];
      for(let i = 0; i < this.keyMap.length; i++){
        if(this.keyMap[i] !=  null){
          for(let j = 0; j < this.keyMap[i].length; j++){
            if(!arr.includes(this.keyMap[i][j][1])){
              arr.push(this.keyMap[i][j][1]);
            }
          }
        }
      }
      return arr;
    }
}

hasho = new HashTable(17);
hasho.set("elohomoro", 1);
hasho.set("alo", 12);
hasho.set("aloha", 32);
hasho.set("broto", 58);
hasho.set("lato", 72);
hasho.set("prato", 10);
