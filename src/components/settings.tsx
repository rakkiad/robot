'use client';
import "@/styles/settings.css"
import React, { useState } from 'react';

export default function Setting() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <main className="main-setting">
      <div className="second-main-setting">
        <div className="title-setting">
          <div className="tail-title-setting">การจัดการข้อมูลผู้ใช้</div>
        </div>
        <div className="body-setting">
          <div className="container-setting">
          <div className="setting-image">
              <div className="setting-image-group" style={{ position: 'relative', width: '160px', height: '160px', borderRadius: '50%', overflow: 'hidden', marginBottom: '20px' }}>
                <img
                  src="/default-profile.png" 
                  alt="Profile"
                  style={{ width: '150%', height: '150%', objectFit: 'cover' }}
                />
                <label style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0,0,0,0.4)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    width="32"
                    fill="white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 5h-3.17l-1.84-2H8.99L7.15 5H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-8 13a5 5 0 1 1 .001-10.001A5 5 0 0 1 12 18zm0-8a3 3 0 1 0 .001 6.001A3 3 0 0 0 12 10z" />
                  </svg>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          // แสดงรูปใหม่เมื่อเลือกไฟล์
                          const img = document.querySelector("img[alt='Profile']") as HTMLImageElement;
                          if (img) img.src = reader.result as string;
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                    style={{ display: 'none' }}
                  />
                </label>
              </div>
              </div>
            <div className="setting-text-group">
              <div className="setting-item-one">
              <div className="setting-item-name">
                <label className="setting-label">ชื่อผู้ใช้:</label>
                <input 
                  className="setting-input"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  
                />
                <div className="button-box">
                <button className="button-save">บันทึก</button>
              </div>
              </div>
              </div>
              <div className="setting-item-two">
              <div className="setting-item">
                <label className="setting-label">อีเมล:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="setting-input"
                />
              </div>

              <div className="setting-item">
                <label className="setting-label">รหัสผ่านใหม่:</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="setting-input"
                />
              </div>

              <div className="setting-item">
                <label className="setting-label">ยืนยันรหัสผ่าน:</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="setting-input"
                />
              </div>

              <div className="button-box">
                <button className="button-save">บันทึก</button>
                <button className="button-cancel">ยกเลิก</button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
