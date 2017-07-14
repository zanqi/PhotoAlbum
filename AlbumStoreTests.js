'use strict';

var AlbumStore = require('./AlbumStore').AlbumStore;

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
