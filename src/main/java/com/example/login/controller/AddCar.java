package com.example.login.controller;

import com.example.login.loginDao.CarsDao;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

@RestController
@RequestMapping("/admin")
public class AddCar {
    @PostMapping(value = "/addCar")
    @ResponseBody
    public String addCar(CarsDao detail, HttpServletResponse response) throws Exception
    {
        System.out.println(detail.getOwner_name());
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/carrental", "root", "");
            PreparedStatement ps = con.prepareStatement("INSERT INTO `cars`(`owner_name`, `email`, `car_number`, `price`, `brand`, `make`, `phone`, `address`) VALUES (?,?,?,?,?,?,?,?)");
            ps.setString(1,detail.getOwner_name());
            ps.setString(2,detail.getEmail());
            ps.setString(3,detail.getCar_number());
            ps.setString(4,detail.getPrice());
            ps.setString(5,detail.getBrand());
            ps.setString(6,detail.getMake());
            ps.setString(7,detail.getPhone());
            ps.setString(8,detail.getAddress());
            ps.executeUpdate();
            response.sendRedirect("http://localhost:3000/admin");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return "Error While Adding car";
    }
}
