import { Routes, Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';
import PageNoteFound from '../components/PageNoteFound';

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<PageNoteFound />} />
    </Routes>
  );
}
