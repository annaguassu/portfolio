//mudar tema
const chk = document.getElementById('chk')

chk.addEventListener('change', () =>{
    document.body.classList.toggle('dark')
})

//voltar para o topo
const topinho = document.getElementById('topinho')

function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
