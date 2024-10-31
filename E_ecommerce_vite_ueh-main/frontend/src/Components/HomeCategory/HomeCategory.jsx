import React from 'react'
import './HomeCategory.css'
import dmfood from "../Assets/HomeComponents/dm-food.png"
import dmtt from "../Assets/HomeComponents/dm-tt.png"
import dmdcht from "../Assets/HomeComponents/dm-dcht.png"
import dmqln from "../Assets/HomeComponents/dm-qln.png"


const HomeCategory = () => {
  return (
    <div>
      <div className="danh-muc-section">
        <h2 className="danh-muc-title">Danh mục sản phẩm</h2>
        <p className="danh-muc-subtitle">UEH - Đồng hành cùng bạn từ bữa ăn đến lớp học</p>

        <div className="danh-muc-grid">
          <div className="danh-muc-item">
            <img src={dmfood} alt="UEH Food" className="danh-muc-image" />
            <button className="danh-muc-button">UEH FOOD</button>
          </div>

          <div className="danh-muc-giua">
            <div className="danh-muc-item">
              <img src={dmtt} alt="Thời trang" className="danh-muc-image" />
              <button className="danh-muc-button">THỜI TRANG</button>
            </div>

            <div className="danh-muc-item">
              <img src={dmdcht} alt="Dụng cụ học tập" className="danh-muc-image" />
              <button className="danh-muc-button">DỤNG CỤ HỌC TẬP</button>
            </div>
          </div>



          <div className="danh-muc-item">
            <img src={dmqln} alt="Quà lưu niệm" className="danh-muc-image" />
            <button className="danh-muc-button">QUÀ LƯU NIỆM</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeCategory