<template lang="html">
  <div id="textmenu">
    Your Playlist
  </div><hr>
  <div class="playList">
  <div class="play" v-if="playlist.length === 0">
    <div class="text">
      Your playlist is empty
    </div>
  </div>
  <div v-for="play in playlist">
    <lists-play-list :playlist = "playlist" :deleteplaylist = 'deleteplaylist' :index ="$index" :select = "select" :changeplaylistup = "changeplaylistup" :changeplaylistdown = "changeplaylistdown"></lists-play-list>
</div>
</div>
</template>

<script>
import ListsPlayList from '../components/ListsPlayList'

export default {
  props: ['playlist', 'deleteplaylist', 'select', 'changeplaylistup', 'changeplaylistdown'],
  data () {
    return {}
  },
  components: {
    ListsPlayList
  }
}
</script>

<style lang="css">
</style>
