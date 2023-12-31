function FarktorOffice({
  icon1,
  icon2,
  moveToAddress,
  handleMarkerClick,
  markers,
  lat,
  lng,
  header,
  address,
  telNo
}) {
  return (
    <div className="border-l-[1px] mb-10">
      <div className="grid grid-cols-[auto_1fr]">
        <div>
          <img className="icon" src={icon1} alt="icon1" />
        </div>
        <div>
          <h2 className="text-[#092D9B] font-bold">{header}</h2>
          <p className="text-[181A46] font-normal">
            {address}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-[auto_1fr]">
        <div>
          <img className="icon" src={icon2} alt="icon2" />
        </div>
        <div>
          <p>
            Çağrı merkezi: <span className="font-bold">{telNo}</span>
          </p>
          <p className="text-[#181A46] font-normal opacity-[0.6]">
            (9.30 - 18.30 arasında ulaşabilirsiniz)
          </p>
        </div>
      </div>
      <div
        className="m-[0_40px]"
        onClick={() => moveToAddress({ lat: lat, lng: lng }, 20)}
      >
        <button
          className="bg-transparent h-10 w-40 text-[#092D9B] border-[1px] rounded-3xl border-[#092D9B]"
          onClick={() => handleMarkerClick(markers[1])}
        >
          Haritada Göster
        </button>
      </div>
    </div>
  );
}

export default FarktorOffice;
