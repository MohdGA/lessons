const movie = "Demon Slayer";

const arrsy = [
  {name:"ALI",movie,},
  true,
];
arrsy[0].movie = "John wick";
delete arrsy[1].movie;
console.log(arrsy);

console.log("-----------------------------");

const block = {
  name: "Mohammed",
  age: 24,
  hobby: "Anime",
  myPlayList: ['bb','aa','cc'],
  volume: 5,
  trackIndex: 0,
  currentTrack: 'Just Ken',
  currentPlaylist: ['Just Ken', 'Hey Blondie', 'What Was I Made For', 'Dance The Night'],
  volume: 70,
  mute(){
   this.volume = 50
  },
};
delete block.age;
console.log(block);
console.log("-----------------------------");
console.log(block.myPlayList);
console.log("-----------------------------");
delete block.myPlayList;
console.log(block.currentPlaylist[block.trackIndex]);
block.next = function(){
  block.trackIndex += 1;
  block.currentTrack = this.currentPlaylist[this.trackIndex];
};

block.next();
block.next();
console.log("-----------------------------");
console.log(block.currentPlaylist[block.trackIndex]);
console.log("-----------------------------");
console.log(block);


block.currentPlaylist = [
  {
    title: 'Just Ken',
    artist: 'Ryan Gosling',
    album: 'Barbie The Album',
    length: '3:43',
  }, {
    title: 'Hey Blondie',
    artist: 'Dominic Fike',
    album: 'Barbie The Album',
    length: '2:21',
  }, {
    title: 'What Was I Made For',
    artist: 'Billie Eilish',
    album: 'Barbie The Album',
    length: '3:42',
  }, {
    title: 'Dance The Night',
    artist: 'Dua Lipa',
    album: 'Barbie The Album',
    length: '2:56',
  }
];

block.currentPlaylist[block.trackIndex].length = '3:54';
console.log(block.currentPlaylist[block.trackIndex].length);
