import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;

/**
 * Created by kazuhira on 21/07/16.
 */
@WebServlet(name = "Recipes")
public class Recipes extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        System.out.println("è stata richiesta la lista delle ricette, invio in corso....");

        String recipesList = "[{\"trigger\":\"weather\",\"action\":\"gcalendar\"},{\"trigger\":\"gmail\",\"action\":\"gmail\"},{\"trigger\":\"weather\",\"action\":\"twitter\"},{\"trigger\":\"XXXX\",\"action\":\"YYYY\"}]";
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        out.print(recipesList);
        out.flush();

    }


    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
