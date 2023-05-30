import React from "react";
import './estilos.css'; 

export default function SecaoContato() {
    return (
        <section className="secao-contato" id="contato">
            <div className="limitar-secao">
                <h3 className="subtitulos">FALE CONOSCO</h3>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>

                <div className="secao-contato-dados">
                    <div className="secao-contato-img">
                        <h4>Contato</h4>
                            <div>
                                <img src="assets/local.png"></img>
                                <span>Nova Iguaçu, RJ</span>
                            </div>
                            <div>
                                <img src="assets/telefone.png"></img>
                                <span>(21) 9999-9999</span>
                            </div>
                            <div>
                                <img src="assets/email.png"></img>
                                <span>contato@oticavida.com</span>
                            </div>
                    </div>

                    <div className="secao-contato-img">
                        <h4>Nossas Redes Sociais</h4>
                            <div>
                                <img src="assets/fb.png"></img>
                                <span>/OticaVida</span>
                            </div>
                            <div>
                                <img src="assets/ig.png"></img>
                                <span>@oticavidarj</span>
                            </div>
                            <div>
                                <img src="assets/tt.png"></img>
                                <span>@oticavidarj</span>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}