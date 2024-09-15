import FAQItem from "../FaqItem/FaqItem";
import Footer from '../Footer/Footer';
function Service() {
    return (
        <div>
            <section id="servicos" className="py-5">
                <div className="container">
                    <div className="row">
                        {/* Jiu-Jitsu Card */}
                        <div className="col-md-4">
                            <div className="card text-center">
                                <div className="card-header bg-dark text-white">
                                    <h3>Jiu-Jitsu</h3>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </h4>
                                    <p>Benefícios do Jiu-Jitsu</p>
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <i className="fas fa-check"></i> Melhora da Condição Física
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fas fa-check"></i> Perda de Peso
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fas fa-check"></i> Melhora da Resiliência Física
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fas fa-check"></i> Redução do Estresse
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fas fa-check"></i> Desenvolvimento do Autocontrole
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fas fa-check"></i> Habilidades de Autodefesa
                                        </li>
                                    </ul>
                                    <a href="/contato" className="btn btn-primary btn-block mt-3">Obter Serviço</a>
                                </div>
                                <div className="card-footer text-muted">
                                    Consulte a gente
                                </div>
                            </div>
                        </div>

                        {/* Defesa Pessoal Card */}
                        <div className="col-md-4">
                            <div className="card text-center">
                                <div className="card-header bg-dark text-white">
                                    <h3>Defesa Pessoal</h3>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </h4>
                                    <p>Aprendendo a se defender</p>
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <i className="fas fa-check"></i> Aumento da Confiança
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fas fa-check"></i> Redução do Estresse e Ansiedade
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fas fa-check"></i> Desenvolvimento do Autocontrole
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fas fa-check"></i> Resiliência Mental
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fas fa-check"></i> Empoderamento Pessoal
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fas fa-check"></i> Independência
                                        </li>
                                    </ul>
                                    <a href="/contato" className="btn btn-primary btn-block mt-3">Obter Serviço</a>
                                </div>
                                <div className="card-footer text-muted">
                                    Consulte a gente
                                </div>
                            </div>
                        </div>

                        {/* Yoga Card */}
                        <div className="col-md-4">
                            <div className="card text-center">
                                <div className="card-header bg-dark text-white">
                                    <h3>Yoga</h3>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </h4>
                                    <p>Benefícios do Yoga</p>
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <i className="fas fa-check"></i> Aumento da Flexibilidade
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fas fa-check"></i> Melhora da Postura
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fas fa-check"></i> Melhora da Respiração
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fas fa-check"></i> Redução do Estresse
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fas fa-check"></i> Melhora do Sono
                                        </li>
                                        <li className="list-group-item">
                                            <i className="fas fa-check"></i> Sensação de Paz Interior
                                        </li>
                                    </ul>
                                    <a href="/contato" className="btn btn-primary btn-block mt-3">Obter Serviço</a>
                                </div>
                                <div className="card-footer text-muted">
                                    Consulte a gente
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="faq" className="p-5 bg-dark text-white">
                <div className="container">
                    <h1 className="text-center">Perguntas mais frequentes</h1>
                    <hr />
                    <div className="row">
                        {/* INICIO COLUNA 1 */}
                        <div className="col-md-6">
                            <FAQItem
                                id="collapseUm"
                                question="O que é jiu-jitsu?"
                                answer="O jiu-jítsu é uma arte marcial focada em técnicas de alavanca, imobilizações e submissões, permitindo que uma pessoa menor e mais fraca possa se defender de um oponente maior e mais forte."
                            />
                            <FAQItem
                                id="collapseDois"
                                question="Preciso ter experiência para começar?"
                                answer="Não, nossa academia oferece aulas para todos os níveis, desde iniciantes até avançados. Todo mundo começa do zero, e estamos aqui para ajudar no seu progresso."
                            />
                            <FAQItem
                                id="collapseTres"
                                question="Quais são os benefícios de praticar jiu-jítsu?"
                                answer="Os benefícios incluem melhora da forma física, autoconfiança, disciplina, aprendizado de autodefesa, além de ser uma excelente forma de aliviar o estresse."
                            />
                        </div>

                        {/* INICIO COLUNA 2 */}
                        <div className="col-md-6">
                            <FAQItem
                                id="collapseQuatro"
                                question="Quanto tempo leva para obter a faixa preta?"
                                answer="O tempo varia de pessoa para pessoa, dependendo da dedicação, frequência de treino e aprendizado. Geralmente, leva de 8 a 12 anos para obter a faixa preta."
                            />
                            <FAQItem
                                id="collapseCinco"
                                question="Quais equipamentos são necessários?"
                                answer="Para iniciar, você precisará de um kimono (Gi). Oferecemos kimonos para venda na academia. Mais adiante, você pode adquirir outros equipamentos, como rashguards e protetores bucais."
                            />
                            <FAQItem
                                id="collapseSeis"
                                question="Há um limite de idade para começar?"
                                answer="Não há limite de idade. Temos alunos de todas as idades, desde crianças até adultos mais velhos. O jiu-jitsu é uma arte marcial inclusiva para todas as idades."
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Service;
