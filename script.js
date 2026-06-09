let carreraActual = "";

function abrirMenu(carrera){
  carreraActual = carrera;
  document.getElementById("tituloCarrera").innerText = carrera;

  let info = "";

  if(carrera === "Programación"){
    info = `
      <h3 style="color: var(--primary); font-family: var(--font-display); margin-top: 1rem; margin-bottom: 0.5rem;">Servicio Social</h3>

      <strong style="color: var(--text-dark);">¿Qué es Servicio Social?</strong>
      <ul style="margin-bottom: 1.5rem; margin-left: 1.5rem; color: var(--text-mid);">
        <li>Actividades temporales y obligatorias que realizan los estudiantes, cuyo objetivo es aplicar sus conocimientos para el beneficio de la sociedad.</li>
      </ul>

      <strong style="color: var(--text-dark);">¿Cómo se libera?</strong>
      <ul style="margin-bottom: 1.5rem; margin-left: 1.5rem; color: var(--text-mid);">
        <li>Entrar al link de abajo e ingresar tu matrícula y contraseña.</li>
        <li>Entras a servicios estudiantiles y entras en Servicio Social Y Prácticas Profesionales.</li>
        <li>Entras a Servicio Social y luego a Catálogo de Programas para escoger el programa deseado.</li>
        <li>Con el programa ya en mente entras a Formato de Asignación y llenarlo correctamente.</li>
        <li>Acude a Control Escolar y enseña el formato antes de enviarlo, subir de nuevo y seguir las instrucciones dadas.</li>
      </ul>

      <strong style="color: var(--text-dark);">Unidades receptoras</strong>
      <ul style="margin-bottom: 2.5rem; margin-left: 1.5rem; color: var(--text-mid);">
        <li>Primarias y Secundaria</li>
        <li>Banco de Alimentos</li>
        <li>Lectura y Biblioteca</li>
        <li>Taller de la Institución</li>
      </ul>
       
      <hr style="border: 0; border-top: 1px solid rgba(212, 175, 55, 0.3); margin-bottom: 2rem;">

      <h3 style="color: var(--primary); font-family: var(--font-display); margin-bottom: 0.5rem;">Prácticas Profesionales</h3>

      <strong style="color: var(--text-dark);">¿Qué Son Las Prácticas Profesionales?</strong>
      <ul style="margin-bottom: 1.5rem; margin-left: 1.5rem; color: var(--text-mid);">
        <li>Periodo donde los alumnos de 5to a 6to semestre acudirán a empresas a poner en práctica las habilidades profesionales que han aprendido a lo largo de su carrera.</li>
      </ul>

      <strong style="color: var(--text-dark);">¿Cómo se libera?</strong>
      <ul style="margin-bottom: 1.5rem; margin-left: 1.5rem; color: var(--text-mid);">
        <li>Entrar al link de abajo e ingresar tu matrícula y contraseña.</li>
        <li>Entras a servicios estudiantiles y entras en Servicio Social Y Prácticas Profesionales.</li>
        <li>Entras a Prácticas Profesionales y luego a Catálogo de Programas para escoger el programa deseado.</li>
        <li>Con el programa ya en mente entras a Formato de Asignación y llenarlo correctamente.</li>
        <li>Acude a Control Escolar y enseña el formato antes de enviarlo, subir de nuevo y seguir las instrucciones dadas.</li>
      </ul>

      <strong style="color: var(--text-dark);">Unidades receptoras</strong>
      <ul style="margin-bottom: 1.5rem; margin-left: 1.5rem; color: var(--text-mid);">
        <li>El Trompo</li>
        <li>Banco de Alimentos</li>
        <li>Asistente web</li>
        <li>Reparación De Base De Datos</li>        
      </ul>
    `;
  }

  else if(carrera === "Administración"){
    info = `
      <h3 style="color: var(--primary); font-family: var(--font-display); margin-top: 1rem; margin-bottom: 0.5rem;">📊 Administración</h3>

      <strong style="color: var(--text-dark);">¿Qué aprenderás?</strong>
      <ul style="margin-bottom: 1.5rem; margin-left: 1.5rem; color: var(--text-mid);">
        <li>Recursos Humanos</li>
        <li>Finanzas</li>
        <li>Contabilidad</li>
        <li>Administración empresarial</li>
      </ul>

      <strong style="color: var(--text-dark);">¿Te puede gustar si...?</strong>
      <ul style="margin-bottom: 1.5rem; margin-left: 1.5rem; color: var(--text-mid);">
        <li>Te gusta organizar</li>
        <li>Trabajar con personas</li>
        <li>Liderar equipos</li>
      </ul>

      <strong style="color: var(--text-dark);">¿Dónde podrías trabajar?</strong>
      <ul style="margin-bottom: 1.5rem; margin-left: 1.5rem; color: var(--text-mid);">
        <li>Oficinas administrativas</li>
        <li>Empresas privadas</li>
        <li>Bancos</li>
        <li>Recursos Humanos</li>
      </ul>
    `;
  }

  else {
    info = `
      <h3 style="color: var(--primary); font-family: var(--font-display); margin-top: 1rem; margin-bottom: 0.5rem;">🏨 Hotelería</h3>

      <strong style="color: var(--text-dark);">¿Qué aprenderás?</strong>
      <ul style="margin-bottom: 1.5rem; margin-left: 1.5rem; color: var(--text-mid);">
        <li>Turismo</li>
        <li>Atención al cliente</li>
        <li>Eventos</li>
        <li>Administración hotelera</li>
      </ul>

      <strong style="color: var(--text-dark);">¿Te puede gustar si...?</strong>
      <ul style="margin-bottom: 1.5rem; margin-left: 1.5rem; color: var(--text-mid);">
        <li>Te gusta convivir con personas</li>
        <li>Los viajes</li>
        <li>La organización de eventos</li>
      </ul>

      <strong style="color: var(--text-dark);">¿Dónde podrías trabajar?</strong>
      <ul style="margin-bottom: 1.5rem; margin-left: 1.5rem; color: var(--text-mid);">
        <li>Hoteles</li>
        <li>Restaurantes</li>
        <li>Agencias de viajes</li>
        <li>Eventos turísticos</li>
      </ul>
    `;
  }

  document.getElementById("infoCarrera").innerHTML = info;
  document.getElementById("cuadroInfo").style.display = "none";
  document.getElementById("miModal").classList.add("open");
}

