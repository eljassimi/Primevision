import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { SiteLayout } from './components/layout/SiteLayout'
import {
  agbSections,
  datenschutzSections,
  impressumSections,
  widerrufSections,
} from './data/legal'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { LegalPage } from './pages/LegalPage'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <SiteLayout>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route
          path="/impressum"
          element={
            <LegalPage
              title="Impressum"
              description="Gesetzliche Anbieterkennzeichnung – bitte vor dem Go-Live vervollständigen."
              path="/impressum"
              sections={impressumSections}
            />
          }
        />
        <Route
          path="/datenschutz"
          element={
            <LegalPage
              title="Datenschutz"
              description="Platzhalter-Datenschutzerklärung – rechtlich prüfen und ersetzen."
              path="/datenschutz"
              sections={datenschutzSections}
            />
          }
        />
        <Route
          path="/agb"
          element={
            <LegalPage
              title="AGB"
              description="Allgemeine Geschäftsbedingungen – Platzhalterfassung."
              path="/agb"
              sections={agbSections}
            />
          }
        />
        <Route
          path="/widerrufsbelehrung"
          element={
            <LegalPage
              title="Widerrufsbelehrung"
              description="Informationen zum Widerrufsrecht – Platzhalterfassung."
              path="/widerrufsbelehrung"
              sections={widerrufSections}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteLayout>
  )
}
