//Variables Globales Idioma
var copy="";

var botonSobreNosotros ="";

var sobreNosotros='';

var nuestrosObjetivos='';

var nuestraHistoria='';

var destacadoRojo="";

var nuestrosPrincipios='';

var metodologiaSEE ='';

var metodologiaLista='';

var nuestrosServicios='';

var serviciosLista='';

var funcionalidad ='';

var creadores = '';

var contacto = '';
//Variables Globales
var ingles=false;
var activaNosotros = $("#selector-nosotros-js input:checked");
var activaMetodologia = $("#selector-metodologia-js input:checked");

var activoPrincipios = $(".principios-selected");
var activoServicios = $(".servicios-selected");
$(window).on("load",function(){
    $(".loader").delay(3000).fadeOut();
    $("body header, body section, body svg, body #idioma").delay(3000).animate({opacity: 1},{duration:2000});
});
//Ejecución
$(document).ready(function(){
    
    var seleccionadoNosotros= $("#selector-nosotros-js input");
    var seleccionadoMetodologia= $("#selector-metodologia-js input");
    var seleccionadoPrincipios= $(".principios h3");
    var seleccionadoServicios= $(".servicios li h3");
    var seleccionadoPrincipiosImg= $(".principios img");
    var seleccionadoCreador= $(".imagen-creador");
    var seleccionadoIdioma =$("#idioma p");
    
    seleccionadoNosotros.on("click",escogerNosotros);
    seleccionadoMetodologia.on("click",escogerMetodologia);
    seleccionadoPrincipios.on("click",escogerPrincipio);
    seleccionadoPrincipiosImg.on("click",escogerPrincipio);
    seleccionadoServicios.on("click",escogerServicio);
    seleccionadoCreador.on("mouseenter",entraCreador);
    seleccionadoCreador.on("mouseleave",saleCreador);
    seleccionadoIdioma.on("click",escogerIdioma);
    
    $(".st1").on("click", menuScrollTo);
    $("#ir-nosotros-js").on("click", scrollInicial);
    $(window).on("scroll",comprobarScroll);
    $(window).on("resize",alturaSelector);
    $(window).on("resize",mostrarImagenesPrincipios);
    alturaSelector();
    
});


//Funciones
//      Función Escoger: Permite escoger en las secciones que tienen radio como input
function escogerNosotros (){
    
    if($(this).attr("value")=="objetivos"){
        var seccion= activaNosotros.attr("value");
        switch(seccion){
            case "nosotros":
              $(".section-1:first-child").animate({opacity: 0});
                
                break;
            case "historia":
              $(".section-1:nth-child(3)").animate({opacity: 0}); 
                
                break;
                          }
       
        $(".section-1:nth-child(2)").animate({opacity: 1});
        
        activaNosotros = $("#selector-nosotros-js input:checked");
    }
    
    if($(this).attr("value")=="nosotros"){
        var seccion= activaNosotros.attr("value");
        switch(seccion){
            case "objetivos":
              $(".section-1:nth-child(2)").animate({opacity: 0}); 
                break;
            case "historia":
              $(".section-1:nth-child(3)").animate({opacity: 0}); 
                break;
                          }
       
        $(".section-1:first-child").animate({opacity: 1, });
        activaNosotros = $("#selector-nosotros-js input:checked");
    }
    
    if($(this).attr("value")=="historia"){
        var seccion= activaNosotros.attr("value");
        switch(seccion){
            case "nosotros":
              $(".section-1:first-child").animate({opacity: 0}); 
                break;
            case "objetivos":
              $(".section-1:nth-child(2)").animate({opacity: 0}); 
                break;
                          }
       
        $(".section-1:nth-child(3)").animate({opacity: 1});
        activaNosotros = $("#selector-nosotros-js input:checked");
    }
}

function escogerMetodologia (){
    
    if($(this).attr("value")=="descripcion"){
        var seccion= activaMetodologia.attr("value");
        $(".section-2:nth-child(2)").animate({opacity: 0});
        $(".section-2:first-child").animate({opacity: 1});
        activaMetodologia = $("#selector-metodologia-js input:checked");
    }
    
    if($(this).attr("value")=="items"){
        var seccion= activaMetodologia.attr("value");
        $(".section-2:first-child").animate({opacity: 0});
        $(".section-2:nth-child(2)").animate({opacity: 1}); 
        activaMetodologia = $("#selector-metodologia-js input:checked");
    }
}

