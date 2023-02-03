
export const Card = ({ img }) => {
  return (

    <div
    data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="50"
      className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
        <img src={img.download_url} width="100%" height="300" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{img.author}</h5>
          <p className="card-text">desc</p>
        </div>
      </div>
    </div>
  );
};
