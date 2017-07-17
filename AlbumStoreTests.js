'use strict';

var AlbumStore = require('./AlbumStore').AlbumStore;

function getWithNonexistentIdTest() {
   // Arrange
    const albumStore = new AlbumStore();

    // Act
    const photo = albumStore.get(15);

    // Assert
    console.assert(photo === undefined);
}

function testAdd() {
    // Arrange
    const albumStore = new AlbumStore();
    const input = {
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
        desciption: "Family Photo",
        url: 'www.example.com'
    };
    albumStore.add(input);

    // Act
    albumStore.remove(input.id);

    // Assert
    console.assert(albumStore.get(input.id) === undefined);
}

function remove_with_nonexist_id_test() {
   // Arrange
    const albumStore = new AlbumStore();

    // Act
    albumStore.remove(15);

    // Assert
    // assert no exception
}

function testFind() {
    // Arrange
    const albumStore = new AlbumStore();
    const input = {
        desciption: "Family Photo",
        url: 'www.example.com'
    };
    const input2 = {
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
        desciption: "Family Photo",
        url: 'www.example.com'
    };
    albumStore.add(input);

    // Act
    const edited = {
        id: input.id,
        desciption: "Edited Photo",
        url: 'Edited Url'
    }
    albumStore.edit(edited);

    // Assert
    console.assert(albumStore.get(input.id).url === edited.url);
    console.assert(albumStore.get(input.id).desciption === edited.desciption);
}

function editWithUndefinedInputTest() {
    // Arrange
    const albumStore = new AlbumStore();

    // Act
    const edited = albumStore.edit(undefined);

    // Assert
    console.assert(edited === false);
}

function editWithUndefinedIdTest() {
    // Arrange
    const albumStore = new AlbumStore();

    // Act
    const edited = albumStore.edit({
        id: undefined,
        url: 'www.example.com'
    });

    // Assert
    console.assert(edited === false);
}

function editWithNonexistentIdTest() {
    // Arrange
    const albumStore = new AlbumStore();

    // Act
    const edited = albumStore.edit({
        id: 1,
        url: 'www.example.com'
    });

    // Assert
    console.assert(edited === false);
}

function editWithUndefinedUrlTest() {
    // Arrange
    const albumStore = new AlbumStore();

    // Act
    const edited = albumStore.edit({
        id: 1,
        url: undefined
    });

    // Assert
    console.assert(edited === false);
}

testAdd();
testRemove();
testFind();
testEdit();
getWithNonexistentIdTest();
editWithUndefinedInputTest();
editWithUndefinedIdTest();
editWithNonexistentIdTest();
editWithUndefinedUrlTest();
console.log("Pass");
