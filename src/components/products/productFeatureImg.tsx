interface Props {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function ProductGallery({ images }: Props) {
  return (
    <>
      <div className="d-block d-md-flex">
        <img
          className="w-100 max-height-200 rounded-3 mb-4 mb-md-0"
          //src={`${import.meta.env.BASE_URL}images/product7.jpg`}
          src="https://images.unsplash.com/photo-1511500210851-7b5a6fd70703?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={images[0].alt}
        />
      </div>
      <div className="row mt-4">
        <div className="col-6">
          <img
            className="w-100 max-height-200 rounded-3"
            //src={`${import.meta.env.BASE_URL}images/product8.jpg`}
            src="https://images.unsplash.com/photo-1488953763695-c4a79ecf4727?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGxpdnJlc3xlbnwwfHwwfHx8MA%3D%3D"
            alt={images[2].alt}
          />
        </div>
        <div className="col-6">
          <img
            className="w-100 max-height-200 rounded-3"
            //src={`${import.meta.env.BASE_URL}images/product9.jpg`}
            src="https://images.unsplash.com/photo-1497796742626-fe30f204ec54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt={images[3].alt}
          />
        </div>
      </div>
    </>
  );
}
