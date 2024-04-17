class Login {
    get findURL() {
        return 'https://practicetestautomation.com/practice-test-login/'
    }
    
    get username() {
        return $('#username');
    }
  
    get password() {
        return $('#password');
    }
  
    enterCred(username, password) {
        this.username.setValue(username);
        this.password.setValue(password);
    }
    
    get loginBtn() {
        return $('//*[@id="submit"]');
    }

    pressSub() {
        this.loginBtn.click();
    }
}


export default new Login();