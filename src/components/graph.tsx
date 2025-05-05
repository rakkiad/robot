import React from 'react'
import "@/styles/graph.css"
export default function graph() {
  
  return (
    <main className='graph-dashboard'>
      <section className="graph-left-panel">
        <h2 className="graph-title">ภาพรวมการใช้สารเคมี</h2>
        <div className="graph-filters">
          <label className="graph-label">เลือกวันที่:</label>
          <input type="date" className="graph-date-picker" />
        </div>
        <div className="graph-main-chart">
          <div className="line-graph-chart">[กราฟเส้นสารเคมีทั้งหมด]</div>
          <div className="bar-graph-chart">[กราฟแท่งสารเคมีทั้งหมด]</div>
        </div>
      </section>

      <section className="graph-right-panel">
        <h2 className="graph-title">การใช้สารเคมี</h2>
        <div className="graph-chemical-list">
          <div className="chemical-water-item">
            <span className="chemical-water-icon">💧</span>
            <p className="chemical-water-text">น้ำ</p>
            <p className="chemical-water-usage">1000 L</p>
            </div>
          <div className="chemical-fertilizer-item">
            <span className="chemical-fertilizer-icon">🌱</span>
            <p className="chemical-fertilizer-text">ปุ๋ย</p>
            <p className="chemical-fertilizer-usage">500 kg</p>
            </div>
          <div className="chemical-hazardous-item">
            <span className="chemical-hazardous-icon">☠️</span>
            <p className="chemical-hazardous-text">สารเคมีอันตราย</p>
            <p className="chemical-hazardous-usage">200 L</p>
          </div>
        </div>
        <div className="graph-detail-box">
          <h3 className="graph-subtitle">รายละเอียดตามชนิดพืช</h3>
          
        </div>
        </section>
    </main>
  )
}
