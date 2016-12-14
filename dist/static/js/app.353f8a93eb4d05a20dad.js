webpackJsonp([1,0],[function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=s(2),l=o(i),n=s(26),a=o(n);l.default.use(s(33)),s(17),new l.default({el:"body",components:{App:a.default}})},function(t,e,s){var o,i,l={};s(14),o=s(7),i=s(22),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var n="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(n.template=i),n.computed||(n.computed={}),Object.keys(l).forEach(function(t){var e=l[t];n.computed[t]=function(){return e}})},,function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(2),l=o(i),n=s(34),a=o(n),r=s(32),p=o(r),c=s(27),d=o(c),u=s(1),f=o(u),h=s(30),y=o(h);l.default.use(a.default),e.default={data:function(){return{list:[],playLists:[],VideoId:"",defaultPL:"cover",keyTemp:"",showPlay:!0,showPlaylist:[]}},ready:function(){this.search(this.defaultPL)},components:{ToolBar:p.default,Content:d.default,Menu:f.default,PlayList:y.default},methods:{end:function(){var t=this;this.deletePlayList(0),this.select(t.playLists[0])},search:function(t){var e=this;this.$http.get("/search?keyword="+t+" cover").then(function(s){e.list=JSON.parse(s.body).items,this.keyTemp=t,this.show=!0;for(var o=0;o<e.list.length;o++){var i={id:o,show:!1};this.showPlaylist.push(i)}})},cateSearch:function(t){var e=this;this.$http.get("/search?keyword="+this.keyTemp+t).then(function(t){e.list=JSON.parse(t.body).items,this.show=!0})},select:function(t){var e=this,s=t.id.videoId;this.VideoId=s;for(var o=0;o<e.playLists.length;o++)e.playLists[o].id.videoId===s&&this.deletePlayList(o);e.playLists.splice(0,0,t),this.showPlay=!1},selectPlaylist:function(t){var e=t;this.VideoId=e},addPlayList:function(t){for(var e=0,s=this,o=0;o<s.playLists.length;o++)s.playLists[o].id.videoId===t.id.videoId&&e++;0===e&&s.playLists.push(t),1===s.playLists.length&&this.select(s.playLists[0])},deletePlayList:function(t){var e=this;e.playLists.splice(t,1)},showpl:function(t){this.showPlaylist[t].show=!0}}}},function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(31),l=o(i);e.default={props:["list","select","show","pl","showplaylist","showpl"],data:function(){return{}},components:{SearchResult:l.default}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["list","select","toggleshow","index","pl","showplaylist","showpl"],data:function(){return{}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["playlist","deleteplaylist","index","select"],data:function(){return{}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["cate-search"],data:function(){return{}}}},function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(29),l=o(i);e.default={props:["playlist","deleteplaylist","select"],data:function(){return{}},components:{ListsPlayList:l.default}}},function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(28),l=o(i);e.default={props:["list","select","toggleshow","pl","showplaylist","showpl"],data:function(){return{}},components:{ListVideo:l.default}}},function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(1),l=o(i);e.default={props:["search","cate-search"],data:function(){return{keyword:""}},components:{Menu:l.default}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){t.exports=' <link href="https://fonts.googleapis.com/css?family=Catamaran" rel=stylesheet> <link href="https://fonts.googleapis.com/css?family=Kanit" rel=stylesheet> <link href="https://fonts.googleapis.com/css?family=Athiti|Oxygen" rel=stylesheet> <div class=top> <div id=header> <tool-bar :search=search :cate-search=cateSearch></tool-bar> </div> </div> <div class="columns is-desktop"> <div class="column is-5 is-offset-1"> <div class=content> <div class=video-container v-if=!showPlay> <youtube :video-id=VideoId player-width=560 align=center @ended=end() :player-vars="{autoplay: 1}"></youtube> </div> </div> <play-list :toggleshowplay=toggleShowPlay :select=select :toggleshow=toggleShow :playlist=playLists :deleteplaylist=deletePlayList></play-list> </div> <div class="column is-5 is-offset-0"> <content :toggleshow=toggleShow :show=show :list=list :select=select :pl=addPlayList :showplaylist=showPlaylist :showpl=showpl :end=end></content> </div> </div> '},function(t,e){t.exports=" <div class=content> <search-result :list=list :select=select :toggleshow=toggleshow :pl=pl :showplaylist=showplaylist :showpl=showpl></search-result> </div> "},function(t,e){t.exports=" <div class=card> <div @click=select(list[index])> <a href=#><img class=imgLink v-bind:src=list[index].snippet.thumbnails.medium.url></a> </div> <div class=nameLink> {{ list[index].snippet.title }}<br> </div> <div class=addPlaylist> <a href=#><button class=addButt name=button @click=pl(list[index])>+</button></a> </div> </div> "},function(t,e){t.exports=' <div class="cardPlaylist fade-in one color1" v-if="index === 0"> {{ playlist[index].index}} <div class=imgPL> <div @click=select(playlist[index])> <a href=#><img v-bind:src=playlist[index].snippet.thumbnails.medium.url style="width : 100%; height : 100%"></a> </div> </div> <button type=button class=del @click=deleteplaylist(index) name=button>x</button> <div class=namePL> {{ playlist[index].snippet.title }}<br> </div> </div> <div class="cardPlaylist fade-in one color" v-else> {{ playlist[index].index}} <div class=imgPL> <div @click=select(playlist[index])> <a href=#><img v-bind:src=playlist[index].snippet.thumbnails.medium.url style="width : 100%; height : 100%"></a> </div> </div> <button type=button class=del @click=deleteplaylist(index) name=button>x</button> <div class=namePL> {{ playlist[index].snippet.title }}<br> </div> </div> '},function(t,e){t.exports=" <select> <option @click=\"cateSearch(' cover')\">Cover</option> <option @click=\"cateSearch(' guitar')\">Guitar</option> <option @click=\"cateSearch(' drum')\">Drum</option> </select> "},function(t,e){t.exports=' <div class=playList> <div id=textmenu> Your Playlist </div><hr> <div class=play v-if="playlist.length === 0"> <div class=text> Your playlist is empty </div> </div> <div v-for="play in playlist"> <lists-play-list :playlist=playlist :deleteplaylist=deleteplaylist :index=$index :select=select></lists-play-list> </div> </div> '},function(t,e){t.exports=' <div id=playlists> <div v-for="youtube in list"> <list-video :list=list :select=select :toggleshow=toggleshow :index=$index :pl=pl :showplaylist=showplaylist :showpl=showpl></list-video> </div> </div> '},function(t,e){t.exports=" <menu :cate-search=cate-search></menu> <input type=text v-model=keyword placeholder=&#128269 @keyup.enter=search(keyword)> "},function(t,e,s){var o,i,l={};s(11),o=s(3),i=s(18),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var n="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(n.template=i),n.computed||(n.computed={}),Object.keys(l).forEach(function(t){var e=l[t];n.computed[t]=function(){return e}})},function(t,e,s){var o,i,l={};o=s(4),i=s(19),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var n="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(n.template=i),n.computed||(n.computed={}),Object.keys(l).forEach(function(t){var e=l[t];n.computed[t]=function(){return e}})},function(t,e,s){var o,i,l={};s(12),o=s(5),i=s(20),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var n="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(n.template=i),n.computed||(n.computed={}),Object.keys(l).forEach(function(t){var e=l[t];n.computed[t]=function(){return e}})},function(t,e,s){var o,i,l={};s(13),o=s(6),i=s(21),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var n="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(n.template=i),n.computed||(n.computed={}),Object.keys(l).forEach(function(t){var e=l[t];n.computed[t]=function(){return e}})},function(t,e,s){var o,i,l={};s(15),o=s(8),i=s(23),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var n="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(n.template=i),n.computed||(n.computed={}),Object.keys(l).forEach(function(t){var e=l[t];n.computed[t]=function(){return e}})},function(t,e,s){var o,i,l={};s(16),o=s(9),i=s(24),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var n="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(n.template=i),n.computed||(n.computed={}),Object.keys(l).forEach(function(t){var e=l[t];n.computed[t]=function(){return e}})},function(t,e,s){var o,i,l={};o=s(10),i=s(25),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var n="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(n.template=i),n.computed||(n.computed={}),Object.keys(l).forEach(function(t){var e=l[t];n.computed[t]=function(){return e}})}]);
//# sourceMappingURL=app.353f8a93eb4d05a20dad.js.map