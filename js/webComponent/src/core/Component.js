class Component {
  $target;
  props;
  state;

  constructor($target, props) {
    this.$target = $target;

    this.props = props;

    this.initialize();

    this.addEventListeners(); // Run only once in constructor

    this.render();
  }

  initialize() {}

  mounted() {} // Additional functionality after render

  template() {
    return '';
  }

  render() {
    const newMarkup = this.template();

    if (this.$target.innerHTML !== newMarkup) {
      this.$target.innerHTML = this.template();
    }

    this.mounted();

    // delete and move constructor

    // this.addEventListeners();
  }

  addEventListeners() {}

  // make the registration process through event bubbling a method
  addEvent(eventType, selector, callback) {
    const children = [...this.$target.querySelectorAll(selector)];

    this.$target.addEventListener(eventType, (event) => {
      const delegateTarget = event.target.closest(selector);

      if (!delegateTarget) return;

      callback(event);
    });
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}

export default Component;
