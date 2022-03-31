package com.example.login.loginDao;


import java.io.Serializable;

public class UserDao implements Serializable {
    private int id;
    private String username;
    private String userrole;
    private String email;
    private String password;
    private String phone;

    public UserDao(int id, String username, String userrole, String email, String password,String phone) {
        this.id = id;
        this.username = username;
        this.userrole = userrole;
        this.email = email;
        this.password = password;
        this.phone = phone;
    }

    public UserDao() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUserrole() {
        return userrole;
    }

    public void setUserrole(String userrole) {
        this.userrole = userrole;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
