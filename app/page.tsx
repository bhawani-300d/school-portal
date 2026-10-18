import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="page-shell hero-wrap">
      <section className="hero-card">
        <p className="eyebrow">School Portal</p>
        <h1>Class 10 Learning Platform</h1>
        <p className="hero-text">
          Admin videos, notes, live classes, fees, syllabus aur timetable ko ek hi dashboard se manage karein.
          Students login karke apni class aur medium ke according study material access kar sakte hain.
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
          <h3>6 Subjects</h3>
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
          <h3>Modules</h3>
          <ul>
            <li>Notes</li>
            <li>Videos</li>
            <li>Schedule</li>
            <li>Fees</li>
            <li>Live Classes</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
