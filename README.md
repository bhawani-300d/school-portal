# School Portal

School portal starter app for admin and student login with Class 10 study resources.

## Features
- Admin login
- Student login
- Class 10 panel with 6 subjects
- Hindi/English medium
- Notes upload
- Video upload
- Class schedule
- Live classes
- Fees management
- Local persistence with browser localStorage

## Default admin login
- Email: bhawanishankarjoshi300@gmail.com
- Password: Bhawani@2003

## Default student login
- Email: student@demo.com
- Password: Student@123

## Run locally
```bash
npm install
npm run dev
```

Then open: http://localhost:3000

## Pages
- `/login` - login page
- `/admin/class10` - admin control for Class 10
- `/student/class10` - student view for Class 10

## Notes
This project is a functional starter. It uses browser localStorage to keep data between refreshes. For production, replace with a real database and auth provider.
