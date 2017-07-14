'use strict';

function AlbumStore() {
    this.photos = {};
    this.currentId = 1;
}

AlbumStore.prototype.add = function (photo) {
    this.photos[this.currentId] = photo;
    photo.id = this.currentId;
    this.currentId++;
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


module.exports.AlbumStore = AlbumStore;