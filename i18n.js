(function () {
  if (window.__cpcI18n) return;
  window.__cpcI18n = true;
  // Spanish -> English. Keys are exact trimmed text-node values.
  var dict = {
    // ---- Nav / shared ----
    "CLUB": "CLUB", "ACADEMIA": "ACADEMY", "CLASES": "CLASSES",
    "STREETFIT": "STREETFIT", "RESERVAR": "BOOK", "CONTACTO": "CONTACT", "CONTÁCTANOS": "CONTACT US",
    "RESERVAS": "BOOKING", "INSTALACIONES": "FACILITIES",
    // ---- Footer ----
    "EL CLUB": "THE CLUB", "VISÍTANOS": "VISIT US", "ESCRÍBENOS": "WRITE US", "SÍGUENOS EN REDES": "FOLLOW US",
    "DIRECCIÓN": "ADDRESS", "HORARIOS": "HOURS", "HORARIO": "SCHEDULE",
    "Cumbayá, Quito, Ecuador": "Cumbayá, Quito, Ecuador",
    "Frente a Aquarela, Calle Isidro Ayora y Av. Oswaldo Guayasamín, 170157 Quito, Ecuador": "Across from Aquarela, Calle Isidro Ayora & Av. Oswaldo Guayasamín, 170157 Quito, Ecuador",
    "Lunes a viernes": "Monday to Friday", "Sábado y domingo": "Saturday & Sunday",
    "Lunes a viernes: 7:00 a 23:00": "Monday to Friday: 7:00–23:00", "Sábado y domingo: 7:00 a 20:00": "Saturday & Sunday: 7:00–20:00",
    "Te esperamos en": "See you on", "cancha.": "court.",
    // ---- Home hero / marquee / family ----
    "DONDE EL PÁDEL SE VIVE DIFERENTE": "WHERE PADEL IS LIVED DIFFERENTLY",
    "El único club de": "The only", "alto rendimiento": "high-performance club", "en el Ecuador.": "in Ecuador.",
    "Canchas de alto nivel, academia de alto rendimiento y una comunidad que triunfa junta.": "Top-level courts, a high-performance academy and a community that wins together.",
    "Donde el pádel se vive diferente": "Where padel is lived differently",
    "EL ÚNICO CLUB DE ALTO RENDIMIENTO · ECUADOR ·": "THE ONLY HIGH-PERFORMANCE CLUB · ECUADOR ·",
    "LA FAMILIA CPC": "THE CPC FAMILY", "Más que un club,": "More than a club,", "una familia.": "a family.",
    "Ganamos juntos, celebramos juntos. Bicampeones de interclubes gracias a la pasión y entrega de toda la familia CPC.": "We win together, we celebrate together. Two-time interclub champions thanks to the passion and dedication of the whole CPC family.",
    "CAMPEONES INTERCLUBES": "INTERCLUB CHAMPIONS", "EN ECUADOR": "IN ECUADOR",
    "Instalaciones para": "Facilities for", "campeones.": "champions.", "VER TODO →": "SEE ALL →",
    "Canchas profesionales": "Professional courts", "Entrenamiento y competencia en canchas de primer nivel.": "Training and competition on top-level courts.",
    "Gimnasio completo": "Full gym", "Equipado para complementar y potenciar tu entrenamiento de pádel.": "Equipped to complement and boost your padel training.",
    "Duchas y camerinos": "Showers & locker rooms", "Instalaciones modernas y limpias.": "Modern, clean facilities.",
    "Tienda oficial Nox": "Official Nox store", "Todo lo que necesitas para entrenar: equipamiento, raquetas y más.": "Everything you need to train: gear, rackets and more.",
    "Cafetería": "Café", "Un espacio para compartir, disfrutar y desconectarte.": "A space to share, enjoy and unwind.",
    "Ambiente familiar": "Family atmosphere", "Clases y espacios para que padres e hijos vivan el pádel juntos.": "Classes and spaces for parents and kids to enjoy padel together.",
    "Seguridad 24/7": "24/7 security", "Vigilancia permanente para que entrenes tranquilo a cualquier hora.": "Round-the-clock surveillance so you can train with peace of mind at any hour.",
    "Parqueadero gratis": "Free parking", "Estacionamiento sin costo para todos los miembros y visitantes.": "Free parking for all members and visitors.",
    "RÁPIDO Y SENCILLO CON EASY CANCHA": "FAST AND EASY WITH EASY CANCHA", "Reserva tu": "Book your",
    "Elige tu horario favorito y disfruta de las mejores instalaciones de pádel en Ecuador.": "Pick your favorite time and enjoy the best padel facilities in Ecuador.", "RESERVAR AHORA": "BOOK NOW",
    "ACADEMIA CPC": "CPC ACADEMY", "Entrena con": "Train with", "los mejores.": "the best.", "ADULTOS": "ADULTS",
    "Nuestros": "Our", "auspiciantes.": "sponsors.", "VEN A CONOCERNOS": "COME MEET US",
    "QUIERO SER AUSPICIANTE →": "I WANT TO BE A SPONSOR →",
    // ---- Academia / academy cards (shared with Home) ----
    "JÓVENES Y NIÑOS": "YOUTH & KIDS", "Academias": "Youth", "juveniles.": "academies.",
    "Academias de": "Academies of", "pádel.": "padel.", "adultos.": "adults.",
    "Formación certificada para todas las edades y niveles, desde los primeros pasos hasta el alto rendimiento. Encuentra tu grupo y entrena con los mejores del Ecuador.": "Certified training for all ages and levels, from first steps to high performance. Find your group and train with the best in Ecuador.",
    "SOMOS UNA ACADEMIA CERTIFICADA": "WE ARE A CERTIFIED ACADEMY",
    "único club": "only club",
    "Además, contamos con el aval del Ministerio como Club de Especialización Formativa en Menores. Llevamos más de 3 años formando jugadores de pádel con bases técnicas sólidas y proyección hacia la competencia y el alto rendimiento, varios de ellos han sido seleccionados nacionales, representando al Ecuador en competencias internacionales.": "We also hold the Ministry's endorsement as a Youth Development Specialization Club. For over 3 years we have trained padel players with solid technical foundations and a path toward competition and high performance — several have been national team members, representing Ecuador in international competitions.",
    "01 · INICIAL / INTERMEDIO": "01 · BEGINNER / INTERMEDIATE", "Academia de Adultos": "Adults Academy",
    "Para jugadores de categorías iniciales e intermedias que buscan un grupo de entrenamiento donde perfeccionar su juego mientras se divierten en grupo.": "For beginner and intermediate players looking for a training group to perfect their game while having fun together.",
    "REQUISITOS": "REQUIREMENTS", "Varones": "Men", "Damas": "Women", "Edad": "Age",
    "5ta categoría": "5th category", "5ta y 4ta": "5th & 4th",
    "Martes y jueves, 18:00 – 19:30": "Tuesday & Thursday, 18:00 – 19:30",
    "02 · INTERMEDIO / COMPETITIVO": "02 · INTERMEDIATE / COMPETITIVE", "Academia de Adultos Advanced": "Adults Advanced Academy",
    "Para jugadores de categorías intermedias y competitivas que buscan un grupo competitivo donde perfeccionar sus habilidades técnicas y tácticas en cancha.": "For intermediate and competitive players looking for a competitive group to perfect their technical and tactical skills on court.",
    "4ta y 3era": "4th & 3rd", "4ta, 3era y 2da": "4th, 3rd & 2nd",
    "Lunes y miércoles, 18:00 – 19:30": "Monday & Wednesday, 18:00 – 19:30",
    "03 · SOLO DAMAS · MAÑANAS": "03 · WOMEN ONLY · MORNINGS", "Academia de Damas": "Women's Academy",
    "Para jugadoras que gusten realizar sus actividades deportivas en las mañanas. Contamos con un entrenador para cada nivel.": "For women who enjoy their sports activities in the mornings. We have a coach for every level.",
    "todas las categorías": "all categories", "Martes y jueves, 9:30 – 11:00": "Tuesday & Thursday, 9:30 – 11:00",
    "01 · FORMATIVO": "01 · FOUNDATIONAL", "Grupo Formativo": "Foundational Group",
    "Para niños que dan sus primeros pasos en este deporte y buscan adquirir una base sólida mientras nutren su educación física. Nos basamos en motricidad, coordinación y diversión lúdica.": "For kids taking their first steps in this sport and building a solid base while developing their physical education. We focus on motor skills, coordination and playful fun.",
    "6–10 años": "6–10 years", "Martes y jueves, 16:00 – 17:00": "Tuesday & Thursday, 16:00 – 17:00",
    "02 · PRE COMPETITIVO": "02 · PRE COMPETITIVE", "Grupo Pre Competitivo": "Pre Competitive Group",
    "Para jugadores que ya tienen bases de juego y buscan objetivos competitivos a mediano plazo. Buscamos la mejora integral: pulir sus bases y darle estructura a nivel táctico y físico.": "For players who already have game fundamentals and pursue mid-term competitive goals. We aim for all-round improvement: polishing fundamentals and building tactical and physical structure.",
    "8–14 años": "8–14 years", "Martes y jueves, 16:00 – 17:30 (incluye 30 min de preparación física)": "Tuesday & Thursday, 16:00 – 17:30 (includes 30 min of physical training)",
    "03 · ALTO RENDIMIENTO": "03 · HIGH PERFORMANCE", "Academia Alto Rendimiento": "High Performance Academy",
    "Para jugadores que buscan objetivos de competencia y alto rendimiento de manera especializada, con trabajos técnicos, tácticos, mentales y desarrollo especializado en la preparación física.": "For players pursuing competition and high-performance goals in a specialized way, with technical, tactical and mental work plus specialized physical development.",
    "11–25 años": "11–25 years", "Días y horarios según disponibilidad. Contáctanos para más información.": "Days and times subject to availability. Contact us for more information.",
    "¿QUIÉNES SERÁN TUS ENTRENADORES?": "WHO WILL YOUR COACHES BE?", "Los": "The", "profes.": "coaches.",
    "COACH ALTO RENDIMIENTO": "HIGH PERFORMANCE COACH", "HEAD COACH": "HEAD COACH",
    "COACH NIVEL MEDIO / COMPETITIVO": "MID / COMPETITIVE LEVEL COACH", "COACH NIVEL BÁSICO": "BASIC LEVEL COACH",
    "PREPARACIÓN FÍSICA": "PHYSICAL TRAINING", "COACH INTERMEDIOS · COMPETITIVOS": "INTERMEDIATE · COMPETITIVE COACH",
    "Ex top 400 del mundo y ex #1 del Ecuador": "Former world top 400 and former #1 in Ecuador",
    "Coach Nivel 1 Nito Brea": "Level 1 Coach, Nito Brea",
    "Coach Nivel 1 y 2 Juani Mieres Pro Academy": "Level 1 & 2 Coach, Juani Mieres Pro Academy",
    "Coach Nivel 1 y 2 Álvarez Clementi": "Level 1 & 2 Coach, Álvarez Clementi",
    "Capitán de equipos nacionales del Ecuador": "Captain of Ecuador's national teams",
    "Entrenador certificado Nivel 1 y 2": "Level 1 & 2 certified trainer",
    "Capacitador de entrenadores FAS": "FAS coach trainer",
    "Lic. en educación física": "Physical education degree", "Entrenador certificado int.": "Int. certified trainer",
    "7 años de experiencia": "7 years of experience", "Campeón 1era categoría": "1st category champion",
    "5 años de experiencia": "5 years of experience",
    "Profesor de educación física": "Physical education teacher",
    "Cert. en biomecánica": "Biomechanics certified", "Especialista en alto rendimiento": "High performance specialist",
    "AGENDAR CLASES PRIVADAS": "BOOK PRIVATE CLASSES", "VER ACADEMIA →": "SEE ACADEMY →",
    "PREGUNTAS FRECUENTES": "FAQ", "Todo lo que": "Everything you", "necesitas saber.": "need to know.",
    "INSCRIPCIONES ABIERTAS": "ENROLLMENT OPEN", "Tu mejor juego": "Your best game", "empieza aquí.": "starts here.",
    "Escríbenos y te ayudamos a elegir el grupo ideal según tu edad, nivel y horario.": "Message us and we'll help you choose the ideal group for your age, level and schedule.",
    "QUIERO INSCRIBIRME": "I WANT TO ENROLL",
    "¿Qué significa que sea una academia certificada?": "What does being a certified academy mean?",
    "Sí. Somos el único club especializado en alto rendimiento de pádel certificado por el Ministerio del Deporte en el Ecuador, y contamos con el aval del Ministerio como Club de Especialización Formativa en Menores.": "Yes. We are the only club specialized in high-performance padel certified by the Ministry of Sport in Ecuador, and we hold the Ministry's endorsement as a Youth Development Specialization Club.",
    "¿Desde qué edad puede entrenar mi hijo o hija?": "From what age can my child train?",
    "Desde los 6 años. El Grupo Formativo recibe a niños de 6 a 10 años que dan sus primeros pasos en el pádel, trabajando motricidad, coordinación y diversión lúdica.": "From age 6. The Foundational Group welcomes kids aged 6 to 10 taking their first steps in padel, working on motor skills, coordination and playful fun.",
    "¿Necesito experiencia previa para inscribirme?": "Do I need prior experience to enroll?",
    "No. Tenemos grupos para todos los niveles, desde quienes empiezan de cero hasta jugadores de alto rendimiento. Te ubicamos en el grupo que corresponde a tu nivel y categoría.": "No. We have groups for every level, from complete beginners to high-performance players. We place you in the group that matches your level and category.",
    "¿Cómo sé en qué grupo de adultos me toca entrenar?": "How do I know which adult group I belong in?",
    "Depende de tu categoría. Academia de Adultos: varones de 5ta categoría, damas de 5ta y 4ta. Academia de Adultos Advanced: varones de 4ta y 3era, damas de 4ta, 3era y 2da.": "It depends on your category. Adults Academy: men in 5th category, women in 5th and 4th. Adults Advanced Academy: men in 4th and 3rd, women in 4th, 3rd and 2nd.",
    "¿Un adulto puede entrenar en alto rendimiento?": "Can an adult train in high performance?",
    "Sí. La Academia de Alto Rendimiento recibe jugadores de 11 a 25 años que buscan competir y entrenar de manera especializada.": "Yes. The High Performance Academy welcomes players aged 11 to 25 who want to compete and train in a specialized way.",
    // ---- Reservas ----
    "Reservar es rápido y sencillo con Easy Cancha. Sigue estos 7 pasos y sal a la cancha.": "Booking is fast and easy with Easy Cancha. Follow these 7 steps and get on court.",
    "Descarga la app": "Download the app",
    "en el App Store o Google Play y descárgala gratis en tu celular.": "on the App Store or Google Play and download it free on your phone.",
    "Inicia sesión": "Log in",
    "Crea tu cuenta o entra con tus datos. Ya estás listo para reservar en cualquier club.": "Create your account or log in. You're ready to book at any club.",
    "Selecciona nuestro club": "Select our club",
    "Busca": "Search", "y toca": "and tap", "Reserva aquí": "Book here",
    "Selecciona tu horario": "Choose your time",
    "Elige el día y la hora que más te convenga, con disponibilidad en tiempo real.": "Pick the day and time that suits you best, with real-time availability.",
    "Selecciona tu cancha": "Choose your court",
    "El precio y la disponibilidad varían según el horario. Elige la cancha que prefieras.": "Price and availability vary by time slot. Choose the court you prefer.",
    "Recuerda:": "Remember:", "el precio es por persona y se necesitan mínimo 4 jugadores por cancha.": "the price is per person and a minimum of 4 players per court is required.",
    "Confirma y paga": "Confirm and pay",
    "Confirma tu reserva y paga en la app, o elige pagar más tarde. ¡Listo!": "Confirm your booking and pay in the app, or choose to pay later. Done!",
    "Sal a": "Get out and", "jugar.": "play.",
    "Tu cancha te espera en Cumbayá Pádel Center. Nos vemos en el club.": "Your court is waiting at Cumbayá Pádel Center. See you at the club.",
    "Tu cancha te": "Your court", "espera.": "awaits.",
    "RESERVAR POR WHATSAPP": "BOOK VIA WHATSAPP", "Te respondemos y coordinamos tu horario al instante.": "We'll reply and set your time instantly.",
    // ---- Clases ----
    "CLASES PARTICULARES": "PRIVATE CLASSES", "Encuentra tu": "Find your", "coach ideal.": "ideal coach.",
    "Clases uno a uno, en pareja o en grupo, con entrenadores certificados. Elige el coach, el horario y la modalidad que mejor se adapten a tu nivel.": "One-on-one, pair or group classes with certified coaches. Choose the coach, time and format that best fit your level.",
    "MODALIDADES": "FORMATS", "A tu": "Made to", "medida.": "measure.",
    "INDIVIDUAL": "INDIVIDUAL", "1 persona": "1 person", "Sesión de 1 hora, atención 100% personalizada.": "1-hour session, fully personalized attention.",
    "DUPLA": "PAIR", "2 personas": "2 people", "Entrena junto a alguien más, 1 hora, valor por persona.": "Train with someone else, 1 hour, price per person.",
    "GRUPO": "GROUP", "3–4 personas": "3–4 people", "Clases de 1 hora en grupo, ideal para amigos o familia.": "1-hour group classes, ideal for friends or family.",
    "EXTENDIDA": "EXTENDED", "3–4 · 1:30 h": "3–4 · 1:30 h", "Sesiones extendidas para grupos que buscan más tiempo en cancha.": "Extended sessions for groups who want more court time.",
    "PAQUETES": "PACKAGES", "Entrena más,": "Train more,", "paga menos.": "pay less.",
    "CLASE INDIVIDUAL": "SINGLE CLASS", "Por clase": "Per class", "Reserva una clase suelta, sin compromiso, con el coach y horario que elijas.": "Book a single class, no commitment, with the coach and time you choose.",
    "PAQUETE DE 4 CLASES": "4-CLASS PACKAGE", "10% de descuento": "10% off", "Compra 4 clases juntas y ahorra en cada sesión. Válido en horario no pico.": "Buy 4 classes together and save on each session. Valid off-peak.",
    "PAQUETE DE 8 CLASES": "8-CLASS PACKAGE", "20% de descuento": "20% off", "Nuestro mayor ahorro: 8 clases para comprometerte con tu progreso. Válido en horario no pico.": "Our biggest saving: 8 classes to commit to your progress. Valid off-peak.",
    "*Los paquetes de 4 y 8 clases son válidos solo en horas no pico; en horario pico aplica siempre el valor por clase. *En clases de 2, 3 y 4 personas, el valor es por persona.": "*4 and 8-class packages are valid off-peak only; peak hours always charge the per-class rate. *For 2, 3 and 4-person classes, the price is per person.",
    "ELIGE TU COACH": "CHOOSE YOUR COACH", "entrenadores.": "coaches.",
    "RESERVA TU CLASE": "BOOK YOUR CLASS", "Tu progreso": "Your progress", "empieza hoy.": "starts today.",
    "Escríbenos por WhatsApp y te ayudamos a elegir el coach, la modalidad y el paquete ideal para ti.": "Message us on WhatsApp and we'll help you choose the ideal coach, format and package for you.",
    "AGENDAR CLASE": "BOOK A CLASS",
    // ---- StreetFit ----
    "Acondicionamiento": "Physical", "físico.": "conditioning.",
    "Streetfit es nuestro centro de preparación física y recuperación: entrenamiento personalizado, biomecánica y rehabilitación deportiva para llevar tu cuerpo de lo ortopédico a lo deportivo.": "Streetfit is our physical training and recovery center: personalized training, biomechanics and sports rehabilitation to take your body from orthopedic to athletic.",
    "METODOLOGÍA": "METHODOLOGY", "Metodología": "The Streetfit", "Streetfit.": "method.",
    "Se basa en incorporar los principios de la biomecánica y el movimiento. Puntualizando en desarrollar planes de entrenamiento especializados e individualizados para atletas y en adaptar entrenamientos para personas que quieran entrenar como tales.": "It is based on the principles of biomechanics and movement, focusing on developing specialized, individualized training plans for athletes and adapting workouts for anyone who wants to train like one.",
    "¿QUIÉNES SOMOS?": "WHO WE ARE", "¿Qué vinimos a aportar en tu vida?": "What did we come to bring to your life?",
    "Somos la fusión entre Streetfit y Cumbayá Pádel Center, dos centros deportivos dedicados al entrenamiento personalizado y diferencial para todo aquel que quiera dejar el sedentarismo y llegar a su máximo potencial deportivo.": "We are the fusion of Streetfit and Cumbayá Pádel Center, two sports centers dedicated to personalized, distinctive training for anyone who wants to leave a sedentary life and reach their full athletic potential.",
    "Nuestro equipo": "Our team",
    "Formado por profesionales especializados en preparación física, fisioterapia y pedagogía de la actividad física, que cuentan con años de experiencia como personal trainers.": "Made up of professionals specialized in physical training, physiotherapy and physical-activity pedagogy, with years of experience as personal trainers.",
    "La preparación de nuestro equipo nos ha permitido saber que es posible entrenar a personas con patologías como condromalacia de rodilla, hernia discal, hemiplejías, rupturas LCA entre otras.": "Our team's training has shown us it is possible to train people with conditions such as knee chondromalacia, disc herniation, hemiplegia, ACL tears and more.",
    "CONOCE NUESTRO EQUIPO": "MEET OUR TEAM", "PREPARADOR FÍSICO": "STRENGTH & CONDITIONING COACH",
    "Especialista en biomecánica deportiva.": "Sports biomechanics specialist.", "Especializado en alto rendimiento.": "Specialized in high performance.",
    "10 años de experiencia como preparador físico": "10 years of experience as a strength coach",
    "Ex jugador de tenis alto rendimiento becado en Los Ángeles, California": "Former high-performance tennis player on scholarship in Los Angeles, California",
    "+5 años liderando grupos de alto rendimiento": "5+ years leading high-performance groups",
    "Certificado en biomecánica y sports performance por DBC Fitness": "Certified in biomechanics and sports performance by DBC Fitness",
    "Certificado en método MOTUS y evaluaciones ortopédicas": "Certified in the MOTUS method and orthopedic assessments",
    "Certificado en método Motus": "Certified in the Motus method",
    "Experiencia en equipos profesionales de fútbol, básquetbol y hockey sobre patines": "Experience with professional soccer, basketball and roller hockey teams",
    "Ex jugador de fútbol profesional": "Former professional soccer player", "Readaptación de lesiones": "Injury rehabilitation",
    "Deportistas que": "Athletes who", "confiaron en nosotros.": "trusted us.",
    // ---- alt de fotos: sujetos del patrón "Foto N de M: <sujeto>" ----
    "jugador estrella": "star player", "la familia CPC": "the CPC family", "el club": "the club",
    "academia en acción": "the academy in action", "Streetfit en acción": "Streetfit in action",
    "canchas profesionales": "professional courts", "gimnasio": "gym",
    "duchas y camerinos": "showers & locker rooms", "tienda Nox": "Nox store",
    "cafetería": "café", "ambiente familiar": "family atmosphere",
    "seguridad del club": "club security", "parqueadero": "parking",
    "Descarga easycancha en la App Store": "Download easycancha from the App Store",
    "Inicia sesión en easycancha": "Sign in to easycancha",
    "Selecciona Cumbayá Pádel Center": "Select Cumbayá Pádel Center",
    "Selecciona tu horario": "Select your time slot",
    "Selecciona tu cancha": "Select your court",
    "Confirma y paga": "Confirm and pay",
    "FUTBOLISTA": "FOOTBALLER", "Y MUCHOS MÁS": "AND MANY MORE",
    "INCLUYE EN PLANES PREMIUM": "INCLUDED IN PREMIUM PLANS", "Todo lo que necesitas": "Everything you need", "para avanzar.": "to progress.",
    "Evaluación de patrones de movimiento y desbalances.": "Movement-pattern and imbalance assessment.",
    "Seguimiento mensual de la programación.": "Monthly program follow-up.", "Uso ilimitado del área de gimnasio.": "Unlimited use of the gym area.",
    "Escríbenos por WhatsApp y arrancamos tu plan de entrenamiento.": "Message us on WhatsApp and we'll start your training plan.",
    "ESCRÍBENOS POR WHATSAPP": "MESSAGE US ON WHATSAPP",
    // ---- Club ----
    "Ganamos juntos, celebramos juntos. Somos el único club de alto rendimiento del Ecuador, y lo construimos con pasión y entrega.": "We win together, we celebrate together. We are the only high-performance club in Ecuador, and we build it with passion and dedication.",
    "CREANDO CAMPEONES DESDE 2021": "CREATING CHAMPIONS SINCE 2021",
    "Donde el pádel se vive": "Where padel is lived", "diferente.": "differently.",
    "Bicampeones de interclubes gracias a la familia CPC. Aquí cada partido, cada clase y cada tercer set se comparten.": "Two-time interclub champions thanks to the CPC family. Here every match, every class and every third set is shared.",
    "Pasión": "Passion", "El pádel no se juega. Se vive.": "Padel isn't just played. It's lived.",
    "Alto rendimiento": "High performance", "Entrenamos con método, medimos el progreso y competimos para ganar.": "We train with method, measure progress and compete to win.",
    "Comunidad": "Community", "Padres, hijos y amigos. Todos juegan, todos pertenecen.": "Parents, kids and friends. Everyone plays, everyone belongs.",
    "Entrenamiento y competencia en canchas de primer nivel, de día o de noche.": "Training and competition on top-level courts, day or night.",
    "Foto: canchas profesionales": "Photo: professional courts", "Foto: gimnasio": "Photo: gym", "Foto: duchas y camerinos": "Photo: showers & locker rooms",
    "Foto: tienda Nox": "Photo: Nox store", "Foto: cafetería": "Photo: café", "Foto: ambiente familiar": "Photo: family atmosphere",
    "Todo lo que necesitas para entrenar: equipamiento, palas y más.": "Everything you need to train: gear, rackets and more.",
    "Vívelas en": "Experience it in", "persona.": "person.",
    "Ven a conocer las mejores instalaciones de pádel en Ecuador y siente la diferencia en cancha.": "Come see the best padel facilities in Ecuador and feel the difference on court.",
    "RESERVA TU CANCHA": "BOOK YOUR COURT",
    // ---- Eventos ----
    // ---- Contáctanos ----
    "Contáctanos": "Contact us",
    // placeholders (attribute values)
    "El": "The", "único club": "only club",
    "especializado en alto rendimiento de pádel certificado por el Ministerio del Deporte en el Ecuador.": "specialized in high-performance padel certified by the Ministry of Sport in Ecuador.",
    "Lic. en educación física · Entrenador certificado Nivel 1 y 2 · Capacitador de entrenadores FAS · Capitán de equipos nacionales del Ecuador": "Physical education degree · Level 1 & 2 certified trainer · FAS coach trainer · Captain of Ecuador's national teams",
    "Campeón 1era categoría · Entrenador certificado int. · 7 años de experiencia": "1st category champion · Int. certified trainer · 7 years of experience",
    "Ex top 400 del mundo y ex #1 del Ecuador · Coach Nivel 1 Nito Brea · Coach Nivel 1 y 2 Juani Mieres Pro Academy · Capitán de equipos nacionales del Ecuador": "Former world top 400 and former #1 in Ecuador · Level 1 Coach, Nito Brea · Level 1 & 2 Coach, Juani Mieres Pro Academy · Captain of Ecuador's national teams",
    "Coach Nivel 1 Nito Brea · Coach Nivel 1 y 2 Juani Mieres Pro Academy · 5 años de experiencia": "Level 1 Coach, Nito Brea · Level 1 & 2 Coach, Juani Mieres Pro Academy · 5 years of experience",
    "Coach Nivel 1 y 2 Álvarez Clementi · Coach Nivel 1 y 2 Juani Mieres Pro Academy · 5 años de experiencia": "Level 1 & 2 Coach, Álvarez Clementi · Level 1 & 2 Coach, Juani Mieres Pro Academy · 5 years of experience",
    "Coach Nivel 1 y 2 Juani Mieres Pro Academy · 5 años de experiencia": "Level 1 & 2 Coach, Juani Mieres Pro Academy · 5 years of experience",
    "Diurno": "Daytime", "Nocturno": "Evening", "Sábados": "Saturdays", "Horario": "Schedule",
    "Lun a jue 6:00–16:30 · Vie 6:00–18:00": "Mon–Thu 6:00–16:30 · Fri 6:00–18:00",
    "Lun y mié 18:00–21:00 · Mar y jue 19:30–21:00": "Mon & Wed 18:00–21:00 · Tue & Thu 19:30–21:00",
    "Lun a jue 07:00–10:00 · Mar y jue 18:00–19:30": "Mon–Thu 07:00–10:00 · Tue & Thu 18:00–19:30",
    "Lun a jue 6:00–16:30 · Vie 6:00–18:00 · Sáb 8:00–12:00": "Mon–Thu 6:00–16:30 · Fri 6:00–18:00 · Sat 8:00–12:00",
    "Lunes a viernes 7:00–16:00": "Monday to Friday 7:00–16:00",
    "Lun a jue 7:00–16:30 · Vie 7:00–18:00": "Mon–Thu 7:00–16:30 · Fri 7:00–18:00"
  };
function nodes() {
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null), a = [], n;
    while (n = w.nextNode()) a.push(n);
    return a;
  }

  function apply(to) {
    nodes().forEach(function (node) {
      try {
        var raw = node.nodeValue; var key = raw.trim(); if (!key) return;
        if (to === 'en') {
          if (!node.__es && dict[key]) { node.__es = raw; node.nodeValue = raw.split(key).join(dict[key]); }
        } else {
          if (node.__es != null) { node.nodeValue = node.__es; node.__es = null; }
        }
      } catch (e) {}
    });
    // Atributos traducibles: placeholder (inputs) y alt (imágenes).
    // El alt describe la foto para lectores de pantalla: si se queda en
    // español mientras la página está en inglés, queda a medio traducir.
    applyAttr(to, '[placeholder]', 'placeholder', '__esPh');
    applyAttr(to, 'img[alt]', 'alt', '__esAlt');
  }

  // Los alt de las fotos siguen el patrón "Foto N de M: sujeto" / "Foto: sujeto".
  // Traducir el patrón evita ~50 entradas de diccionario casi idénticas.
  var ALT_RE = /^Foto(?:\s+(\d+)\s+de\s+(\d+))?:\s*(.+)$/;

  function translateAlt(key) {
    if (dict[key]) return dict[key];
    var m = ALT_RE.exec(key);
    if (!m) return null;
    var subject = dict[m[3]] || m[3];
    return m[1] ? 'Photo ' + m[1] + ' of ' + m[2] + ': ' + subject : 'Photo: ' + subject;
  }

  function applyAttr(to, selector, attr, memo) {
    document.querySelectorAll(selector).forEach(function (el) {
      try {
        var raw = el.getAttribute(attr); var key = (raw || '').trim(); if (!key) return;
        if (to === 'en') {
          if (el[memo] != null) return;
          var en = attr === 'alt' ? translateAlt(key) : dict[key];
          if (en) { el[memo] = raw; el.setAttribute(attr, en); }
        } else {
          if (el[memo] != null) { el.setAttribute(attr, el[memo]); el[memo] = null; }
        }
      } catch (e) {}
    });
  }

  var LANG_BTN = '#cpc-lang, #cpc-lang-mobile, [data-cpc-lang]';

  function syncButtons() {
    var label = lang === 'es' ? 'EN' : 'ES';
    document.querySelectorAll(LANG_BTN).forEach(function (b) {
      b.textContent = label;
      b.setAttribute('aria-label', lang === 'es' ? 'Switch to English' : 'Cambiar a español');
    });
  }

  var lang = 'es';
  try { lang = localStorage.getItem('cpc-lang') || 'es'; } catch (e) {}

  function setLang(l) {
    lang = l;
    try { localStorage.setItem('cpc-lang', l); } catch (e) {}
    apply(l);
    syncButtons();
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest(LANG_BTN);
    if (b) { e.preventDefault(); setLang(lang === 'es' ? 'en' : 'es'); }
  });

  var mo = new MutationObserver(function () { if (lang === 'en') apply('en'); });
  try { mo.observe(document.body, { childList: true, subtree: true }); } catch (e) {}

  function boot() { setLang(lang); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
  // re-run shortly after to catch late-streamed DC content
  setTimeout(boot, 200);
  setTimeout(boot, 800);
})();
