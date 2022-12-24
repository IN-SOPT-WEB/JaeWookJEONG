import LetterPage from '../pages/LetterPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WritePage from '../pages/WritePage';

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LetterPage />} />
        <Route path="/write" element={<WritePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
