// inicializa menu 
export const iniciarMenu = () => {
    const menus = document.querySelectorAll('[data-menu]');

    menus.forEach((menu)=>{

    const botao = menu.querySelector('.menu__botao');

    const toggleMenu = () =>{
        menu.classList.toggle('active');

        const ativo = menu.classList.contains('active');

        botao.setAttribute('aria-expansed', ativo);
        botao.setAttribute('aria-label', ativo ? 'Fechar Menu': 'Abrir Menu')
    };

    const fecharComEsc = (event) =>{
        const isEsc = event.key === 'Escape';
        const ativo = menu.classList.contains('active');

        if(isEsc && ativo){
            menu.classList.remove('active')

            botao.setAttribute('aria-expansed', false)
            
        }
    };

    botao.addEventListener('pointerdown', toggleMenu);
    botao.addEventListener('keydown', fecharComEsc)

    });
};