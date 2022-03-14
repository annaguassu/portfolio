const sr = ScrollReveal({reset: true})

sr.reveal(".scrollup", {
    origin: "bottom", //Para ele surgir de cima para baixo.
    duration: 2000, // A duração da animação em ms
    delay: 300, // O delay para a animação acontecer
    reset: true // Ao sair do campo de tela, a animação não acontecerá novamente caso eu passe por ela novamente.
  });
