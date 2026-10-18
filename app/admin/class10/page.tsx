'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SchoolData, Subject, VideoItem, NoteItem, LiveClassItem, ScheduleItem, FeeItem } from '@/lib/schoolData';

export default function AdminClass10Page() {
  const router = useRouter();
  const [data, setData] = useState<any>(SchoolData);
  const [selectedSubject, setSelectedSubject] = useState<string>('Hindi');
  const [selectedMedium, setSelectedMedium] = useState<'Hindi' | 'English'>('Hindi');
  const [noteForm, setNoteForm] = useState({ title: '', fileName: 'note.pdf', description: '' });
  const [videoForm, setVideoForm] = useState({ title: '', fileName: 'lesson.mp4', description: '' });
  const [scheduleForm, setScheduleForm] = useState({ title: '', date: '', time: '', teacher: '', description: '' });
  const [liveForm, setLiveForm] = useState({ title: '', date: '', time: '', teacher: '', link: '', platform: 'Google Meet' });

  useEffect(() => {
    const current = localStorage.getItem('currentUser');
    if (!current) {
      router.push('/login');
      return;
    }
    const user = JSON.parse(current);
    if (user.role !== 'admin') {
      router.push('/student/class10');
      return;
    }

    const stored = localStorage.getItem('schoolPortalData');
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, [router]);

  const class10Subjects = useMemo(() => data.subjects.filter((s: any) => s.classId === 'class10'), [data]);

  const saveData = (next: any) => {
    localStorage.setItem('schoolPortalData', JSON.stringify(next));
    setData(next);
  };

  const addNote = () => {
    if (!noteForm.title) return;
    const next = structuredClone(data);
    next.notes.push({
      id: Date.now().toString(),
      classId: 'class10',
      subject: selectedSubject,
      medium: selectedMedium,
      title: noteForm.title,
      fileName: noteForm.fileName,
      description: noteForm.description,
      uploadedBy: 'admin',
      createdAt: new Date().toISOString(),
    });
    setNoteForm({ title: '', fileName: 'note.pdf', description: '' });
    saveData(next);
  };

  const addVideo = () => {
    if (!videoForm.title) return;
    const next = structuredClone(data);
    next.videos.push({
      id: Date.now().toString(),
      classId: 'class10',
      subject: selectedSubject,
      medium: selectedMedium,
      title: videoForm.title,
      fileName: videoForm.fileName,
      description: videoForm.description,
      uploadedBy: 'admin',
      createdAt: new Date().toISOString(),
    });
    setVideoForm({ title: '', fileName: 'lesson.mp4', description: '' });
    saveData(next);
  };

  const addSchedule = () => {
    if (!scheduleForm.title || !scheduleForm.date) return;
    const next = structuredClone(data);
    next.schedules.push({
      id: Date.now().toString(),
      classId: 'class10',
      subject: selectedSubject,
      medium: selectedMedium,
      title: scheduleForm.title,
      date: scheduleForm.date,
      time: scheduleForm.time,
      teacher: scheduleForm.teacher,
      description: scheduleForm.description,
    });
    setScheduleForm({ title: '', date: '', time: '', teacher: '', description: '' });
    saveData(next);
  };

  const addLiveClass = () => {
    if (!liveForm.title || !liveForm.link) return;
    const next = structuredClone(data);
    next.liveClasses.push({
      id: Date.now().toString(),
      classId: 'class10',
      subject: selectedSubject,
      medium: selectedMedium,
      title: liveForm.title,
      date: liveForm.date,
      time: liveForm.time,
      teacher: liveForm.teacher,
      platform: liveForm.platform,
      link: liveForm.link,
      status: 'Upcoming',
    });
    setLiveForm({ title: '', date: '', time: '', teacher: '', link: '', platform: 'Google Meet' });
    saveData(next);
  };

  const pendingFees = data.fees.filter((fee: any) => fee.status !== 'Paid');

  return (
    <main className="page-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Admin Panel</p>
          <h1>Class 10 Management</h1>
        </div>
        <button className="secondary-btn" onClick={() => router.push('/login')}>
          Logout
        </button>
      </header>

      <section className="summary-grid">
        <div className="mini-card">{pendingFees.length} Pending Fees</div>
        <div className="mini-card">{data.liveClasses.length} Live Classes</div>
        <div className="mini-card">{data.videos.length} Videos</div>
        <div className="mini-card">{data.notes.length} Notes</div>
      </section>

      <section className="split-layout">
        <div className="panel-card">
          <h2>Class 10 Controls</h2>
          <div className="inline-controls">
            <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
              {class10Subjects.map((subject: any) => (
                <option key={subject.name} value={subject.name}>
                  {subject.name}
                </option>
              ))}
            </select>
            <select value={selectedMedium} onChange={(e) => setSelectedMedium(e.target.value as 'Hindi' | 'English')}>
              <option value="Hindi">Hindi Medium</option>
              <option value="English">English Medium</option>
            </select>
          </div>

          <div className="card-group">
            <h3>Upload Note</h3>
            <div className="form-group">
              <label>Title</label>
              <input value={noteForm.title} onChange={(e) => setNoteForm({ ...noteForm, title: e.target.value })} />
            </div>
            <div className="form-group">
              <label>File Name</label>
              <input value={noteForm.fileName} onChange={(e) => setNoteForm({ ...noteForm, fileName: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea value={noteForm.description} onChange={(e) => setNoteForm({ ...noteForm, description: e.target.value })} />
            </div>
            <button className="primary-btn" onClick={addNote}>Add Note</button>
          </div>

          <div className="card-group">
            <h3>Upload Video</h3>
            <div className="form-group">
              <label>Title</label>
              <input value={videoForm.title} onChange={(e) => setVideoForm({ ...videoForm, title: e.target.value })} />
            </div>
            <div className="form-group">
              <label>File Name</label>
              <input value={videoForm.fileName} onChange={(e) => setVideoForm({ ...videoForm, fileName: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea value={videoForm.description} onChange={(e) => setVideoForm({ ...videoForm, description: e.target.value })} />
            </div>
            <button className="primary-btn" onClick={addVideo}>Add Video</button>
          </div>
        </div>

        <div className="panel-card">
          <h2>Schedule & Live Class</h2>
          <div className="card-group">
            <h3>Add Schedule</h3>
            <div className="form-group">
              <label>Title</label>
              <input value={scheduleForm.title} onChange={(e) => setScheduleForm({ ...scheduleForm, title: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Date</label>
              <input type="date" value={scheduleForm.date} onChange={(e) => setScheduleForm({ ...scheduleForm, date: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Time</label>
              <input value={scheduleForm.time} onChange={(e) => setScheduleForm({ ...scheduleForm, time: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Teacher</label>
              <input value={scheduleForm.teacher} onChange={(e) => setScheduleForm({ ...scheduleForm, teacher: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea value={scheduleForm.description} onChange={(e) => setScheduleForm({ ...scheduleForm, description: e.target.value })} />
            </div>
            <button className="primary-btn" onClick={addSchedule}>Add Schedule</button>
          </div>

          <div className="card-group">
            <h3>Add Live Class</h3>
            <div className="form-group">
              <label>Title</label>
              <input value={liveForm.title} onChange={(e) => setLiveForm({ ...liveForm, title: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Date</label>
              <input type="date" value={liveForm.date} onChange={(e) => setLiveForm({ ...liveForm, date: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Time</label>
              <input value={liveForm.time} onChange={(e) => setLiveForm({ ...liveForm, time: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Teacher</label>
              <input value={liveForm.teacher} onChange={(e) => setLiveForm({ ...liveForm, teacher: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Platform</label>
              <input value={liveForm.platform} onChange={(e) => setLiveForm({ ...liveForm, platform: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Link</label>
              <input value={liveForm.link} onChange={(e) => setLiveForm({ ...liveForm, link: e.target.value })} />
            </div>
            <button className="primary-btn" onClick={addLiveClass}>Add Live Class</button>
          </div>
        </div>
      </section>

      <section className="info-grid">
        <div className="mini-card">
          <h3>Uploaded Notes</h3>
          <ul>
            {data.notes
              .filter((item: any) => item.classId === 'class10' && item.subject === selectedSubject && item.medium === selectedMedium)
              .slice(0, 5)
              .map((item: any) => (
                <li key={item.id}>{item.title}</li>
              ))}
          </ul>
        </div>
        <div className="mini-card">
          <h3>Uploaded Videos</h3>
          <ul>
            {data.videos
              .filter((item: any) => item.classId === 'class10' && item.subject === selectedSubject && item.medium === selectedMedium)
              .slice(0, 5)
              .map((item: any) => (
                <li key={item.id}>{item.title}</li>
              ))}
          </ul>
        </div>
        <div className="mini-card">
          <h3>Fee Status</h3>
          <ul>
            {data.fees.slice(0, 5).map((fee: any) => (
              <li key={fee.id}>{fee.studentName}: {fee.status}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
