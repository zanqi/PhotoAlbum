'use strict';

function AlbumStore() {
    
}

AlbumStore.prototype.add = function(photo) {

}

function testAdd() {
    const albumStore = new AlbumStore();
    albumStore.add({
        id: "15",
        desciption: "Family Photo",
        url: 'www.example.com'
    });
    
}

testAdd();