function escogerPrincipio(){
    activoPrincipios.children("p").animate({opacity: 0});
    activoPrincipios.children("img").animate({opacity: 0});
    $(this).parent(".principios").children("p").animate({opacity: 1});
    $(this).parent(".principios").children("img").animate({opacity: 1});
    activoPrincipios.removeClass("principios-selected");
    $(this).parent(".principios").addClass("principios-selected");
    
    activoPrincipios = $(".principios-selected");
}
function mostrarImagenesPrincipios(){
   if($(window).width()<= 768){
       $(".principios img").css("opacity","1");
   }
    else if($(window).width()> 768){
       $(".principios img").css("opacity","0"); 
        activoPrincipios.children("img").css("opacity","1");
    }
    
}

function escogerServicio(){
    activoServicios.children(".servicio-info").animate({opacity: 0});
    $(this).parent("li").children(".servicio-info").animate({opacity: 1});
    activoServicios.removeClass("servicios-selected");
    $(this).parent("li").addClass("servicios-selected");
    
    activoServicios = $(".servicios-selected");
}

function entraCreador(){
    var info = $(".circulo-rojo");
    console.log("entra")
    $(this).addClass("imagen-creador-activo");
    if($(this).attr("value")=="sebastian" && ingles==false){
        info.children("h4").html("Sebastián Osorno");
        info.children("h5").html("Co-fundador, Director Comercial");
        info.children(".info-creador").html("M.A Antropología Visual y de Medios de la Freie Universität de Berlín, B.A Historia de la Universidad de los Andes. Diez años de experiencia en el sector público y privado en investigación y gestión de información: creación de bases de datos para la gestión de información cualitativa, interpretación y flujos de información audiovisual (imágenes, video, audio, narrativas y semiótica). Experiencia en investigación histórica, antropológica y pedagógica. Implementación y ejecución de proyectos culturales, sociales y educativos.");
        info.animate({opacity: 1},{duration:200});
        info.parent("span").children(".linea-1").animate({opacity: 1},{duration:200});
       }
    else if($(this).attr("value")=="anascas" && ingles==false){
        info.children("h4").html("Anascas Del Río Moncada");
        info.children("h5").html("Co-Fundadora Gerente General");
        info.children(".info-creador").html("M.A en Estudios Políticos. Especialista en Resolución de Conflictos Armados y Construcción de Paz. Diez años de experiencia, desde el sector público y privado, en el diseño e implementación de proyectos dirigidos a población vulnerable, basados en información cualitativa y cuantitativa. Amplia experiencia en el diseño de instrumentos y metodologías de recolección, sistematización y análisis de información. Con formación en software de análisis cualitativo y autodidacta en herramientas de Inteligencia Artificial (IA).");
        info.animate({opacity: 1},{duration:200});
        info.parent("span").children(".linea-2").animate({opacity: 1},{duration:200});
       }
    else if($(this).attr("value")=="sebastian" && ingles==true){
        info.children("h4").html("Sebastián Osorno");
        info.children("h5").html("Co-Founder and Commercial Director");
        info.children(".info-creador").html("M.A in Visual and Media Anthropology from the Freie Universität of Berlin; and a B.A in History from the University of the Andes. Ten years of experience in the public and private sector in research and information management. Expert in the creation of databases for the management of qualitative information, and the interpretation of audiovisual information flows (images, video, audio, narratives and semiotics). Experience in historical, anthropological and pedagogical research. Implements and executes cultural, social, and educational projects.");
        info.animate({opacity: 1},{duration:200});
        info.parent("span").children(".linea-1").animate({opacity: 1},{duration:200});
       }
    else if($(this).attr("value")=="anascas" && ingles==true){
        info.children("h4").html("Anascas Del Río Moncada");
        info.children("h5").html("Co-Founder and General Manager");
        info.children(".info-creador").html("M.A in Political Studies. Specialist in Armed Conflict Resolution and Peacebuilding. Ten years of experience in the public and private sector, in the design and implementation of projects aimed at vulnerable population, based on qualitative and quantitative information. Extensive experience in the design of instruments and methodologies for collecting, systematizing and analyzing information. Trained in qualitative analysis software and self-taught in Artificial Intelligence (AI) tools.");
        info.animate({opacity: 1},{duration:200});
        info.parent("span").children(".linea-2").animate({opacity: 1},{duration:200});
       }
}

