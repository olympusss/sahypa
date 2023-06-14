export default {
    data () {
      return {
        icon: 'add_circle_outline'
      }
    },
    methods: {
        changeIcon(icon) {
            if (icon == 'add_circle_outline') {
                this.icon = 'remove_circle_outline'
            }else {
                this.icon = 'add_circle_outline'
            }
        }
    },
    components: {
    },
  }