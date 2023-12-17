import Component from '../core/Component.js';

class Items extends Component {
  template() {
    const { filteredItems } = this.props;

    return `
    <ul>${filteredItems
      .map(
        ({ contents, active, seq }) => `
      <li data-seq="${seq}">
        ${contents}
        <button class="toggleBtn" style="color: ${active ? '#09F' : '#F09'}">
          ${active ? '활성' : '비활성'}
        </button>
        <button class="deleteBtn">삭제</button>
      </li>`
      )
      .join('')}
    </ul>
    `;
  }

  addEventListeners() {
    const { deleteItem, toggleItem } = this.props;

    this.addEvent('click', '.deleteBtn', ({ target }) => {
      deleteItem(Number(target.closest('[data-seq]').dataset.seq));
    });

    this.addEvent('click', '.toggleBtn', ({ target }) => {
      toggleItem(Number(target.closest('[data-seq]').dataset.seq));
    });
  }
}

export default Items;

// class Items extends Component {
//   initialize() {
//     this.state = { items: ['item1', 'item2'] };
//   }

//   template() {
//     const { items } = this.state;

//     const result = items
//       .map(
//         (item, idx) =>
//           `<li>
//           ${item}
//           <button class="deleteBtn" data-index="${idx}">삭제</button>
//           </li>
//           `
//       )
//       .join('');

//     return `
//     <ul>
//     ${result}
//     </ul>
//     <button class="addBtn">추가</button>`;
//   }

//   addEventListeners() {
//     this.addEvent('click', '.addBtn', ({ target }) => {
//       const { items } = this.state;

//       this.setState({ items: [...items, `item${items.length + 1}`] });
//     });

//     this.addEvent('click', '.deleteBtn', ({ target }) => {
//       const items = [...this.state.items];

//       items.splice(target.dataset.index, 1);

//       this.setState({ items });
//     });

// render를 실행할 때 마다 이벤트가 새로 등록 이벤트를 등록하기가 매번 너무 번거롭다.

// const addBtn = this.$target.querySelector('.addBtn');
// if (addBtn) {
//   addBtn.addEventListener('click', () => {
//     const { items } = this.state;
//     this.setState({ items: [...items, `item${items.length + 1}`] });
//   });
// }
// const deletedBtns = this.$target.querySelectorAll('.deleteBtn');
// if (deletedBtns) {
//   deletedBtns.forEach((button) =>
//     button.addEventListener('click', ({ target }) => {
//       const items = [...this.state.items];
//       items.splice(target.dataset.index, 1);
//       this.setState({ items });
//     })
//   );
// }

// 이벤트 버블링을 활용한 리팩토링

// this.$target.addEventListener('click', ({ target }) => {
//   const items = [...this.state.items];
//   if (target.classList.contains('addBtn')) {
//     this.setState({ items: [...items, `item${items.length + 1}`] });
//   }
//   if (target.classList.contains('deleteBtn')) {
//     items.splice(target.dataset.index, 1);
//     this.setState({ items });
//   }
// });
// }
// }

// export default Items;
