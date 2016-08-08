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
@WebServlet(name = "MyServlet")
public class MyServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        //System.out.println("(MyServlet): received a POST");
        System.out.println("servlet: ho ricevuto una post ->" + request.getParameterNames());

        Enumeration<String> parameterNames = request.getParameterNames();
        while (parameterNames.hasMoreElements())
        {
            String paramName = parameterNames.nextElement();
            //System.out.println(paramName);
            System.out.println("\t"+paramName + ": " +  request.getParameter(paramName));
        }

        System.out.println(request.getParameter("googleCredentials"));

        String jsonObject = "{\"authenticated\":\"true\",\"disconnected\":\"true\", \"userRecipesJSON\":[{\"trigger\":\"weather\",\"action\":\"twitter\"},{\"trigger\":\"gmail\",\"action\":\"twitter\"},{\"trigger\":\"weather\",\"action\":\"gmail\"},{\"trigger\":\"gcalendar\",\"action\":\"gmail\"}]}";
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        out.print(jsonObject);
        out.flush();



    }


    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
