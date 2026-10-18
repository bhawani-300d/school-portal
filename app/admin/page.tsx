html, body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background: #f5f7fb;
  color: #1f2937;
}

* {
  box-sizing: border-box;
}

button, input, textarea, select {
  font: inherit;
}

.page-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 20px 60px;
}

.centered {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-card,
.auth-card,
.panel-card,
.mini-card,
.subject-card {
  background: #ffffff;
  border-radius: 18px;
  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.08);
}

.hero-card {
  padding: 40px;
  margin-bottom: 28px;
}

.eyebrow {
  margin: 0 0 10px;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #6d28d9;
  font-weight: 700;
}

.hero-card h1,
.auth-card h1,
header h1 {
  margin: 0 0 12px;
  font-size: clamp(2rem, 4vw, 3rem);
}

.button-row,
.top-actions,
.inline-controls {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.primary-btn,
.secondary-btn,
.segment,
.link-btn {
  border: none;
  border-radius: 10px;
  padding: 12px 16px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.primary-btn {
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  color: #fff;
}

.secondary-btn {
  background: #eef2ff;
  color: #1f2937;
}

.wide {
  width: 100%;
}

.link-btn {
  background: #dcfce7;
  color: #166534;
  margin-top: 8px;
}

.info-grid,
.summary-grid,
.subject-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.mini-card,
.subject-card {
  padding: 20px;
}

.mini-card h3,
.subject-card h3,
.panel-card h2,
.card-group h3 {
  margin-top: 0;
}

.subject-card {
  min-height: 180px;
}

.split-layout {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  margin-top: 24px;
}

.panel-card {
  padding: 24px;
}

.card-group {
  margin-top: 14px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
}

input, textarea, select {
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  padding: 11px 12px;
  background: #fff;
}

textarea {
  min-height: 90px;
  resize: vertical;
}

.auth-card {
  width: min(500px, 90vw);
  padding: 32px;
}

.segmented {
  display: flex;
  gap: 8px;
  margin: 18px 0;
}

.segment {
  flex: 1;
  background: #e2e8f0;
  color: #1f2937;
}

.segment.active {
  background: #2563eb;
  color: white;
}

.credentials-box {
  margin-top: 18px;
  background: #f3f4f6;
  border-radius: 12px;
  padding: 14px;
  font-size: 14px;
  color: #374151;
}

.error-message {
  color: #b91c1c;
  font-weight: 700;
  margin-top: 10px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.item-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.item-list li {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px;
  border-radius: 10px;
  background: #f8fafc;
}

.stack-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
}

.subject-meta {
  display: inline-block;
  margin-top: 8px;
  background: #eff6ff;
  color: #1d4ed8;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
}

@media (max-width: 768px) {
  .split-layout {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }
}
