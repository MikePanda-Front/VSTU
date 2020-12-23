import { mapGetters } from 'vuex';

export default {
  name: 'Videos',
  data() {
    return {
      empty: {
        name: '',
        description: '',
      }
    };
  },
  computed: {
    ...mapGetters({
      allVideos: 'video/allVideos',
    }),
    rows() {
      var rows = [];
      var itemsPerRow = 3;

      var arr = this.allVideos.videos;
      for (var i = 0; i < arr.length; i += itemsPerRow) {
        var row = [];
        for (var z = 0; z < itemsPerRow; z++) {
          if (arr[i + z]) {
            row.push(arr[i + z]);
          } else {
            row.push(this.empty);
          }
        }
        rows.push(row);
      }
      return rows;
    }
  },
  async mounted() {
    return await this.$store.dispatch('video/getAllVideos');
  }
}