import Component from '../core/Component.js';

class AppenderItem extends Component {
  template() {
    return `<input type="text" class="appender" placeholder="아이템 내용 입력"/>`;
  }

  addEventListeners() {
    const { addItem } = this.props;

    this.addEvent('keyup', '.appender', ({ key, target }) => {
      if (key !== 'Enter') return;

      const { value } = target;

      addItem(value);
    });
  }
}

export default AppenderItem;
