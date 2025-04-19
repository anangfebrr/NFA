function App() {

  return (
    <>
      {/* Header */}
        <div className="container">
          <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <div className="col-md-3 mb-2 mb-md-0">
              <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
                <i className="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC" }}></i>
                <span className="ms-2 fs-4">bookstore</span>
              </a>
            </div>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li><a href="#" className="nav-link px-2">Home</a></li>
              <li><a href="#" className="nav-link px-2">Book</a></li>
              <li><a href="#" className="nav-link px-2">Team</a></li>
              <li><a href="#" className="nav-link px-2">Contact</a></li>
            </ul>

            <div className="col-md-3 text-end">
              <button type="button" className="btn btn-outline-primary me-2">Login</button>
              <button type="button" className="btn btn-primary">Register</button>
            </div>
          </header>
        </div>

        {/* Hero */}
        <div className="container my-5">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Keajaiban Toko Kelontong Namiya</h1>
              <p className="lead">bercerita tentang toko tua misterius yang memberi nasihat kepada orang-orang lewat surat. Kisah ini menyentuh hati dan mengajarkan tentang empati, harapan, dan kekuatan saling membantu.</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Buy Now</button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Detail</button>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                <img className="rounded-lg-3 w-100" src="https://ebooks.gramedia.com/ebook-covers/61623/image_highres/BLK_KTKNTMOTNGSNZNK2021433900.jpg" alt="" width="720" />
            </div>
          </div>
        </div>

        {/* Product List */}
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

        {/* Footer */}
        <div className="container">
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Book</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Team</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Contact</a></li>            
            </ul>
            <p className="text-center text-body-secondary">&copy; 2025 NF Academy</p>
          </footer>
        </div>
    </>
  )
}

export default App
