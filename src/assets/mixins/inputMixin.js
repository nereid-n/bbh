export default {
  data() {
    return {
      focus: false,
      value: ''
    }
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    defaultValue: {}
  },
  computed: {
    wrapClass() {
      return {
        'input-active': this.focus,
        'input-filled': this.value !== ''
      };
    }
  },
  methods: {
    onInput(value) {
      this.$emit('onInput', {value: value, name: this.data.name});
    }
  },
  created() {
    if (this.defaultValue !== undefined) {
      this.value = this.defaultValue;
    }
  },
}