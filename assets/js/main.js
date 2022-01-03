function Calculadora() {

    this.display = document.querySelector('.display')
    
    this.inicia = () => {
        this.cliqueBotoes()
        this.pressEnter()
        this.pressDelete()
    }

    this.pressEnter = () => {

        this.display.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                this.equal()
            }
        })
        
    }

    this.pressDelete = () => {

        this.display.addEventListener('keydown', (e) => {
            if (e.keyCode === 46) {
                e.preventDefault()
                this.clearDisplay()
            }
        })
        
    }

    this.cliqueBotoes = () => {
        document.addEventListener('click', (event) => {
            const el = event.target

            if(el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText)
            }

            if(el.classList.contains('btn-clear')) {
                this.clearDisplay()
            }

            if(el.classList.contains('btn-delete')) {
                this.deleteOne()
            }

            if(el.classList.contains('btn-eq')) {
                this.equal()
            }

        })
    }

    this.btnParaDisplay = (valor) => {
        this.display.value += valor
        this.display.focus()
    }
    
    this.clearDisplay = () => {
        this.display.value = ''
    }

    this.deleteOne = () => {
        this.display.value = this.display.value.slice(0, -1)
    }

    this.equal = () => {
        
        let conta = this.display.value

        try {

            conta = eval(conta)
            
            if (!conta) {
                alert('Conta Inválida')
                this.clearDisplay()
                return
            }else {
                
                this.display.value = conta

            }

            
        }catch(error) {
            
            alert('Conta inválida')
            this.clearDisplay()
            return

        }
    }

}

const calculadora = new Calculadora();
calculadora.inicia()