function cerrarModal(){
  document.getElementById("miModal").classList.remove("open");
}

function mostrarInfo(tipo){
  document.getElementById("cuadroInfo").style.display = "block";

  document.getElementById("textoInfo").innerHTML = `
    <h3 style="font-family: var(--font-display); font-size: 1.8rem; margin-bottom: 1.5rem; color: var(--text-dark);">${tipo}</h3>

    <div class="modal-steps">
      <div class="modal-step">
        <div class="step-num">1</div>
        <div>
          <h4 style="color: var(--text-dark); margin-bottom: 0.2rem;">Información</h4>
          <p>Contenido relacionado con ${tipo} en ${carreraActual}.</p>
        </div>
      </div>

      <div class="modal-step">
        <div class="step-num">2</div>
        <div>
          <h4 style="color: var(--text-dark); margin-bottom: 0.2rem;">Actividades</h4>
          <p>Experiencias prácticas y aprendizaje profesional.</p>
        </div>
      </div>

      <div class="modal-step">
        <div class="step-num">3</div>
        <div>
          <h4 style="color: var(--text-dark); margin-bottom: 0.2rem;">Beneficios</h4>
          <p>Desarrollo de habilidades y experiencia laboral.</p>
        </div>
      </div>

      <div class="modal-step">
        <div class="step-num">4</div>
        <div>
          <h4 style="color: var(--text-dark); margin-bottom: 0.5rem;">Oportunidades</h4>
          <p style="margin-bottom: 1rem;">Mayor preparación para el mundo laboral.</p>
          <a href="https://cecytebc.edu.mx/ha/main.asp" class="btn-orange" target="_blank" style="text-decoration: none; padding: 10px 20px; font-size: 0.9rem; display: inline-block;">Ir al Portal</a>
        </div>
      </div>
    </div>
  `;
}