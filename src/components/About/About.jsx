import './About.css';
import Footer from '../Footer/Footer'


function About() {
    return (

        <div>
            <section id="sobre" className="py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sobre-img-container">
                                <img
                                    src="image/professores.jpeg"
                                    alt="Professores"
                                    className="sobre-img rounded-circle"
                                />
                            </div>
                            <div className="texto">
                                <h1>O que nós fazemos?</h1>
                                <p className="paragrafo">Na nossa academia, estamos comprometidos em transformar vidas através do jiu-jítsu e do bem-estar.
                                    Com mais de 10 anos de experiência, nosso time de instrutores dedicados, liderado por Alexandre
                                    Salgado e sua esposa Anna Carolina, oferece um ambiente acolhedor e seguro para alunos de todas as
                                    idades e níveis de habilidade.</p>
                                <p className="paragrafo">Jiu-Jítsu para todas as idades. Quer você seja um adulto procurando melhorar sua forma física, uma
                                    criança começando sua jornada nas artes marciais, ou um adolescente buscando autoconfiança e
                                    disciplina, temos a aula perfeita para você. Nossa abordagem personalizada garante que cada aluno
                                    receba a atenção necessária para crescer e se desenvolver, tanto dentro quanto fora do tatame.</p>
                                <p className="paragrafo">Defesa Pessoal. Também oferecemos treinamentos especializados em defesa pessoal, capacitando nossos
                                    alunos a se protegerem com técnicas eficazes e práticas. Queremos que você se sinta seguro e
                                    confiante em qualquer situação.</p>
                                <p className="paragrafo">Yoga para Equilíbrio e Bem-Estar. Além das aulas de jiu-jítsu, oferecemos sessões de yoga ministradas
                                    pela nossa instrutora Anna Carolina. O yoga é uma prática complementar ideal para o jiu-jítsu, ajudando
                                    a melhorar a flexibilidade, reduzir o estresse e encontrar o equilíbrio físico e mental.</p>
                            </div>

                        </div>
                        <div className="col-md-6">
                        </div>
                    </div>
                </div>
            </section>

            <section id="weekdays-multiple-schedule-table" className="p-5">
                <div className="container">

                    <div className="row mb-4">
                        <div className="col text-center">
                            <h2>Horários da Semana</h2>
                        </div>
                    </div>
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr className="text-center">
                                <th className="custom-blue">Segunda</th>
                                <th className="custom-blue">Terça</th>
                                <th className="custom-blue">Quarta</th>
                                <th className="custom-blue">Quinta</th>
                                <th className="custom-blue">Sexta</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center">
                                <td className="bg-dark text-white">
                                    <h5>7:00 - 8:00</h5>
                                    <p>Todos os níveis</p>
                                </td>
                                <td className="bg-dark text-white">
                                    <h5>12:00 - 13:00</h5>
                                    <p>Iniciantes kimono</p>
                                </td>
                                <td className="bg-dark text-white">
                                    <h5>7:00 - 8:00</h5>
                                    <p>Todos os níveis</p>
                                </td>
                                <td className="bg-dark text-white">
                                    <h5>12:00 - 13:00</h5>
                                    <p>Iniciantes kimono</p>
                                </td>
                                <td className="bg-dark text-white">
                                    <h5>7:00 - 8:00</h5>
                                    <p>Todos os níveis.</p>
                                </td>
                            </tr>
                            <tr className="text-center">
                                <td className="bg-dark text-white">
                                    <h5>18:00 - 19:00</h5>
                                    <p>Jiu-Jitsu</p>
                                </td>
                                <td className="bg-dark text-white">
                                    <h5>18:00 - 19:00</h5>
                                    <p>Jiu-Jitsu</p>
                                </td>
                                <td className="bg-dark text-white">
                                    <h5>18:00 - 19:00</h5>
                                    <p>Jiu-Jitsu</p>
                                </td>
                                <td className="bg-dark text-white">
                                    <h5>18:00 - 19:00</h5>
                                    <p>Jiu-Jitsu</p>
                                </td>
                                <td className="bg-dark text-white">
                                    <h5>18:00 - 19:00</h5>
                                    <p>Open Match</p>
                                </td>
                            </tr>
                            <tr className="text-center">
                                <td className="bg-dark text-white">
                                    <h5>19:20 - 20:20</h5>
                                    <p>Jiu-Jitsu(Infantil)</p>
                                </td>
                                <td className="bg-dark text-white">
                                    <h5>19:00 - 20:00</h5>
                                    <p>Jiu-Jitsu(Infantil)</p>
                                </td>
                                <td className="bg-dark text-white">
                                    <h5>19:20 - 20:20</h5>
                                    <p>Jiu-Jitsu(Infantil)</p>
                                </td>
                                <td className="bg-dark text-white">
                                    <h5>19:00 - 20:00</h5>
                                    <p>Jiu-Jitsu(Infantil)</p>
                                </td>
                                <td className="bg-dark text-white">
                                    <h5>Open Match</h5>
                                    <p>Todos os níveis</p>
                                </td>
                            </tr>
                            <tr className="text-center">
                                <td className="bg-dark text-white">
                                    <h5>20:00 - 21:00</h5>
                                    <p>Todos os níveis</p>
                                </td>
                                <td className="bg-dark text-white">
                                    <h5>20:00 - 21:00</h5>
                                    <p>Todos os níveis</p>
                                </td>
                                <td className="bg-dark text-white">
                                    <h5>20:00 - 21:00</h5>
                                    <p>Todos os níveis</p>
                                </td>
                                <td className="bg-dark text-white">
                                    <h5>20:00 - 21:00</h5>
                                    <p>Todos os níveis</p>
                                </td>
                                <td className="bg-dark text-white">
                                    <h5>Open Match</h5>
                                    <p>Open Match</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section id="testimonials" className="p-4 bg-dark text-white">
                <div className="container">
                    <h2 className="text-center">O que nossos alunos acham??</h2>
                    <div className="row text-center">
                        <div className="col">
                            <div className="slider">
                                <div>
                                    <div>
                                        <blockquote className="blockquote">
                                            <p className="mb-0">O que eu mais gosto nas aulas é o ambiente de apoio e amizade que encontrei aqui. Os
                                                colegas e instrutores são sempre encorajadores, e sinto que realmente faço parte de uma
                                                comunidade. Além disso, as técnicas de autodefesa que aprendi me deram uma enorme
                                                confiança.
                                            </p>
                                            <footer className="blockquote-footer">
                                                João Pereira
                                            </footer>
                                        </blockquote>
                                    </div>

                                    <div>
                                        <blockquote className="blockquote">
                                            <p className="mb-0">
                                                O jiu-jitsu não só me ajudou a manter o peso, mas também aumentou minha autoestima. A
                                                cada conquista e técnica dominada, me sinto mais confiante e realizada. Os instrutores
                                                são incríveis e sempre dispostos a ajudar, o que faz toda a diferença.
                                            </p>
                                            <footer className="blockquote-footer">
                                                Carla Mendes
                                            </footer>
                                        </blockquote>
                                    </div>

                                    <div>
                                        <blockquote className="blockquote">
                                            <p className="mb-0">
                                                Comecei a treinar jiu-jitsu para melhorar minha forma física, mas encontrei muito mais
                                                do que isso. A prática me ajudou a desenvolver disciplina e foco, e a comunidade aqui é
                                                maravilhosa. Sinto que sempre posso contar com meus colegas e instrutores.
                                            </p>
                                            <footer className="blockquote-footer">
                                                Beatriz Lima
                                            </footer>
                                        </blockquote>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}


export default About;