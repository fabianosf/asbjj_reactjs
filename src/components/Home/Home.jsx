import Footer from '../Footer/Footer';
import './Home.css';
import { useState } from 'react';


function Home() {
    const [showModal, setShowModal] = useState(false);

    /* Galeria de Fotos */
    const images = [
        'image/pessoal1.jpg',
        'image/pessoal2.jpg',
        'image/pessoal3.jpg',
        'image/pessoal4.jpg',
        'image/pessoal5.jpg',
        'image/pessoal6.jpg',
    ];

    const [selectedImage, setSelectedImage] = useState(null);

    // Função para abrir o modal com a imagem selecionada
    const openModal = (image) => {
        setSelectedImage(image);
    };

    // Função para fechar o modal
    const closeModal = () => {
        setSelectedImage(null);
    };
    /* Galeria de fotos */


    // Função para abrir o modal ao clicar no vídeo
    const handleVideoClick = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    // Função para fechar o modal
    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <div>
            {/* Start Carousel */}
            <div id="carouselExampleCaptions" className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3000">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/image/imagem1.jpg" className="d-block w-100" alt="imagem1" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Guerreiros no Tatame</h5>
                            <p>Prof. Alexandre Salgado</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/image/imagem2.jpg" className="d-block w-100" alt="imagem2" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Guerreiras no Tatame</h5>
                            <p>Profa. Anna Carolina</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/image/imagem3.jpg" className="d-block w-100" alt="imagem3" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Criançada no Tatame</h5>
                            <p>Prof. Alexandre Salgado e Anna Carolina</p>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* End Carousel */}

            {/* Start Section Icons */}
            <section id="home-icon" className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-4 text-center">
                            <i className="fas fa-user-ninja fa-3x mb-2"></i>
                            <h3>Jiu-Jitsu</h3>
                            <p>Escola de artes marciais Alexandre Salgado</p>
                        </div>
                        <div className="col-md-4 mb-4 text-center">
                            <i className="fas fa-dumbbell fa-3x mb-2"></i>
                            <h3>Defesa Pessoal</h3>
                            <p>Professores Alexandre Salgado e Ana Carolina</p>
                        </div>
                        <div className="col-md-4 mb-4 text-center">
                            <i className="fas fa-person-praying fa-3x mb-2"></i>
                            <h3>Yoga</h3>
                            <p>Professora Ana Carolina</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Section Icons */}

            {/* Start Section Aula Experimental */}
            <section id="home-heading" className="p-5">
                <div className="dark-overlay">
                    <div className="row">
                        <div className="col">
                            <div className="container pt-5">
                                <h1>Gostaria de fazer uma aula experimental conosco?</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Section Aula Experimental */}

            
            {/* Conheca nossa academia*/}
            <section id="info" className="py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 align-self-center">
                            <h3>Conheca nossa academia.</h3>
                            <p>Um de nossos tatamos ao lado</p>
                            <a href="{% url 'sobre' %}" className="btn btn-outline-danger btn-lg">Saiba mais</a>
                        </div>

                        <div className="col-md-6">
                            <img src='/image/tatame2.png' alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            {/* Conheca nossa academia*/}
             
            {/* Start Video */}
            <section id="video-section" className="video-background py-5">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <a href="#" className="video" onClick={handleVideoClick}>
                                <i className="fas fa-play fa-3x"></i>
                            </a>
                            <h1>Veja o que fazemos</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal para exibir o vídeo */}
            {showModal && (
                <div
                    className="modal fade show d-block"
                    style={{ display: 'block' }}
                    role="dialog"
                    tabIndex="-1"
                >
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleClose}
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <div className="ratio ratio-16x9">
                                    <iframe
                                        className="embed-responsive-item"
                                        src="https://www.youtube.com/embed/S4jrhBwhjOw"
                                        allowFullScreen
                                        title="Video Institucional"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* End Video Section */}

            {/* Start Galeria de fotos */}

            <section id="gallery" className="py-5">
                <div className="container">
                    <h1 className="text-center">Galeria de Fotos</h1>
                    <p className="text-center">Clique em nossas imagens</p>

                    <div className="row mb-4">
                        {images.map((image, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="card mb-4">
                                    {/* Removemos o comportamento padrão do link */}
                                    <img
                                        src={image}
                                        alt={`Imagem ${index + 1}`}
                                        className="card-img-top img-fluid"
                                        onClick={(e) => {
                                            e.preventDefault(); // Previne o comportamento padrão de abrir o link
                                            openModal(image);
                                        }}
                                        style={{ cursor: 'pointer', borderRadius: '8px', border: '1px solid #ddd' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Modal para exibir a imagem selecionada */}
                    {selectedImage && (
                        <div
                            className="modal fade show d-block"
                            tabIndex="-1"
                            role="dialog"
                            onClick={closeModal}
                            style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
                        >
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                    <div className="modal-body p-0">
                                        <img
                                            src={selectedImage}
                                            alt="Imagem selecionada"
                                            className="img-fluid rounded"
                                            style={{ border: '5px solid white' }}
                                        />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={closeModal}>
                                            Fechar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
            {/* End Galeria de fotos */}
            <Footer />
        </div>
    );
}

export default Home;
