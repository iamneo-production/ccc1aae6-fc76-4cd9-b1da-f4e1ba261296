package com.example.login.controller;

import com.example.login.Database.connection;
import com.example.login.loginDao.LoginDao;
import org.springframework.http.MediaType;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.sql.*;

@RestController
@RequestMapping("/admin")
public class LoginController {
    @PostMapping(
            value = "/login")
//            produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    @ResponseBody
    public String Login(LoginDao formData,HttpServletResponse response) throws Exception
   {
       System.out.println(formData.getUsername());
       System.out.println(formData.getPassword());
       try {
           Class.forName("com.mysql.cj.jdbc.Driver");
           Connection con = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/carrental","root","");
           Statement stmt = con.createStatement();
           ResultSet rs = stmt.executeQuery("SELECT * FROM admin WHERE name='"+formData.getUsername()+"' AND pass='"+formData.getPassword()+"'");
           while(rs.next())
           {
               if(rs.getString(2).equals(formData.getUsername()))
               {
                   response.sendRedirect("http://localhost:3000/adminPanel");
               }
           }
       } catch (ClassNotFoundException e) {
           e.printStackTrace();
       } catch (SQLException e) {
           e.printStackTrace();
       }

//       try {
//          response.sendRedirect("/");
//       } catch (IOException e) {
//           e.printStackTrace();
//       }
       return "Incoorect Passwod";
   }
}