function saleCreador(){
    var info = $(".circulo-rojo");
    $(this).removeClass("imagen-creador-activo");
    info.animate({opacity: 0},{duration:200});
    info.parent("span").children(".linea-roja").animate({opacity: 0},{duration:200});
}

function menuScrollTo(){
    $(".st1").removeClass("active");
    console.log("click");
    var menuNum = $(this).attr("value");
    if(menuNum==1){
       var destino =$("header"); 
    }
    else{
        var destino =$("section:nth-child("+menuNum+")");
    }
    
    $("html, body").animate({scrollTop: destino.offset().top},{duration:1000});
    
    $(this).addClass("active");
    console.log(destino.offset().top);
}


function scrollInicial(){
    $(".active").removeClass("active");
    var destino =$("section:nth-child(2)");
    $("html, body").animate({scrollTop: destino.offset().top},{duration:1000});
    $("#menu-sobre-nosotros").addClass("active");
}

function comprobarScroll(){
    var actualScroll= $(window).scrollTop();
    var actualSection;
    var secciones= document.getElementsByClassName("get-actual-section");
    var i=0;
    for(i=0;i<secciones.length;i++){
       var altura = secciones[i].offsetTop;
        var siguiente= i+1;
        if((actualScroll+30)>=secciones[i].offsetTop){
          actualSection=i;   
        }
    }
    if(actualSection<2){
        $(".active").removeClass("active");
        $(".st1[value='"+(actualSection+1)+"']").addClass("active");
        
        
    }
    else if(actualSection>=2){
        $(".active").removeClass("active");
        $(".st1[value='"+(actualSection+2)+"']").addClass("active");
           
    }
    console.log(actualSection);
    
    
}

function alturaSelector(){
    var nuevaAltura= $(".section-1:nth-child(3)").height();
    var nuevaAltura2= $(".section-2:first-child").height();
    console.log(nuevaAltura);
    $("#selector-nosotros-js").css("margin-top",nuevaAltura);
    $("#selector-metodologia-js").css("margin-top",nuevaAltura2+50);
    
}

