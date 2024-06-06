//TODO https://firebase.google.com/docs/auth/admin/create-custom-tokens?hl=pt-br#node.js_3
// Gerar token personalizado

// Login com Google
export function googleLogin() {
    console.log('clicou no login google')
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        console.log('Usuário autenticado com sucesso', result);
        localStorage.setItem('userToken', JSON.stringify(result));
        window.location.href = '/#/search-doctor';
    }).catch(function(error) {
        console.error('Erro na autenticação', error);
    });
}
// Login com e-mail e senha
export function emailLogin(email, password) {
    console.log('Login email e senha');
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(result) {
        console.log('Usuário autenticado com sucesso');
        localStorage.setItem('userToken', JSON.stringify(result));
        window.location.href = '/#/search-doctor';
    }).catch(function(error) {
        console.error('Erro na autenticação', error);
    });
}

// Cadastro com e-mail e senha
export function emailSignUp(email, password) {
   return firebase.auth().createUserWithEmailAndPassword(email, password);
}

export function emailReset(email) {
   return firebase.auth().sendPasswordResetEmail(email);
}
