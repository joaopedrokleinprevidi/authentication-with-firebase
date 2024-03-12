const firebaseConfig = {
  apiKey: "AIzaSyB10VQL1WGDyehUEJEVHioiATbgWq3Qrxw",
  authDomain: "projetoteste-2d964.firebaseapp.com",
  projectId: "projetoteste-2d964",
  storageBucket: "projetoteste-2d964.appspot.com",
  messagingSenderId: "151702159719",
  appId: "1:151702159719:web:d5a6996e33294478756fc2",
  measurementId: "G-S7R78BKTRJ",
};

const app = initializeApp(firebaseConfig);

const button = document.querySelector("#btn");

button.addEventListener("click", () => {
  console.log("rodou");
  cadastrar();
});

function cadastrar() {
  let auth = null;

  let email = document.querySelector("#emailInput");
  let password = document.querySelector("#passwordInput");

  app
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((user) => {
      alert("Usuário cadastrado.");

      auth = user;
      email.value = "";
      password.value = "";
    })
    .catch((error) => {
      alert(error.message);
    });
}
