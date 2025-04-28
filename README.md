1. ¿Qué diferencias observas entre una arquitectura REST y una arquitectura de microservicios?

REST: Se enfoca en cómo se comunican los sistemas usando HTTP y maneja un conjunto de recursos (por ejemplo, productos, usuarios). La arquitectura REST es monolítica, lo que significa que todo el sistema suele estar unido en una sola aplicación, haciendo que escalar y mantener el sistema sea más desafiante.

Microservicios: En cambio, en una arquitectura de microservicios, la aplicación se divide en servicios más pequeños e independientes. Cada microservicio maneja una parte específica del sistema (como la gestión de productos, usuarios, etc.), y cada uno puede escalarse de forma independiente. Los microservicios se comunican entre sí mediante APIs REST o protocolos similares.

2. ¿Cuáles crees que serían los desafíos si quisieras dividir tu aplicación REST actual en microservicios?

Desafíos:

Complejidad: Dividir la aplicación actual en microservicios incrementaría la complejidad. Cada microservicio necesitaría ser independiente, pero también tendría que comunicarse con los demás. Esto puede generar problemas de coordinación y mantenimiento.

Gestión de infraestructura: Tendrías que gestionar cada microservicio por separado, con su propia base de datos, sus APIs, y más. Esto puede complicar las tareas de despliegue y monitoreo.

Consistencia de datos: Si cada microservicio tiene su propia base de datos, mantener la consistencia de los datos a través de servicios puede ser un reto.

3. ¿Qué ventajas teóricas ves en los microservicios frente a una API REST monolítica?

Escalabilidad: En los microservicios, puedes escalar independientemente cada servicio según la demanda, mientras que en una arquitectura monolítica, todo el sistema debe escalarse junto.

Resiliencia: Si un microservicio falla, no necesariamente afecta a los otros. En una arquitectura monolítica, un fallo en una parte del sistema puede afectar a todo el proyecto.

Desarrollo independiente: Los equipos pueden trabajar en diferentes microservicios sin interferir entre sí, lo que mejora la productividad. En una API REST monolítica, los cambios en una parte del sistema pueden afectar a todo el proyecto.

Flexibilidad tecnológica: En microservicios, cada servicio puede estar escrito en el lenguaje que mejor se adapte a la funcionalidad que realiza, mientras que en una arquitectura REST monolítica todo el sistema está generalmente basado en una sola tecnología.