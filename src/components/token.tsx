"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "@/styles/resetPassword.css"; // ใช้สไตล์เดิมได้

export default function AssignRobot() {
    const router = useRouter();
    const [robotToken, setRobotToken] = useState("");
    const [robotName, setRobotName] = useState("");
    const [loading, setLoading] = useState(false);

    const handleAssign = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!robotToken || !robotName) {
            alert("กรุณากรอก token และชื่อหุ่นยนต์ให้ครบถ้วน");
            return;
        }

        setLoading(true);

        try {
            // 👉 ยังไม่เรียก API จริง แค่ mock การทำงาน
            console.log("กำลังผูกหุ่นยนต์...");
            console.log("robotToken:", robotToken);
            console.log("robotName:", robotName);

            // จำลองว่าทำงานสำเร็จ
            alert("ผูกหุ่นยนต์สำเร็จ!");
            router.push("/dashboard"); // ไปหน้า dashboard หลังสำเร็จ

        } catch (error) {
            console.error("เกิดข้อผิดพลาด:", error);
            alert("ไม่สามารถผูกหุ่นยนต์ได้");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="reset-password-container">
            <div className="crad-reset-password">
                <div className="form-box-reset-password">
                    <h2>Assign Robot</h2>

                    <form onSubmit={handleAssign}>
                        <input
                            type="text"
                            placeholder="Robot Token"
                            value={robotToken}
                            onChange={(e) => setRobotToken(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Robot Name"
                            value={robotName}
                            onChange={(e) => setRobotName(e.target.value)}
                            required
                        />
                        <button type="submit" disabled={loading}>
                            {loading ? "กำลังบันทึก..." : "Assign Robot"}
                        </button>
                    </form>

                    <p className="back-to-login" onClick={() => router.push("/login-registers")}>
                        Back to login
                    </p>
                </div>

                <div className="image-box">
                    <h1>Welcome ATJ Robot</h1>
                    <img src="/logomine1.png" alt="Robot" />
                </div>
            </div>
        </div>
    );
}
