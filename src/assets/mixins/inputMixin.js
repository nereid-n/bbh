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
  // methods: {
  //   onBlur() {
  //     this.focus = false;
  //     this.touched = true;
  //     this.$emit('blur');
  //   },
  //   onInput() {
  //     this.$emit('input', this.value);
  //   }
  // },
  created() {
    if (this.defaultValue !== undefined) {
      this.value = this.defaultValue;
    }
  },
  computed: {
    wrapClass() {
      return {
        'input-active': this.focus,
        'input-filled': this.value !== ''
      };
    }
  }
}