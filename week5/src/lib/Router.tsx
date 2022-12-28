import LetterPage from '../pages/LetterPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WritePage from '../pages/WritePage';
import ContentPage from '../pages/ContentPage';

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LetterPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/content/:letterId" element={<ContentPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
