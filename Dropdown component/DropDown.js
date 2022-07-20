// DropDown component module

// global const handler = () => { console.log(1) }

// wrapping
class DropDown {
    constructor (items, id) {
        this.items = items
        this.id = id
        this.state_open = false

        this.styles = {
            palette: {
                default: {
                  background: '#123',
                  color: '#fff',
                },
                active: {
                  background: '#eee',
                  color: '#234',
                },
            }
        }
    }

    render() {
        let rootDiv = document.getElementById(this.id)
        
        rootDiv.style.display = 'inline-block'
        rootDiv.style.fontFamily = 'Arrial'
        rootDiv.style.minWidth = '150px'

        rootDiv.innerHTML = `
            <a href="#" style="
              background: ${this.styles.palette.default.background};
              color: ${this.styles.palette.default.color};
              text-decoration: none;
              padding: 1em;
              display: block;
              width: 150px;
            ">
            <i class="${this.items.root.icon}"></i>
            <span style="float: right;">${this.items.root.label}</span>
            </a>
        `

        if (this.state_open) {
            let html = ``
            for(let i=0; i<this.items.children.length; i++){
                html += `
                <a href="#" class="item" style="
                  background: ${this.styles.palette.default.background};
                  color: ${this.styles.palette.default.color};
                  text-decoration: none;
                  padding: 1em;
                  display: block;
                ">
                <i class="${this.items.children[i].icon}"></i>
                <span style="float: right;">${this.items.children[i].label}</span>
                </a>
                `
            }

            rootDiv.innerHTML += html
        }

        let rootLink = document.querySelector(`#${this.id} > a`)
        let items = document.querySelectorAll(`#${this.id} > .item`)
        for(let i=0; i<items.length; i++) {
            items[i].addEventListener(`mouseover`, this.mouseoverHandler.bind(this))
            items[i].addEventListener(`mouseout`, this.mouseoutHandler.bind(this))
            
        }
        rootLink.addEventListener(`click`, this.clickHandler.bind(this))
    }
    clickHandler() { 

    /* HW2: how to make this code compact ?
    if (this.state_open) {
        this.state_open = false
    } else{
        this.state_open = true
    }
    */ 

   //HW2: short if statement
    this.state_open ? this.state_open = false : this.state_open = true
        this.render()
    }

    mouseoverHandler(e) {
        e.target.style.color = `${this.styles.palette.active.color}`
        e.target.style.background = `${this.styles.palette.active.background}`
    }

    // HW3:
    // create and bind the mouseoutHandler(e)
    // restore the default style
    mouseoutHandler(e) {
        e.target.style.color = `${this.styles.palette.default.color}`
        e.target.style.background = `${this.styles.palette.default.background}`
    }

}





/*

declare a function
call a function


component lifecycle

create (object) ---> render() <-----------------------------
              |                                               |
              |                                               |
              onclick ---> handler () --> state ---> open ---





 code that contains THIS

 x------------------------------------------> time?
           ^                      ^
           render()               click







render (JS) ---> "this." ------> HTML -----> click ---? JS




<a>Profile</a>
 
<a>item 1</a>
<a>item 2</a>

  ^
------select * addEventListener()
*/