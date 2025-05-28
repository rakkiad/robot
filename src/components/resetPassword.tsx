"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "@/styles/resetPassword.css";

export default function ResetPassword() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handlerResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();


        if (newPassword !== confirmPassword) {
            alert("รัหสผ่านไม่ตรงกัน");
            return;
        }
        if (!email) {
            alert("ไม่พบอีเมล");
            return;
        }
        setLoading(true);

        try {
            const response = await fetch("http://localhost:5000/users/reset-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, newPassword }),
            });

            const data = await response.json();
            if (response.ok) {
                alert("รีเซ็ตรหัสผ่านสำเร็จ!");
                router.push("/login-registers");
            } else {
                alert(data.message || "เกิดข้อผิดพลาดในการรีเซ็ตรหัสผ่าน");
            }
        } catch (error) {
            console.error("เกิดข้อผิดพลาด:", error);
            alert("ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้");
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="reset-password-container">
            <div className="crad-reset-password">
                <div className="form-box-reset-password">
                    <h2>Reset Password</h2>

                    <form onSubmit={handlerResetPassword}>
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                        <input type="password" placeholder="Confirm New Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                        <button type="submit" disabled={loading}>
                            {loading ? "กำลังรีเซ็ตรหัสผ่าน..." : "Reset Password"}
                        </button>
                    </form>

                    <p className="back-to-login" onClick={() => router.push("/login-registers")}>
                        Back to Login
                    </p>
                </div>
                <div className="image-box">
                    <h1>welcome ATJ robot</h1>
                    <img src="/logomine1.png" alt="Login" />
                </div>
            </div>
        </div>
    )
}

