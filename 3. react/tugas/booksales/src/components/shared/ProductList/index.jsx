export default function ProductList(){
    return(
        <>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">Best Seller</h1>
                    <p className="lead text-body-secondary">buku yang mencapai penjualan sangat tinggi dalam periode waktu tertentu, sehingga menduduki posisi teratas atau sangat tinggi dalam daftar penjualan buku terkemuka. Status ini menunjukkan popularitas dan kesuksesan komersial buku tersebut, meskipun tidak selalu mencerminkan kualitas sastra atau nilai intrinsiknya.</p>
                    <p>
                        <a href="#" className="btn btn-primary my-2 m-2">Views</a>
                        <a href="#" className="btn btn-secondary my-2">Other Book</a>
                    </p>
                    </div>
                </div>
            </section>

            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div className="col">
                        <div className="card shadow-sm">                  
                        <img src="https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/products/narrimyna2.png" alt="" />
                        <div className="card-body">
                            <p className="card-text">Buku ini menggambarkan kesepian, pencarian arah hidup, dan kekuatan untuk terus melangkah meski tanpa bimbingan.</p>
                            <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small className="text-body-secondary">9 mins</small>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                        <img src="https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/products/95ob5m98ur.jpg" alt="" />
                        <div className="card-body">
                            <p className="card-text">Buku ini mengajak pembaca merenungi arti hidup, impian, dan hal-hal sederhana yang membuat hidup layak dijalani.</p>
                            <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small className="text-body-secondary">9 mins</small>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                        <img src="https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/picture_meta/2023/3/19/usxbcmoagfuidu4nsyv7tn.jpg" alt="" />
                        <div className="card-body">
                            <p className="card-text">Buku ini membawa pembaca pada serangkaian penemuan tak lazim yang mengarah pada kenyataan mengerikan di balik dinding-dindingnya.</p>
                            <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small className="text-body-secondary">9 mins</small>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card shadow-sm">
                        <img src="https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/items/9786020366517_Cantik-Itu-Luka-Hard-Cover---Limited-Edition.jpg" alt="" />
                        <div className="card-body">
                            <p className="card-text">Berkisah tentang Dewi Ayu dan kutukan keturunannya, mengeksplorasi tema kekerasan, cinta, dan warisan sejarah dengan gaya magis dan ironis yang khas.</p>
                            <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small className="text-body-secondary">9 mins</small>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                        <img src="https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/items/9786020656069_Sang_Alkemis_cov.jpg" alt="" />
                        <div className="card-body">
                            <p className="card-text">Santiago belajar tentang pentingnya mengikuti impian, mendengarkan kata hati, dan memahami bahasa alam semesta.</p>
                            <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small className="text-body-secondary">9 mins</small>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                        <img src="https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/picture_meta/2023/4/12/xelaqs3qkiaxjjfnnceq23.jpg" alt="" />
                        <div className="card-body">
                            <p className="card-text">Bagian "Angsa" tentang pengungkapan kematian tunangan, dan "Kelelawar" tentang penyelidikan pembunuhan.</p>
                            <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small className="text-body-secondary">9 mins</small>
                            </div>
                        </div>
                        </div>
                    </div>          
                    </div>
                </div>
            </div>
        </>
    )
}