import picDB from '../db/pics.json';

var srcs = [];

const thumbsUrl = '/thumbnails/ebene1'
const thumbsSubUrl = '/thumbnails/ebene2'


export default function preloadImages() {

    for (let [key, value] of Object.entries(picDB)) {
        value.map(img => {
            // changeImgs( [...imgs, img])
            srcs.push(img)
        })
    }
    srcs = [...new Set(srcs)];
    var preloadedImgs = []
    var img;
    var remaining = srcs.length;
    for (var i = 0; i < srcs.length; i++) {
        img = new Image();
        img.src = '/bilder/'+srcs[i];
        preloadedImgs.push(img);
    }
    // console.log(preloadedImgs);
}
