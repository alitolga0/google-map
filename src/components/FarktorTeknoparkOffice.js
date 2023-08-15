function FarktorTeknoparkOffice({
  moveToAddress,
  handleMarkerClick,
  icon1,
  icon2,
  markers,
  lat,
  lng,
}) {
  return (
    <div className="border-l-[1px] mb-20">
      <div className="grid grid-cols-[auto_1fr]">
        <div>
          <img className="icon" src={icon1} alt="icon1" />
        </div>
        <div>
          <h2 className="text-[#092D9B]">Farktor Teknopark Ofis</h2>
          <p className="text-[#181A46] opacity-[0.6]">
            Aksu Mah. Omu Cad. no:77 Atakum/Samsun
          </p>
        </div>
      </div>
      <div className="grid grid-cols-[auto_1fr]">
        <div>
          <img className="icon" src={icon2} alt="icon2" />
        </div>
        <div>
          <p>Çağrı merkezi: 0850 259 3333</p>
          <p className="text-[#181A46]">
            (9.30 - 18.30 arasında ulaşabilirsiniz)
          </p>
        </div>
      </div>
      <div
        className="m-[0_40px]"
        onClick={() => moveToAddress({ lat: lat, lng: lng }, 15)}
      >
        <button
          className="bg-transparent rounded-2xl h-10 w-40 text-[#092D9B] border-[1px] border-[#092D9B]"
          onClick={() => handleMarkerClick(markers[0])}
        >
          Haritada Göster
        </button>
      </div>
    </div>
  );
}

export default FarktorTeknoparkOffice;
