// 1. state가 변경되면 render를 실행한다.

// 2. state는 setState로만 변경해야 한다.

// const $root = document.querySelector('#root');

// let state = {
//   items: ['item1', 'item2', 'item3', 'item4'],
// };

// const render = () => {
//   const { items } = state;

//   if ($root) {
//     $root.innerHTML = `<ul>${items
//       .map((item) => `<li>${item}</li>`)
//       .join('')}</ul>`;
//   }

//   const appendElement = document.querySelector('#append');

//   if (appendElement) {
//     document.querySelector('#append').addEventListener('click', () => {
//       setState({ items: [...items, `items${items.length + 1}`] });
//     });
//   }
// };

// const setState = (newState) => {
//   state = { ...state, ...newState };
//   render();
// };

// render();

// make abstract Class

class Component {
  $target;
  state;

  constructor($target) {
    this.$target = $target;
    this.initialize();
    this.render();
  }

  initialize() {}

  template() {
    return '';
  }

  render() {
    //간단한 변경 비교
    const newMarkup = this.template();

    if (this.$target.innerHTML !== newMarkup) {
      this.$target.innerHTML = this.template();
    }

    this.addEventListeners();
  }

  addEventListeners() {}

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}

class App extends Component {
  initialize() {
    this.state = { items: ['item1', 'item2'] };
  }

  template() {
    const { items } = this.state;

    const result = items.map((item) => `<li>${item}</li>`).join('');

    return `<ul>${result}</ul><button>추가</button>`;
  }

  addEventListeners() {
    const addButton = this.$target.querySelector('button');

    if (addButton) {
      this.$target.querySelector('button').addEventListener('click', () => {
        const { items } = this.state;

        this.setState({ items: [...items, `item${items.length + 1}`] });
      });
    }
  }
}

new App(document.querySelector('#root'));
