'use strict';

function AlbumStore() {
    this.photos = {};
}

AlbumStore.prototype.add = function (photo) {
    this.photos[photo.id] = photo;
}

AlbumStore.prototype.get = function (id) {
    return this.photos[id];
}

AlbumStore.prototype.remove = function (id) {
    delete this.photos[id];
}

AlbumStore.prototype.find = function (term) {
    const self = this;
    const result = [];    
    Object.keys(self.photos).forEach(function(key) {
        const val = self.photos[key];
        if (val.desciption.includes(term)) {
            result.push(val);
        }
    });
    return result;
}

AlbumStore.prototype.edit = function (photo) {
    const self = this;
    self.photos[photo.id] = photo;
}


function testAdd() {
    // Arrange
    const albumStore = new AlbumStore();
    const input = {
        id: "15",
        desciption: "Family Photo",
        url: 'www.example.com'
    };

    // Act
    albumStore.add(input);

    // Assert
    console.assert(albumStore.get(input.id).id === input.id);
    console.assert(albumStore.get(input.id).desciption === input.desciption);
}

function testRemove() {
    // Arrange
    const albumStore = new AlbumStore();
    const input = {
        id: "15",
        desciption: "Family Photo",
        url: 'www.example.com'
    };
    albumStore.add(input);

    // Act
    albumStore.remove(input.id);

    // Assert
    console.assert(albumStore.get(input.id) === undefined);
}

function testFind() {
    // Arrange
    const albumStore = new AlbumStore();
    const input = {
        id: "15",
        desciption: "Family Photo",
        url: 'www.example.com'
    };
    const input2 = {
        id: "16",
        desciption: "Vacation Photo",
        url: 'www.example2.com'
    };
    albumStore.add(input);
    albumStore.add(input2);

    // Act
    const result = albumStore.find('Photo');

    // Assert
    console.assert(result.length === 2);
    console.assert(result[0] === input);
    console.assert(result[1] === input2);
}

function testEdit() {
    // Arrange
    const albumStore = new AlbumStore();
    const input = {
        id: "15",
        desciption: "Family Photo",
        url: 'www.example.com'
    };
    albumStore.add(input);

    // Act
    const edited = {
        id: "15",
        desciption: "Edited Photo",
        url: 'Edited Url'
    }
    albumStore.edit(edited);

    // Assert
    console.assert(albumStore.get(input.id).url === edited.url);
    console.assert(albumStore.get(input.id).desciption === edited.desciption);
}

testAdd();
testRemove();
testFind();
testEdit();
console.log("Pass");
