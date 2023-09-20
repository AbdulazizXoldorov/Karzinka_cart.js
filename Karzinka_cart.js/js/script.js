window.addEventListener('DOMContentLoaded' , () =>{
    let products = document.querySelectorAll('.product'),
        buttons = document.querySelectorAll('button'),
        openBtn = document.querySelector('.open');

        function cerateCart(){
            let cart = document.createElement('div'),
                field = document.createElement('div'),
                heading = document.createElement('h2'),
                closeBtn = document.createElement('button');
                
                cart.classList.add('cart')
                field.classList.add('cart-field')
                closeBtn.classList.add('close')

                heading.textContent = 'Открыть корзину'
                closeBtn.textContent = 'Купить'

                document.body.appendChild(cart)
                cart.appendChild(field)
                cart.appendChild(closeBtn)
            }

        cerateCart()

        let cart = document.querySelector('.cart')
        let closeBtn = document.querySelector('.close')
        let field = document.querySelector('.cart-field')

        openBtn.addEventListener('click' ,() =>{
            cart.style.display = 'block'
        })

        closeBtn.addEventListener('click' , () =>{
            cart.style.display = 'none'
        })


        buttons.forEach((item , i) =>{
            item.addEventListener('click' , () =>{
                let clonItem = products[i].cloneNode(true)
                btn = clonItem.querySelector('button')

               
                btn.remove()
                field.appendChild(clonItem)
                products[i].remove()
            })
            
        })

})
