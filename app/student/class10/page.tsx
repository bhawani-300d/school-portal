'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SchoolData } from '@/lib/schoolData';

export default function StudentClass10Page() {
  const router = useRouter();
  const [data, setData] = useState<any>(SchoolData);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [selectedMedium, setSelectedMedium] = useState<'Hindi' | 'English'>('Hindi');

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (!user) {
      router.push('/login');
      return;
    }
    setCurrentUser(JSON.parse(user));

    const stored = localStorage.getItem('schoolPortalData');
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, [router]);

  const class10Subjects = useMemo(() => data.subjects.filter((item: any) => item.classId === 'class10'), [data]);

  const notes = data.notes.filter((item: any) => item.classId === 'class10' && item.medium === selectedMedium);
  const videos = data.videos.filter((item: any) => item.classId === 'class10' && item.medium === selectedMedium);
  const schedules = data.schedules.filter((item: any) => item.classId === 'class10' && item.medium === selectedMedium);
  const liveClasses = data.liveClasses.filter((item: any) => item.classId === 'class10' && item.medium === selectedMedium);
  const studentFee = data.fees.find((fee: any) => fee.studentId === currentUser?.id);

  return (
    <main className="page-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Student Panel</p>
          <h1>Class 10 Dashboard</h1>
        </div>
        <div className="top-actions">
          <select value={selectedMedium} onChange={(e) => setSelectedMedium(e.target.value as 'Hindi' | 'English')}>
            <option value="Hindi">Hindi Medium</option>
            <option value="English">English Medium</option>
          </select>
          <button className="secondary-btn" onClick={() => router.push('/login')}>
            Logout
          </button>
        </div>
      </header>

      <section className="summary-grid">
        <div className="mini-card">Student: {currentUser?.name || 'Student'}</div>
        <div className="mini-card">Fees: {studentFee?.status || 'Pending'}</div>
        <div className="mini-card">{liveClasses.length} Live Classes</div>
        <div className="mini-card">{notes.length} Notes</div>
      </section>

      <section className="subject-grid">
        {class10Subjects.map((subject: any) => (
          <div key={subject.id} className="subject-card">
            <h3>{subject.name}</h3>
            <div className="subject-meta">
              <span>{selectedMedium} Medium</span>
            </div>
            <div className="stack-list">
              {notes
                .filter((item: any) => item.subject === subject.name)
                .slice(0, 2)
                .map((item: any) => (
                  <p key={item.id}>📘 {item.title}</p>
                ))}
              {videos
                .filter((item: any) => item.subject === subject.name)
                .slice(0, 2)
                .map((item: any) => (
                  <p key={item.id}>🎥 {item.title}</p>
                ))}
            </div>
          </div>
        ))}
      </section>

      <section className="split-layout">
        <div className="panel-card">
          <h2>Notes</h2>
          <ul className="item-list">
            {notes.map((item: any) => (
              <li key={item.id}>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="panel-card">
          <h2>Videos</h2>
          <ul className="item-list">
            {videos.map((item: any) => (
              <li key={item.id}>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="split-layout">
        <div className="panel-card">
          <h2>Class Schedule</h2>
          <ul className="item-list">
            {schedules.map((item: any) => (
              <li key={item.id}>
                <strong>{item.title}</strong>
                <span>
                  {item.date} • {item.time} • {item.teacher}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="panel-card">
          <h2>Live Classes</h2>
          <ul className="item-list">
            {liveClasses.map((item: any) => (
              <li key={item.id}>
                <strong>{item.title}</strong>
                <span>
                  {item.date} • {item.time} • {item.platform}
                </span>
                <a href={item.link} target="_blank" rel="noreferrer" className="link-btn">
                  Join
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
