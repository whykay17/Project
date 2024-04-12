class Login {
    get username() {
      return $("#username");
    }
  
    get password() {
      return $("#password");
    }
  
    get loginBtn() {
      return $("#submit");
    }
    enterCred() {
      this.username.setValue("student");
      this.password.setValue("Password123");
    }
  
    pressSub() {
      this.loginBtn.click();
    }
  }
  
  module.exports = new Login();
  