import React, { useState } from "react";

function Photo() {
  const [photo, setPhoto] = useState("Fotoğraf Ekle");

  const photoHandler = (e) => {
    const selected = e.target.files[0]; //İlk dosyayı alır
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"]; // izin verilen dosya tipleri
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      // includes, array içerisindeki istedi seçtiğimiz dosyanın tipini bulur.
      //selected.type dizininde selected yüklediğimiz dosya,type ise dosya tipi. include ise array içerisindeki dosya tiplerine bakıyor.
      let reader = new FileReader(); //FileReader API çalıştırıyoruz.Dosyaları asenkron okumamızı sağlar
      reader.readAsDataURL(selected); // Datayı URL olarak okuma metodu.
      reader.onloadend = () => {
        // onloadend, okumayı bitirdiğimiz dosyayı sayfaya yüklemeyi çalıştıran fonksiyon
        setPhoto(reader.result);
      };
    } else {
      console.log("yanlış");
    }
  };
  const removeHandler = () => {
    setPhoto("");
  };
  return (
    <div className="photocontainer">
      <div
        className="photo"
        style={{
          background: `url("${photo}") no-repeat center/cover`,
        }}
      >  <input type="file" name="Add Photo" id="" onChange={photoHandler} className="addphoto" />
      <button onClick={removeHandler}>Remove Photo</button></div>
    
    </div>
  );
}
export default Photo;
