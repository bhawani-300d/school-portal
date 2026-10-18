'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { SchoolData, adminUser, studentUser } from '@/lib/schoolData';

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<'admin' | 'student'>('admin');
  const [email, setEmail] = useState(adminUser.email);
  const [password, setPassword] = useState(adminUser.password);
  const [error, setError] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('schoolPortalData');
    if (!stored) {
      localStorage.setItem('schoolPortalData', JSON.stringify(SchoolData));
    }
  }, []);

  const handleLogin = () => {
    const stored = localStorage.getItem('schoolPortalData');
    const data = stored ? JSON.parse(stored) : SchoolData;

    const matchedUser = data.users.find(
      (user: any) => user.email === email && user.password === password && user.role === role
    );

    if (!matchedUser) {
      setError('Invalid email/password for selected role.');
      return;
    }

    localStorage.setItem('currentUser', JSON.stringify(matchedUser));
    if (role === 'admin') {
      router.push('/admin/class10');
      return;
    }
    router.push('/student/class10');
  };

  return (
    <main className="page-shell centered">
      <section className="auth-card">
        <h1>School Login</h1>
        <div className="segmented">
          <button
            className={role === 'admin' ? 'segment active' : 'segment'}
            onClick={() => {
              setRole('admin');
              setEmail(adminUser.email);
              setPassword(adminUser.password);
            }}
          >
            Admin
          </button>
          <button
            className={role === 'student' ? 'segment active' : 'segment'}
            onClick={() => {
              setRole('student');
              setEmail(studentUser.email);
              setPassword(studentUser.password);
            }}
          >
            Student
          </button>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        {error ? <p className="error-message">{error}</p> : null}

        <button className="primary-btn wide" onClick={handleLogin}>
          Login
        </button>

        <div className="credentials-box">
          <p>
            <strong>Admin:</strong> bhawanishankarjoshi300@gmail.com / Bhawani@2003
          </p>
          <p>
            <strong>Student:</strong> student@demo.com / Student@123
          </p>
        </div>
      </section>
    </main>
  );
}
