import React from 'react'
import InputC from '../../components/Input/Input';
import styles from "./styles.module.css";
import img from "./../../images/bigUser.png"
export default function UserProfile() {
  return (
    <div>
      <div className={styles.userInfo}>
        <form>
          <div className={styles.imgField}>
            <img src={img} alt="" />
            <div>Lê Kiều Quinh</div>
          </div>
          <div className={styles.infoField}>
            <InputC type={"text"} value={"Lê Kiều Quinh"} disabled>Tên người dùng</InputC>
            <InputC type={"text"} value={"lekieuquinh01"} disabled>Tên đăng nhập</InputC>
            <InputC type={"text"} value={"093789456"} disabled>Số điện thoại</InputC>
            <InputC type={"text"} value={"222222a!"} disabled>Mật khẩu</InputC>
            <InputC type={"text"} value={"adminkq@domain.com"} disabled>Email</InputC>
            <InputC type={"text"} value={"IT"} disabled>Vai trò</InputC>
          </div>
        </form>
      </div>
    </div>
  )
}