function escogerIdioma(){
    var idioma= $(this).attr("value");
    
    if(idioma=="es"){
        ingles=false;
       }
    else if(idioma=="en"){
        ingles=true;
    }
    
    if(ingles==false){
        copy="Laboratorio de datos sostenibles";

        botonSobreNosotros ="Sobre Nosotros";

        sobreNosotros='<h2>Sobre Nosotros</h2><p class="content-20">Labsus - Laboratorio de Datos Sostenibles- es un laboratorio de soluciones e innovación para la transformación social potenciado desde el conocimiento social aplicado y la Inteligencia Artificial (IA).</p><p class="content-20">Ofrecemos servicios que combinan metodologías especializadas para el análisis de información cualitativa y desestructurada, usando sistemas de Inteligencia Artificial (IA): gestionamos y procesamos grandes cantidades de información (Big Data); innovamos para crear soluciones frente a problemáticas sociales, políticas y culturales; apoyamos los procesos de toma de decisiones en el sector público o privado; potenciamos iniciativas de impacto y transformación social aportando sistemas integrales de información; y creamos indicadores de medición de impacto.</p><p class="content-20">Tenemos en cuenta las necesidades particulares de iniciativas, proyectos o contextos comunitarios, institucionales o empresariales para crear sistemas integrales de información que usan datos producidos en tiempo real. Inventamos las soluciones a su medida. Agregamos valor a los procesos, a través de la gestión de datos diversos como vehículo para la transformación social.</p><p class="content-20">Somos una empresa de procesos cognitivos que crea conocimiento dinámico, flexible y útil para las comunidades y los tomadores de decisiones.</p>';

        nuestrosObjetivos=' <h2>Nuestros Objetivos</h2><p class="content-2-columnas">Potenciar los proyectos y la efectividad en la toma de decisiones de organizaciones de distinta índole a través de la gestión, el análisis y la articulación de sus flujos de información, desde la metodología SEE desarrollada por Labsus además de otras metodologías especializadas.</p><p class="content-2-columnas">Fortalecer el diseño, formulación y ejecución de la política pública, planes y proyectos a nivel nacional, departamental y local, desde la gestión e interpretación de la información.</p><p class="content-2-columnas">Maximizar el uso de recursos públicos o privados a través de la gestión integral de información. </p><p class="content-2-columnas">Mejorar la prestación de servicios de empresas públicas y privadas gestionando la información humana, cualitativa y desestructurada de las organizaciones.</p><p class="content-2-columnas">Medir el impacto social de la prestación de servicios, iniciativas o actividades de diferentes organizaciones públicas o privadas.</p>';

        nuestraHistoria='<h2>Nuestra Historia</h2><p class="content-30 centrar"><em>“Las ciencias sociales y humanas se abren con Labsus para impactar nuevos entornos”.</em></p><p class="content-20">Labsus es el resultado de la integración creativa entre el conocimiento y la experiencia de más de 15 años de trabajo, con el sector público y privado, de Anascas Del Río, Politóloga y experta en temas de conflicto, paz y Derechos Humanos; y Sebastián Osorno Chávez, historiador de la Universidad de los Andes, Magíster en Antropología Visual y de Medios de la Universidad Libre de Berlín. La diversidad de sus experiencias en ambientes de trabajo en investigación, comunicación y proyectos sociales, les permitió encontrar un vacío en el uso e interpretación de la información masiva o Big Data.</p><p class="content-20">Ese vacío puede ser complementado a través del conocimiento social aplicado. Hay información de alta relevancia que es silenciosa, densa y altamente compleja que responde a lógicas fuera de la racionalidad matemática de los datos. Creemos que las ciencias sociales aportan significativamente a la interpretación de los entornos digitales y toda la información que se produce en ellos. Los fenómenos sociales, empresariales y gubernamentales están cruzados completamente por estas nuevas lógicas de interacción y producción. La información masiva que se produce en tiempo real necesita de las ciencias sociales y humanas para potenciar su utilidad.</p>';

        destacadoRojo="Las ciencias sociales y humanas se abren con Labsus para impactar nuevos entornos.";

        nuestrosPrincipios=' <h2>Nuestros Principios</h2><p class="content-20">Trabajamos desde la base, desde la comunicación activa y empática, creando confianza y cooperación.</p><p class="content-20">Trabajar con grupos humanos o con instituciones que intervienen en problemáticas sociales implica una alta conciencia ética y acciones coherentes. Estos son principios de trabajo de Labsus y de cada uno de los integrantes que hacen parte de este equipo.</p><ul class="principios-contenedor"><li class="principios principios-selected"><img src="img/principios/transparencia.svg" alt="Transparencia"/><h3>Transparencia</h3><p>La transparencia es un principio central para Labsus porque trabajamos basados en la confianza, la honestidad y la comunicación sensible.</p></li><li class="principios"><img src="img/principios/colaborativo.svg"/><h3>Trabajo Colaborativo</h3><p>Queremos relaciones dinámicas de aprendizaje con nuestros clientes y los integrantes de nuestros equipos de trabajo. Planteamos modelos de trabajo flexibles para crear espacios de innovación, creatividad y realización de nuestros integrantes y clientes.</p></li><li class="principios"><img src="img/principios/transmision.svg"/><h3>Transmisión de Conocimiento</h3><p>Creemos en la posibilidad de crear canales de comunicación para transmitir el conocimiento fuera de los ámbitos académicos. Los clientes, aliados e integrantes de Labsus enriquecen y se enriquecen con nuestras dinámicas de trabajo.</p></li><li class="principios"><img src="img/principios/innovacion.svg"/><h3>Innovación</h3><p>Estamos comprometidos con crear nuevas formas de relacionarnos, tomar decisiones y desarrollar innovaciones en el campo del análisis de información y la toma de decisiones.</p></li><li class="principios"><img src="img/principios/confidencial.svg"/><h3>Confidencialidad</h3><p>Trabajamos con cláusulas de confidencialidad que se ajusten a los niveles de protección de la información que requieren nuestros clientes.</p></li></ul>';

        metodologiaSEE =' <h2>Metodología SEE</h2><p class="content-20">La metodología SEE (Silencios, Excepciones y Errores), desarrollada por Labsus, ubica la mirada sobre información que, desde la interpretación estadística y los análisis basados en patrones, se considera excluida, errónea, contradictoria o simplemente excepcional. Es una metodología desarrollada desde las ciencias sociales para la gestión e interpretación de la información masiva que se produce en tiempo real.</p><p class="content-20">Enriquecemos los métodos estadísticos y cuantitativos desde el conocimiento social aplicado, contamos con una amplia gama de servicios desagregados o integrales, desde el diagnóstico hasta la comunicación, a través de piezas sencillas, didácticas y consumibles para diversas audiencias.</p><p class="content-20">Nos enfocamos en procesos complejos y datos densos, asociados a problemáticas políticas, económicas, sociales y culturales que son subutilizados cuando se abordan únicamente desde el análisis cuantitativo.</p><p class="content-20">Trabajamos con herramientas de Inteligencia Artificial y machine learning, soportados en Watson- IBM.</p>';

        metodologiaLista='<h2>Metodología SEE</h2><p class="content-20">Usamos métodos mixtos de recolección de información:</p><ul class="content-20"><li>Encuestas</li><li>Entrevistas semi-estructuradas</li><li>Entrevistas estructuradas</li><li>Etnografías</li><li>Etnografías virtuales</li><li>Observación participante</li><li>Grupos focales</li><li>Recolección de información audiovisual</li><li>Actividades interactivas</li><li>Teoría de juegos</li></ul><p class="content-20">Usamos métodos multiplataforma de procesamiento de información:</p><ul class="content-20"><li>Atlas T.I</li><li>NVivo</li><li>Adobe Master Collection</li><li>APIs Cognitivas de Watson IBM</li></ul>';

        nuestrosServicios='<h2>Nuestros Servicios</h2><p class="content-20">Desde el diagnóstico hasta la difusión de la información, prestamos un servicio integral que permita a nuestros clientes potencializar datos dispersos y desestructurados o que se encuentran subutilizados. Trabajamos con especialistas en diversos tipos información textual y no textual, desde datos cuantitativos, hasta cualitativos, narrativos y visuales.</p>';

        serviciosLista='<li class="servicios-selected"><h3>SEE Labsus</h3><div class="servicio-info"><img src="img/servicios/see.svg" alt=""><p>Potenciamos su información a través de la metodología SEE en las siguientes fases: recolección de información, sistematización, interpretación, análisis y difusión.</p></div></li><li><h3>Asesorías y diagnósticos</h3><div class="servicio-info"><img src="img/servicios/asesorias.svg" alt=""><p>Diagnosticamos el estado de sus datos e información para determinar qué método e instrumentos de recolección de información resultan más útiles para organizar y potenciar sus proyectos.</p></div></li><li><h3>SIGI-Sistemas Integrales de Gestión de Información</h3><div class="servicio-info"><img src="img/servicios/sigi.svg" alt=""><p>Ofrecemos herramientas flexibles para el registro, clasificación y flujo de la información correspondiente a sus actividades (Bases de datos, Sistemas de administración de documento y Sistemas de flujo de procesos).</p></div></li><li><h3>Planeación por Escenarios</h3><div class="servicio-info"><img src="img/servicios/planeacion.svg" alt=""><p>Procesamos datos específicos para ofrecerle información sobre posibles resultados de sus proyectos que son de utilidad para la toma de decisiones acertadas.</p></div></li><li><h3>Soporte para la Toma de Decisiones</h3><div class="servicio-info"><img src="img/servicios/decisiones.svg" alt=""><p>Soporte en la toma de decisionesa a partir de información y datos concretos.</p></div></li><li><h3>Sistemas de Alertas</h3><div class="servicio-info"><img src="img/servicios/alertas.svg" alt=""><p>Sistemas de alertas tempranas y prevención en temas sociales.</p></div></li><li><h3>Identificación y Extracción de Info.</h3><div class="servicio-info"><img src="img/servicios/extraccion.svg" alt=""><p>Identificación y extracción de información subjetiva o minería de opiniones.</p></div></li><li><h3>Info Visualizaciones</h3><div class="servicio-info"><img src="img/servicios/visualizacion.svg" alt=""><p>Creamos piezas de difusión dirigidas a diversos públicos que pueden reproducirse de manera masiva o selectiva: gráficas, infografías, videos, informes ejecutivos, presentaciones, geo-portales, formatos interactivos. </p></div></li><li><h3>Información en Tiempo Real</h3><div class="servicio-info"><img src="img/servicios/tiempo-real.svg" alt=""><p>Gestión de información masiva en tiempo real.</p></div></li><li><h3>Analítica de Datos</h3><div class="servicio-info"><img src="img/servicios/analitica.svg" alt=""></div></li>';

        funcionalidad ='<h2>Funcionalidad</h2><p class="content-20">Nuestra metodología fortalece las actividades de instituciones públicas y privadas, entidades territoriales, fundaciones y empresas a través de la gestión de data masiva para hacer más efectiva la toma de decisiones, el diseño, formulación y ejecución de la política pública y la administración de recursos públicos o privados. Generamos predicciones y planeación por escenarios útiles para la toma de decisiones de empresas, campañas y procesos electorales.</p>';

        creadores = 'Creadores';

        contacto = 'Contacto';
        
        $("#idioma p[value='es']").css("color","#ED1B33");
        $("#idioma p[value='en']").css("color","#000000");
    }
    else if(ingles){
        copy="Sustainable Data Laboratory";

        botonSobreNosotros ="About Us";

        sobreNosotros='<h2>About Us</h2><p class="content-20">Labsus- Sustainable Data Lab- is a company that finds innovative solutions and achieve social transformation by applying social knowledge and artificial intelligence (AI).</p><p class="content-20">We offer services that combine specialized methodologies for qualitative and destructured information analysis, using Artificial Intelligence (AI) systems: we manage and process large amounts of information (Big Data); we innovate to create solutions to social, political, and cultural problems; we support decision-making processes in both the public and private sectors; we enhance initiatives that impact and transform society by offering integral information services; and we create impact indicators for all your needs.</p><p class="content-20">We consider the particular necessities of all initiatives and projects through a community, institutional, or business framework in order to create integral information systems that create data-reports in real time. We create solutions that are made to measure what you need. We add value to your data and processes through our diverse data management systems that serve as vehicles for social transformation.</p><p class="content-20">We are a company of cognitive processes that creates dynamic, flexible, and useful knowledge for communities and decision-makers.</p>';

        nuestrosObjetivos=' <h2>Our Objectives</h2><p class="content-2-columnas">Maximize projects and the effectiveness in decision making for all kinds of organizations through the management, analysis, and articulation of information flows, using the SEE methodology created by Labsus, in addition to other specialized methodologies.</p><p class="content-2-columnas">Strengthen the design, creation, and execution of public policies, plans, and projects on a local, departmental, and national level, through the management and interpretation of information.</p><p class="content-2-columnas">Enhance the use of public or private resources through the integral management of crucial information.</p><p class="content-2-columnas">Improve the provision of services in public and private companies by managing human, qualitative, and destructured information.</p><p class="content-2-columnas">Measure the social impact of service provisions, initiatives, or activities of all kinds of public and private organizations.</p>';

        nuestraHistoria='<h2>Our History</h2><p class="content-30 centrar"><em>“The social and human sciences are enhanced with Labsus. We create new environments.”.</em></p><p class="content-20">Labsus is the result of the creative integration of knowledge and experience of 15 years of experience in the public and private sectors of both, Anascas Del Río, a Political Scientist and expert in human rights, peace, and conflict resolution; and Sebastián Osorno Chávez, a historian of the University of the Andes, M.A. in Visual and Media Anthropology from the Free University of Berlin. The diversity in their experiences in fields of research, communication, and social projects, allowed them to find a vacuum in the use and interpretation of massive amounts of information or Big Data.</p><p class="content-20"> This vacuum can be complemented through applied social knowledge. There is highly relevant information that is silenced, dense, and highly complex and responds to a logic that falls outside of the rational mathematics of data. We believe that the social sciences can significantly enhance the interpretation of digital environments and all the information contained within. The social, business, and governmental phenomena are completely intertwined by these new logics of interaction and production. The massive information that is produced in real time requires the social and human sciences in order to potentiate its utility.</p>';

        destacadoRojo="The social and human sciences are enhanced with Labsus to create new environments.";

        nuestrosPrincipios=' <h2>Nuestros Principios</h2><p class="content-20">We work from the base, in an ethical manner, through active and empathetic communication, creating trust and cooperation.</p><p class="content-20">Working with people or institutions that intervene in social problems implies a high ethical consciousness that requires coherent actions. These are the working principles of Labsus and every one of the members that form this team.</p><ul class="principios-contenedor"><li class="principios principios-selected"><img src="img/principios/transparencia.svg" alt="Transparencia"/><h3>Transparency</h3><p>Transparency is a core principle of Labsus because we work base on trust, honesty and sensitive communication. We believe in precise and sensitive ways of relating each other.</p></li><li class="principios"><img src="img/principios/colaborativo.svg"/><h3>Collaborative Work</h3><p>We want dynamic learning relationships with our clients and the members of our working teams. We plan flexible working models to create spaces of innovation, creativity, and the realization of our shared goals.</p></li><li class="principios"><img src="img/principios/transmision.svg"/><h3>Knowledge Transmission</h3><p>We believe in the possibility of creating communication channels to transmit information outside of the academic realm. The clients, allies, and staff at Labsus are enrichened with our dynamic work teams.</p></li><li class="principios"><img src="img/principios/innovacion.svg"/><h3>Innovation</h3><p>In Labsus we are committed to creating new forms of interacting, making key decisions, and developing innovations in the field of information analysis.</p></li><li class="principios"><img src="img/principios/confidencial.svg"/><h3>Confidentiality</h3><p>We work with confidentiality clauses that are adjusted to the levels of data protection that are required by our clients.</p></li></ul>';

        metodologiaSEE =' <h2>SEE Methodology</h2><p class="content-20">The SEE Methodology (Silences, Exceptions, and Errors), developed by Labsus, contextualizes information that statistical interpretation and analysis based on patterns finds exclusionary, erroneous, contradictory, or simply exceptional. It is a methodology developed from the social sciences for the management and interpretation of massive information that is produced in real time.</p><p class="content-20">We enrichen the statistical and quantitative methods through applied social knowledge, and we have an ample range of disaggregated or integral services, from diagnosis to communication, through simple, didactic, and consumable pieces for diverse audiences.</p><p class="content-20">We focus on complex processes and dense data, associated with political, economic, social, and cultural projects that are under-utilized when they are only observed through quantitative analysis.</p><p class="content-20">We work with several tools including Artificial Intelligence and machine learning, based on Watson- IBM.</p>';

        metodologiaLista='<h2>SEE Methodology</h2><p class="content-20">We use mixed methods of data recollection:</p><ul class="content-20"><li>Surveys</li><li>Semi-structured Interviews</li><li>Structured interviews</li><li>Ethnographies</li><li>Virtual ethnographies</li><li>Participant Observation</li><li>Focus groups</li><li>Audiovisual information recollection</li><li>Interactive Activities</li><li>Teoría de juegos</li></ul><p class="content-20">We use multi-platform methods of information processing:</p><ul class="content-20"><li>Atlas T.I</li><li>NVivo</li><li>Adobe Master Collection</li><li>APIs Cognitive of Watson IBM</li></ul>';

        nuestrosServicios='<h2>OUR SERVICES</h2><p class="content-20">From the diagnosis to the diffusion of information, we offer an integral service that allows our clients to enhance disperse and destructured data, or information that is under-utilized. We work with a diverse range of specialists in order to interpret a variety of textual and non-textual information, including quantitative, qualitative, narrative, and visual data.</p>';

        serviciosLista='<li class="servicios-selected"><h3>SEE Labsus</h3><div class="servicio-info"><img src="img/servicios/see.svg" alt=""><p>We potentiate your information through the SEE methodology in the following phases: information recollection, systematization, interpretation, analysis, and diffusion.</p></div></li><li><h3>Advice and diagnostics</h3><div class="servicio-info"><img src="img/servicios/asesorias.svg" alt=""><p>We diagnose the condition of your data and information in order to determine what methods and data recollection instruments result in a more useful organization that will potentiate your projects.</p></div></li><li><h3>SIGI-Systems of Integral Management of Information</h3><div class="servicio-info"><img src="img/servicios/sigi.svg" alt=""><p>We offer flexible tools for the registrations, classification, and flow of information corresponding to your activities (Data bases, document administration systems and systems of process flows).</p></div></li><li><h3>Strategic Planning</h3><div class="servicio-info"><img src="img/servicios/planeacion.svg" alt=""><p>we process specific data to offer you information about possible results of your projects that are useful for making the right decisions.</p></div></li><li><h3>Soporte en Making Decisions</h3><div class="servicio-info"><img src="img/servicios/decisiones.svg" alt=""><p>Support in making decisions based on information and concrete data.</p></div></li><li><h3>Warning Systems</h3><div class="servicio-info"><img src="img/servicios/alertas.svg" alt=""><p>Early warning systems and prevention in social issues.</p></div></li><li><h3>Identification and extraction of Info.</h3><div class="servicio-info"><img src="img/servicios/extraccion.svg" alt=""><p>Identification and extraction of subjective information or opinion mining.</p></div></li><li><h3>Info Visualizations</h3><div class="servicio-info"><img src="img/servicios/visualizacion.svg" alt=""><p>We create pieces of diffusion directed to a diverse public that can reproduce information massively or in a selective way, including: graphs, videos, executive reports, presentations, geo-portals, and interactive formats.</p></div></li><li><h3>Real Time Information</h3><div class="servicio-info"><img src="img/servicios/tiempo-real.svg" alt=""><p>Mass information management in real time.</p></div></li><li><h3>Data Analytics</h3><div class="servicio-info"><img src="img/servicios/analitica.svg" alt=""></div></li>';

        funcionalidad ='<h2>FUNCTIONALITY</h2><p class="content-20">Our methodology strengthens the activities of public and private institutions, territorial entities, foundations and companies through the management of massive data to enhance the decision making, the design, and the formulation and execution of public policy and the administration of public or private resources. We generate predictions and plan useful scenarios for the decision-making of companies, campaigns and electoral processes.</p>';

        creadores = 'Creators';

        contacto = 'Contact US';
        $("#idioma p[value='en']").css("color","#ED1B33");
        $("#idioma p[value='es']").css("color","#000000");
    }
    
    cambiarIdioma();
}

