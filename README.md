# react-firebase-v9-chat
 
 ## React + Firebase 9 + Typescript

<p><a href="https://react-firebase-v9-chat.vercel.app/" title="Redirect to Firebase chat">
<img 
src="https://res.cloudinary.com/dwvkka6mz/image/upload/v1671228926/chat_jwdaog.png"></a></p>

[Live Demo](https://react-firebase-v9-chat.vercel.app/)

Pequeña aplicación de sala de chat desarrollado aplicando autenticación con Google. Se utilizan las librerías de firebase y react-firebase-hooks. Este ejercicio es del canal de youtube de fireship-io en el cual originalmente se hizo con firebase 7, por mi parte lo actualicé a firebase 9 y reemplacé javascript por typescript.

Aplicación basada en https://github.com/fireship-io/react-firebase-chat

Para arrancar la aplicación se deben llenar las variables de entorno con los valores entregados por firebase ( ejemplo en minuto 2:24 https://www.youtube.com/watch?v=zQyrwxMPm88&ab_channel=Fireship )

```javascript
VITE_APIKEY=
VITE_AUTHDOMAIN=
VITE_PROJECTID=
VITE_STORAGEBUCKET=
VITE_MESSAGINGSENDERID=
VITE_APPID=
VITE_MEASUREMENTID=
```
Para producción se debe agregar el dominio en firebase en la opción "Dominios Autorizados" ...
```bash
https://console.firebase.google.com/u/0/project/ **YOUR_PROJECT_ID** /authentication/settings
```

