
import org.kopitubruk.util.json.JSONUtil;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;
import java.util.LinkedHashMap;
import java.util.Map;

/**
 * Created by kazuhira on 21/07/16.
 */
@WebServlet(name = "Recipes")
public class Recipes extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        System.out.println("è stata richiesta la lista delle ricette, invio in corso....");
        int x = 10;
        int a = 1;
        Map<String,Object> myData = new LinkedHashMap<>();
        myData.put("x", x);
        myData.put("a", a);
        System.out.println(myData.toString());
        String jsonStr = JSONUtil.toJSON(myData);
        System.out.println(jsonStr);
        /*
        Integer x = 5;
        int[] a = {1,1,2,3,5,8,13};
        Map<String,Object> myData = new LinkedHashMap<>();
        myData.put("x", x);
        myData.put("a", a);
        myData.put("id", 666);
        String jsonStr = JSONUtil.toJSON(myData);
        */

        System.out.println("ok, done?");

        /*
        String recipesList = "[{\"trigger\":\"weather\",\"action\":\"gcalendar\",\"id\":\"1\"},{\"trigger\":\"gmail\",\"action\":\"gmail\",\"id\":\"2\"},{\"trigger\":\"weather\",\"action\":\"twitter\",\"id\":\"3\"},{\"trigger\":\"XXXX\",\"action\":\"YYYY\",\"id\":\"4\"}]";
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        out.print(recipesList);
        out.flush();
        */
    }


    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
