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
    const result = [];
    Object.keys(this.photos).forEach((key) => {
        const val = this.photos[key];
        if (val.desciption !== undefined && val.desciption.includes(term)) {
            result.push(val);
        }
    });
    return result;
}

AlbumStore.prototype.edit = function (photo) {
    if (photo === undefined || photo.id === undefined || photo.url === undefined) {
        return false;
    }
    if (!(photo.id in this.photos)) {
        return false;
    }
    this.photos[photo.id] = photo;
    return true;
}

module.exports.AlbumStore = AlbumStore;