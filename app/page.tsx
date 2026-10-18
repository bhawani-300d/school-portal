import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <p className="eyebrow">School Portal</p>
        <h1>Class 10 Learning Platform</h1>
        <p>
          Admin can upload syllabus, notes, videos, live classes, fees, and schedules. Students can log in and access
          all class-specific resources.
        </p>
        <div className="button-row">
          <Link href="/login" className="primary-btn">
            Login
          </Link>
          <Link href="/admin/class10" className="secondary-btn">
            Admin Demo
          </Link>
        </div>
      </section>

      <section className="info-grid">
        <div className="mini-card">
          <h3>Subjects</h3>
          <ul>
            <li>Hindi</li>
            <li>English</li>
            <li>Mathematics</li>
            <li>Social Science</li>
            <li>Science</li>
            <li>Sanskrit</li>
          </ul>
        </div>
        <div className="mini-card">
          <h3>Mediums</h3>
          <ul>
            <li>Hindi Medium</li>
            <li>English Medium</li>
          </ul>
        </div>
        <div className="mini-card">
          <h3>Features</h3>
          <ul>
            <li>Notes</li>
            <li>Videos</li>
            <li>Fees</li>
            <li>Schedule</li>
            <li>Live Classes</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
