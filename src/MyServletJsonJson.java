import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Enumeration;

/**
 * Created by kazuhira on 21/07/16.
 */
@WebServlet(name = "MyServletJsonJson")
public class MyServletJsonJson extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //System.out.println("(MyServlet): received a POST");
        System.out.println("servlet: ho ricevuto una post");

        Enumeration<String> parameterNames = request.getParameterNames();
        while (parameterNames.hasMoreElements())
        {
            String paramName = parameterNames.nextElement();
            //System.out.println(paramName);
            System.out.println("\t"+paramName + ": " +  request.getParameter(paramName));

            Enumeration<String> parameterNamesx = request.getParameterNames();
            while (parameterNamesx.hasMoreElements())
            {
                String paramNamex = parameterNames.nextElement();
                //System.out.println(paramName);
                System.out.println("\t"+paramNamex + ": " +  request.getParameter(paramNamex));

            }

        }

    }


    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("(MyServlet): received a GET");
    }
}
