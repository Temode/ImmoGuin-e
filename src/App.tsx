import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SocialAuthPage from "./components/pages/SocialAuthPage";
import EmailAuthPage from "./components/pages/EmailAuthPage";
import UserRoleSelection from "./components/pages/UserRoleSelection";
import Home from "./components/pages/Home";
import Dashboard_Locataire from './components/dashbord_Locataire/Dashbord_Locataire';
import Mon_Logement from './components/dashbord_Locataire/Mon_Logement';
import Mes_Paiements from './components/dashbord_Locataire/Mes_Paiement';
import Documents from './components/dashbord_Locataire/Documents';
import Messages from './components/dashbord_Locataire/Messages';
import Notifications from './components/dashbord_Locataire/Notifications';
import SearchProperty from './components/dashbord_Locataire/Searchproperty';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<SocialAuthPage />} />
        <Route path="/auth/email" element={<EmailAuthPage />} />
        <Route path="/user-role" element={<UserRoleSelection />} />
        <Route path='/dashbord-locataire' element={<Dashboard_Locataire />} />
        <Route path='/mon-logement' element={<Mon_Logement />} />
        <Route path="/mes_paiements" element={<Mes_Paiements />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/searchproperty" element={<SearchProperty />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
