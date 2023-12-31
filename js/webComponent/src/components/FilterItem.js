import Component from '../core/Component.js';

class FilterItem extends Component {
  template() {
    return `
      <button class="filterBtn" data-is-filter="0">전체 보기</button>
      <button class="filterBtn" data-is-filter="1">활성 보기</button>
      <button class="filterBtn" data-is-filter="2">비활성 보기</button> 
    `;
  }

  addEventListeners() {
    const { filterItem } = this.props;

    this.addEvent('click', '.filterBtn', ({ target }) => {
      filterItem(Number(target.dataset.isFilter));
    });
  }
}

export default FilterItem;
