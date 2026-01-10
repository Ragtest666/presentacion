import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Globe, Facebook, Instagram, MapPin, MessageCircle, Eye, Users, TrendingUp, Target, Zap, DollarSign, CheckCircle } from 'lucide-react';

const OpticaPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      component: () => (
        <div className="relative w-full h-full bg-gradient-to-br from-amber-600 via-amber-500 to-yellow-400 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative z-10 text-center px-6 max-w-5xl">
            <Eye className="w-24 h-24 mx-auto text-white mb-6 animate-pulse" />
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
              PROPUESTA ESTRATÉGICA DE DOMINIO DIGITAL 2026
            </h1>
            <h2 className="text-2xl md:text-4xl text-white mb-8 font-light">
              Óptica Leonesa: El Renacimiento de una Tradición de 25 Años
            </h2>
            <p className="text-xl text-white/90">
              Presentado por: [Tu Nombre] – Estratega Digital de Alcance Local
            </p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      component: () => (
        <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-6 md:p-12">
          <div className="max-w-5xl w-full">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center">
              La Realidad Actual: Oportunidad Invisible
            </h1>
            <p className="text-xl text-gray-400 text-center mb-12">Puntos Críticos Identificados</p>
            <div className="grid gap-6 md:gap-8 mb-12">
              <div className="bg-red-900/30 border-l-4 border-red-500 p-6 rounded-lg backdrop-blur">
                <h3 className="text-2xl font-semibold text-white mb-3">Activos Digitales Desperdiciados</h3>
                <p className="text-gray-300">Google Maps sin control, sin presencia digital oficial</p>
              </div>
              <div className="bg-red-900/30 border-l-4 border-red-500 p-6 rounded-lg backdrop-blur">
                <h3 className="text-2xl font-semibold text-white mb-3">Conexión Perdida</h3>
                <p className="text-gray-300">Desconexión con público joven, trabajadores y ejecutivos</p>
              </div>
              <div className="bg-red-900/30 border-l-4 border-red-500 p-6 rounded-lg backdrop-blur">
                <h3 className="text-2xl font-semibold text-white mb-3">Visibilidad Cero</h3>
                <p className="text-gray-300">25 años de prestigio invisible para quien busca en internet</p>
              </div>
            </div>
            <div className="bg-amber-500/20 border border-amber-500 p-6 rounded-lg text-center backdrop-blur">
              <p className="text-2xl text-amber-300 font-semibold">
                "Un legado de 25 años merece una vitrina digital que lo multiplique"
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      component: () => (
        <div className="w-full h-full bg-gradient-to-br from-blue-900 to-blue-700 flex flex-col items-center justify-start p-6 md:p-12 overflow-hidden">
          <div className="w-full max-w-6xl flex-shrink-0">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 text-center">
              Ecosistema Digital Óptica Leonesa
            </h1>
          </div>
          
          <div className="flex-1 w-full flex items-center justify-center max-w-4xl mx-auto">
            <div className="relative w-full" style={{aspectRatio: '1/1', maxHeight: '70vh'}}>
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" style={{zIndex: 10}}>
                <line x1="50" y1="50" x2="15" y2="12" stroke="white" strokeWidth="0.3" strokeOpacity="0.5" strokeDasharray="2,1">
                  <animate attributeName="stroke-dashoffset" from="0" to="3" dur="1s" repeatCount="indefinite" />
                </line>
                <line x1="50" y1="50" x2="85" y2="12" stroke="white" strokeWidth="0.3" strokeOpacity="0.5" strokeDasharray="2,1">
                  <animate attributeName="stroke-dashoffset" from="0" to="3" dur="1s" repeatCount="indefinite" />
                </line>
                <line x1="50" y1="50" x2="15" y2="88" stroke="white" strokeWidth="0.3" strokeOpacity="0.5" strokeDasharray="2,1">
                  <animate attributeName="stroke-dashoffset" from="0" to="3" dur="1s" repeatCount="indefinite" />
                </line>
                <line x1="50" y1="50" x2="85" y2="88" stroke="white" strokeWidth="0.3" strokeOpacity="0.5" strokeDasharray="2,1">
                  <animate attributeName="stroke-dashoffset" from="0" to="3" dur="1s" repeatCount="indefinite" />
                </line>
              </svg>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-amber-500 rounded-full p-6 md:p-10 shadow-2xl">
                <Globe className="w-12 h-12 md:w-20 md:h-20 text-white" />
                <p className="text-white font-bold text-center mt-2 text-sm md:text-lg whitespace-nowrap">Sitio Web</p>
              </div>
              
              <div className="absolute" style={{top: '12%', left: '15%', transform: 'translate(-50%, -50%)', zIndex: 30}}>
                <div className="bg-blue-600 rounded-full p-3 md:p-5 shadow-xl">
                  <Facebook className="w-6 h-6 md:w-10 md:h-10 text-white" />
                </div>
                <p className="text-white text-xs mt-2 font-semibold text-center whitespace-nowrap">Comunidad</p>
              </div>
              
              <div className="absolute" style={{top: '12%', left: '85%', transform: 'translate(-50%, -50%)', zIndex: 30}}>
                <div className="bg-pink-600 rounded-full p-3 md:p-5 shadow-xl">
                  <Instagram className="w-6 h-6 md:w-10 md:h-10 text-white" />
                </div>
                <p className="text-white text-xs mt-2 font-semibold text-center whitespace-nowrap">Confianza</p>
              </div>
              
              <div className="absolute" style={{top: '88%', left: '15%', transform: 'translate(-50%, -50%)', zIndex: 30}}>
                <div className="bg-green-600 rounded-full p-3 md:p-5 shadow-xl">
                  <MapPin className="w-6 h-6 md:w-10 md:h-10 text-white" />
                </div>
                <p className="text-white text-xs mt-2 font-semibold text-center whitespace-nowrap">Visibilidad</p>
              </div>
              
              <div className="absolute" style={{top: '88%', left: '85%', transform: 'translate(-50%, -50%)', zIndex: 30}}>
                <div className="bg-green-500 rounded-full p-3 md:p-5 shadow-xl">
                  <MessageCircle className="w-6 h-6 md:w-10 md:h-10 text-white" />
                </div>
                <p className="text-white text-xs mt-2 font-semibold text-center whitespace-nowrap">Conversión</p>
              </div>
            </div>
          </div>
          
          <div className="w-full max-w-6xl mt-6 flex-shrink-0">
            <div className="bg-white/10 backdrop-blur border border-white/20 p-4 md:p-6 rounded-lg text-center">
              <p className="text-xl md:text-3xl text-white font-semibold">
                "No construimos redes sociales, construimos propiedad digital permanente"
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      component: () => (
        <div className="w-full h-full bg-gradient-to-br from-green-900 to-green-700 flex items-center justify-center p-6 md:p-12">
          <div className="max-w-5xl w-full">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center">
              Recuperación de Territorio Digital
            </h1>
            <p className="text-xl text-green-200 text-center mb-12">Fase 1 - Mes 1</p>
            <div className="grid gap-6">
              <div className="bg-white/10 backdrop-blur border-l-4 border-amber-500 p-6 md:p-8 rounded-lg">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-12 h-12 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-3">Rescate de 4 Sucursales en Google</h3>
                    <p className="text-green-100 text-lg">Recuperación completa de perfiles en Maps</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur border-l-4 border-amber-500 p-6 md:p-8 rounded-lg">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-12 h-12 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-3">Sitio Web Oficial .mx</h3>
                    <p className="text-green-100 text-lg">Plataforma central con mapa interactivo y agendado</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur border-l-4 border-amber-500 p-6 md:p-8 rounded-lg">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-12 h-12 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-3">Identidad Digital Unificada</h3>
                    <p className="text-green-100 text-lg">Facebook e Instagram con paleta Dorado/Blanco</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      component: () => (
        <div className="w-full h-full bg-gradient-to-br from-purple-900 to-purple-700 flex items-center justify-center p-4 md:p-8 overflow-y-auto">
          <div className="max-w-5xl w-full py-4">
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 md:mb-8 text-center">
              El Mensaje Correcto para Cada Audiencia
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 text-center mb-8 md:mb-12 font-semibold">Tres Pilares de Contenido</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-white/10 backdrop-blur border border-amber-500/50 p-4 md:p-6 rounded-lg text-center">
                <div className="bg-amber-500 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Legado & Confianza</h3>
                <p className="text-purple-100 text-base md:text-lg">Historias de 25 años, testimonios generacionales</p>
              </div>
              <div className="bg-white/10 backdrop-blur border border-amber-500/50 p-4 md:p-6 rounded-lg text-center">
                <div className="bg-amber-500 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Users className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Accesibilidad</h3>
                <p className="text-purple-100 text-base md:text-lg">Paquetes para estudiantes, trabajadores turísticos, familias</p>
              </div>
              <div className="bg-white/10 backdrop-blur border border-amber-500/50 p-4 md:p-6 rounded-lg text-center">
                <div className="bg-amber-500 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Eye className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Tecnología</h3>
                <p className="text-purple-100 text-base md:text-lg">Procesos de alta precisión, equipo de vanguardia</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      component: () => (
        <div className="w-full h-full bg-gradient-to-br from-indigo-900 to-indigo-700 flex items-center justify-center p-6 md:p-12">
          <div className="max-w-5xl w-full">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
              Dominio Geográfico en Puerto Vallarta
            </h1>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur p-8 rounded-lg">
                <Target className="w-16 h-16 text-amber-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Segmentación por Sucursal</h3>
                <p className="text-indigo-100 mb-4">Impacto hiperlocal (5km radio)</p>
                <div className="space-y-3 text-indigo-100">
                  <p><span className="font-bold text-amber-400">Centro:</span> Ejecutivos</p>
                  <p><span className="font-bold text-amber-400">Marina:</span> Turismo premium</p>
                  <p><span className="font-bold text-amber-400">Pitillal:</span> Familias</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur p-8 rounded-lg">
                <div className="text-6xl mb-6">📱</div>
                <h3 className="text-2xl font-bold text-white mb-4">Física + Digital</h3>
                <p className="text-indigo-100 text-lg">QR en mostradores migra clientes al ecosistema digital</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 7,
      component: () => (
        <div className="w-full h-full bg-gradient-to-br from-rose-900 to-rose-700 flex items-center justify-center p-4 md:p-8 overflow-y-auto">
          <div className="max-w-5xl w-full py-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8 text-center">
              El Acelerador Comprobado
            </h1>
            <div className="bg-red-900/40 border-2 border-red-400 p-4 md:p-6 rounded-lg mb-6 md:mb-8 text-center">
              <p className="text-lg md:text-xl text-red-200 font-bold">
                Sin inversión, solo 2% de seguidores ven su contenido
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="bg-white/10 backdrop-blur p-4 md:p-6 rounded-lg text-center">
                <Zap className="w-12 h-12 md:w-16 md:h-16 text-amber-400 mx-auto mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Alcance Garantizado</h3>
                <p className="text-rose-100 text-sm md:text-base">Miles ven sus promociones</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-4 md:p-6 rounded-lg text-center">
                <Target className="w-12 h-12 md:w-16 md:h-16 text-amber-400 mx-auto mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Segmentación</h3>
                <p className="text-rose-100 text-sm md:text-base">Solo quien busca lentes</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-4 md:p-6 rounded-lg text-center">
                <DollarSign className="w-12 h-12 md:w-16 md:h-16 text-amber-400 mx-auto mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">ROI Medible</h3>
                <p className="text-rose-100 text-sm md:text-base">Citas agendadas</p>
              </div>
            </div>
            <div className="bg-amber-500/20 border-2 border-amber-500 p-4 md:p-8 rounded-lg text-center">
              <p className="text-xl md:text-2xl text-amber-300 font-bold">
                "Comprar una fila constante de clientes"
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 8,
      component: () => (
        <div className="w-full h-full bg-gradient-to-br from-emerald-900 to-emerald-700 flex items-center justify-center p-4 md:p-8 overflow-y-auto">
          <div className="max-w-6xl w-full py-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 md:mb-12 text-center">
              Inversión Clara, Resultados Tangibles
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-6 md:mb-8">
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-2xl">
                <div className="text-center mb-4 md:mb-6">
                  <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">$8,500</div>
                  <div className="text-gray-600 text-lg md:text-xl">MXN</div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 text-center">Inicial</h3>
                <ul className="space-y-2 md:space-y-3 text-gray-700 text-sm md:text-base">
                  <li className="flex gap-2"><span className="text-emerald-600">✓</span><span>Rescate Maps</span></li>
                  <li className="flex gap-2"><span className="text-emerald-600">✓</span><span>Web</span></li>
                  <li className="flex gap-2"><span className="text-emerald-600">✓</span><span>Redes</span></li>
                </ul>
                <div className="mt-4 md:mt-6 text-center">
                  <span className="bg-emerald-100 text-emerald-800 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold">ÚNICO</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-2xl">
                <div className="text-center mb-4 md:mb-6">
                  <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">$6,500</div>
                  <div className="text-gray-600 text-lg md:text-xl">MXN/mes</div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 text-center">Gestión</h3>
                <ul className="space-y-2 md:space-y-3 text-gray-700 text-sm md:text-base">
                  <li className="flex gap-2"><span className="text-amber-600">✓</span><span>Contenido</span></li>
                  <li className="flex gap-2"><span className="text-amber-600">✓</span><span>Optimización</span></li>
                  <li className="flex gap-2"><span className="text-amber-600">✓</span><span>Reportes</span></li>
                </ul>
                <div className="mt-4 md:mt-6 text-center">
                  <span className="bg-amber-100 text-amber-800 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold">MENSUAL</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-2xl">
                <div className="text-center mb-4 md:mb-6">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">$4,000+</div>
                  <div className="text-gray-600 text-lg md:text-xl">MXN/mes</div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 text-center">Publicidad</h3>
                <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">Variable según objetivos</p>
                <div className="mt-4 md:mt-6 text-center">
                  <span className="bg-blue-100 text-blue-800 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold">DIRECTO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 9,
      component: () => (
        <div className="w-full h-full bg-gradient-to-br from-amber-600 via-amber-500 to-yellow-400 flex items-center justify-center p-4 md:p-8 overflow-y-auto">
          <div className="max-w-5xl w-full py-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 md:mb-12 text-center drop-shadow-lg">
              Plan de Acción Inmediato
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-2xl">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center">Semanas 1-2</h3>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex gap-3 md:gap-4">
                    <div className="bg-amber-500 text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center flex-shrink-0 font-bold text-sm md:text-base">1</div>
                    <p className="text-gray-700 pt-1 md:pt-2 text-sm md:text-base">Firma de acuerdo</p>
                  </div>
                  <div className="flex gap-3 md:gap-4">
                    <div className="bg-amber-500 text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center flex-shrink-0 font-bold text-sm md:text-base">2</div>
                    <p className="text-gray-700 pt-1 md:pt-2 text-sm md:text-base">Entrega de accesos</p>
                  </div>
                  <div className="flex gap-3 md:gap-4">
                    <div className="bg-amber-500 text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center flex-shrink-0 font-bold text-sm md:text-base">3</div>
                    <p className="text-gray-700 pt-1 md:pt-2 text-sm md:text-base">Sesión fotográfica</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-2xl">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center">Semanas 3-4</h3>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex gap-3 md:gap-4">
                    <div className="bg-amber-500 text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center flex-shrink-0 font-bold text-sm md:text-base">4</div>
                    <p className="text-gray-700 pt-1 md:pt-2 text-sm md:text-base">Lanzamiento</p>
                  </div>
                  <div className="flex gap-3 md:gap-4">
                    <div className="bg-amber-500 text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center flex-shrink-0 font-bold text-sm md:text-base">5</div>
                    <p className="text-gray-700 pt-1 md:pt-2 text-sm md:text-base">Primera campaña</p>
                  </div>
                  <div className="flex gap-3 md:gap-4">
                    <div className="bg-amber-500 text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center flex-shrink-0 font-bold text-sm md:text-base">6</div>
                    <p className="text-gray-700 pt-1 md:pt-2 text-sm md:text-base">Primer reporte</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur border-4 border-white p-6 md:p-8 rounded-lg text-center">
              <Eye className="w-16 h-16 md:w-20 md:h-20 mx-auto text-white mb-4 md:mb-6" />
              <p className="text-2xl md:text-3xl text-white font-bold drop-shadow-lg">
                "¿Comenzamos esta semana?"
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col overflow-hidden">
      <div className="flex-1 relative overflow-hidden">
        {slides[currentSlide].component()}
      </div>

      <div className="bg-gray-800 border-t border-gray-700 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-amber-500 hover:bg-amber-600 text-white transition-colors flex-shrink-0"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex gap-2 overflow-x-auto py-2 flex-1 justify-center">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all flex-shrink-0 ${
                  currentSlide === index ? 'bg-amber-500 w-8' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          <div className="text-white font-semibold flex-shrink-0 hidden sm:block">
            {currentSlide + 1} / {slides.length}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-amber-500 hover:bg-amber-600 text-white transition-colors flex-shrink-0"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpticaPresentation;
