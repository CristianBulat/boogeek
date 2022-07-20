// DropDown component module

// global const handler = () => { console.log(1) }

// wrapping
class DropDown {
    constructor (items, id) {
        this.items = items
        this.id = id
        this.state_open = false
    }

    render() {
        let rootDiv = document.getElementById(this.id)
        rootDiv.innerHTML = `
            <a href="#">
            ${this.items.root.label}
            </a>
        `

        if (this.state_open) {
            let html = ``
            for(let i=0; i<this.items.children.length; i++){
                html += `
                <a href="#">
                ${this.items.children[i].label}
                </a>
                `
            }

            rootDiv.innerHTML += html
        }

        let rootLink = document.querySelector(`#${this.id} > a`)
        rootLink.addEventListener(`click`, this.handler.bind(this))
    }
    handler() { 

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