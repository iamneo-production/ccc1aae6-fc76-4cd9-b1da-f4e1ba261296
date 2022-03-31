package com.example.login.loginDao;

import java.io.Serializable;

public class LoginDao implements Serializable {
    private String username;
    private String password;

    public LoginDao(String username, String password) {
        this.username = username;
        this.password = password;
        System.out.println(username);
    }

    public LoginDao() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