function cambiarIdioma(){
    $("header p").html(copy);

    $("#ir-nosotros-js p").html(botonSobreNosotros);

    $(".section-1:first-child").html(sobreNosotros);

    $(".section-1:nth-child(2)").html(nuestrosObjetivos);

    $(".section-1:nth-child(3)").html(nuestraHistoria);

    $(".destacado-rojo").html(destacadoRojo);

    $("#nuestros-principios-js").html(nuestrosPrincipios);

    $(".section-2:first-child").html(metodologiaSEE);

    $(".section-2:nth-child(2)").html(metodologiaLista);

    $("#nuestros-servicios-js").html(nuestrosServicios);

    $(".servicios").html(serviciosLista);

    $("#funcionalidad-js").html(funcionalidad);

    $("#creadores-js").html(creadores);

    $(".contacto h2").html(contacto);
    
    activaNosotros = $("#selector-nosotros-js input:checked");
    activaMetodologia = $("#selector-metodologia-js input:checked");

    activoPrincipios = $(".principios-selected");
    activoServicios = $(".servicios-selected");
    
    var seleccionadoNosotros= $("#selector-nosotros-js input");
    var seleccionadoMetodologia= $("#selector-metodologia-js input");
    var seleccionadoPrincipios= $(".principios h3");
    var seleccionadoServicios= $(".servicios li h3");
    var seleccionadoPrincipiosImg= $(".principios img");
    var seleccionadoCreador= $(".imagen-creador");
    var seleccionadoIdioma =$("#idioma p");
    
    seleccionadoNosotros.on("click",escogerNosotros);
    seleccionadoMetodologia.on("click",escogerMetodologia);
    seleccionadoPrincipios.on("click",escogerPrincipio);
    seleccionadoPrincipiosImg.on("click",escogerPrincipio);
    seleccionadoServicios.on("click",escogerServicio);
    seleccionadoCreador.on("mouseenter",entraCreador);
    seleccionadoCreador.on("mouseleave",saleCreador);
    seleccionadoIdioma.on("click",escogerIdioma);
    
    $(".st1").on("click", menuScrollTo);
    $("#ir-nosotros-js").on("click", scrollInicial);
    $(window).on("scroll",comprobarScroll);
    $(window).on("resize",alturaSelector);
    alturaSelector();
}

