class ExpenseCard extends HTMLElement {

  static get observedAttributes() { // this tells us which attributes we're monitoring for change
    return ['expense-id', 'title', 'amount', 'date', 'category'];
  }

  connectedCallback() {
    this.render();
    this.addEventListener('click', this.#handleClick);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.#handleClick);
  }

  attributeChangedCallback() {
    if (this.isConnected) this.render();
    // someElement.isConnected is a built-in way to ensure it's been loaded into the DOM
  }

  #handleClick = (event) => {
    const id = parseInt(this.getAttribute('expense-id'));

    if (event.target.classList.contains('edit-btn')) {
      // somehow send the edit information to the form
    }

    if (event.target.classList.contains('delete-btn')) {
      // console.log("ExpenseCard.#handleClick: got a delete click?")
      // somehow send a delete to the array
      this.dispatchEvent( // fire an event: custom events the messsanger btwn cusotm componets
        new CustomEvent(  // we can make custome events not jsut 'change' 'input' 'submit'
          "expense-delete", // param1 -  name it whats the custom event called
          {                 // param2 -- data/metadata for the event (packed inside the object)
            bubbles: true,  // bubbles true/false means: event can propogate up through the DOM. if false re
            detail: { id }, // detail -- 
          } // this is throwing the ball... have to go catch it because JS is weird af

        )
      )
    }
  };

  render() {
    const title    = this.getAttribute('title')      ?? '';  // ternary: "X if X else Y", "value if value else empty string"
    const amount   = this.getAttribute('amount')     ?? '0';
    const date     = this.getAttribute('date')       ?? '';
    const category = this.getAttribute('category')   ?? '';
    const id       = this.getAttribute('expense-id');

    this.className = 'card';
    this.innerHTML = `
      <div class="header">
        <div>
          <div class="title">${title}</div>
          <div class="meta category">${category}</div>
        </div>
        <div class="amount">$${amount}</div>
      </div>
      <div class="meta date">${date}</div>
      <div class="actions">
        <button class="edit-btn"   data-id="${id}">Edit</button>
        <button class="delete-btn" data-id="${id}">Delete</button>
      </div>
    `;
  }
}

customElements.define('expense-card', ExpenseCard);
