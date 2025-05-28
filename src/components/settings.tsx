'use client';
import React, { useRef, useState } from 'react';
import "@/styles/settings.css";

export default function SettingsPage() {
  const imgRef = useRef<HTMLImageElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profileImage, setProfileImage] = useState('/default-profile.png');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('example@email.com'); // ตั้งค่าเริ่มต้นได้จากระบบ
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfileImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    if (newPassword !== confirmPassword) {
      setErrorMessage('รหัสผ่านใหม่และรหัสผ่านยืนยันไม่ตรงกัน');
      return;
    }

    console.log("Changes saved");
    setErrorMessage('');
  };

  return (
    <main className="main-setting">
      <div className="header-setting">
        <h2>ตั้งค่าข้อมูลส่วนตัว</h2>
        <p>Tue, 07 June 2022</p>
      </div>

      <div className="card-setting">
        <div className="left-section">
          <img ref={imgRef} src={profileImage} alt="Profile" className="profile-img" />
          <h4>{fullName || 'ชื่อของคุณ'}</h4>
          <p>อีเมล: {email}</p>
          <p>เบอร์โทร: {phone || 'ยังไม่ได้กรอกเบอร์โทร'}</p>
        </div>

        <div className="right-section">
          <button
            className="upload-button"
            onClick={() => fileInputRef.current?.click()}
          >
            อัพโหลดรูปภาพ
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleUpload}
            style={{ display: 'none' }}
          />

          <div className="form-group">
            <div className="column">
              <label>ชื่อ-นามสกุล</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="ชื่อ-นามสกุลของคุณ"
              />
            </div>

            <div className="column">
              <label>เบอร์โทร</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="เบอร์โทรศัพท์ของคุณ"
              />
            </div>
            <div className="column">
              <label>รหัสผ่านใหม่</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="รหัสผ่านใหม่ของคุณ"
              />
            </div>

            <div className="column">
              <label>ยืนยันรหัสผ่าน</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="ยืนยันรหัสผ่านใหม่ของคุณ"
              />          
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
            
            <div className="column">
              <label>Email</label>
              <input
                type="email"
                value={email}
                readOnly
                placeholder="example@email.com"
                style={{ backgroundColor: "#f5f5f5", cursor: "not-allowed" }}
              />
            </div>

           
          </div>

          <button className="save-button" onClick={handleSaveChanges}>Save Changes</button>
        </div>
      </div>
    </main>
  );
}
