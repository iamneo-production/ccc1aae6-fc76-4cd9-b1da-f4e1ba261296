package com.example.login.controller;

import com.example.login.loginDao.UserDao;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

@RestController
@RequestMapping("/admin")
public class AddUser {
    @PostMapping("/addUser")
    @ResponseBody
    public String adduser(UserDao user, HttpServletResponse response)
    {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/carrental", "root", "");
            PreparedStatement ps = con.prepareStatement("INSERT INTO `user`(`email`, `pass`, `username`, `userrole`, `phone`)  VALUES (?,?,?,?,?)");
            ps.setString(1,user.getEmail());
            ps.setString(2,user.getPassword());
            ps.setString(3,user.getUsername());
            ps.setString(4,user.getUserrole());
            ps.setString(5,user.getPhone());
            ps.executeUpdate();
            response.sendRedirect("http://localhost:3000/userlist");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return "Error While Adding User";
    }
}
