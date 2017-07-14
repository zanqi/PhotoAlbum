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

testAdd();
console.log("Pass");
