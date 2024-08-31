<!DOCTYPE html>
    <head></head>
    <style>
        table, th, td {
            border: 1px solid black;
        }
    </style>
    <body>
        <?php
            $table = array(
                "header"=>array(
                    "Student ID",
                    "Last name",
                    "First name",
                    "Middle name",
                    "Course",
                    "Section"
                ),
                "body"=>array(
                    array(
                        "lastname"=>"Birnardu",
                        "firstname"=>"Shirwen",
                        "middlename"=>"Markus",
                        "course"=>"IT",
                        "section"=>"3A"
                    ),
                    array(
                        "lastname"=>"Belyarama",
                        "firstname"=>"Jelyan Shila",
                        "middlename"=>"Lawril",
                        "course"=>"CS",
                        "section"=>"3A"
                    ),
                    array(
                        "lastname"=>"Bilu",
                        "firstname"=>"Adreyan Morisi",
                        "middlename"=>"Akenu",
                        "course"=>"IT",
                        "section"=>"3A"
                    ),
                    array(
                        "lastname"=>"di Liyun",
                        "firstname"=>"Nurman",
                        "middlename"=>"Aruyu",
                        "course"=>"CS",
                        "section"=>"3A"
                    ),
                    array(
                        "lastname"=>"Galupi",
                        "firstname"=>"Elyasar Jims",
                        "middlename"=>"Ramus",
                        "course"=>"CS",
                        "section"=>"3A"
                    ),
                    array(
                        "lastname"=>"Kros",
                        "firstname"=>"Jukas Arabila",
                        "middlename"=>"Kison",
                        "course"=>"IT",
                        "section"=>"3A"
                    ),
                    array(
                        "lastname"=>"Kaldirun",
                        "firstname"=>"Miku",
                        "middlename"=>"Agenaldu",
                        "course"=>"IT",
                        "section"=>"3A"
                    ),
                    array(
                        "lastname"=>"Tamundung",
                        "firstname"=>"Jan Nel",
                        "middlename"=>"Usminya",
                        "course"=>"IT",
                        "section"=>"3A"
                    ),
                    array(
                        "lastname"=>"Turiprangka",
                        "firstname"=>"Jiku",
                        "middlename"=>"Makapagal",
                        "course"=>"CS",
                        "section"=>"3A"
                    ),
                    array(
                        "lastname"=>"Nabu",
                        "firstname"=>"Kem Rayn",
                        "middlename"=>"Markus",
                        "course"=>"IT",
                        "section"=>"3A"
                    ),
                    array(
                        "lastname"=>"Lyanita",
                        "firstname"=>"Jan Adreyan",
                        "middlename"=>"Dotirti",
                        "course"=>"CS",
                        "section"=>"3A"
                    )
                ),
            );
            
            echo("<h1>Hands-on Activity</h1>
            <table>
                <tr>");
            foreach ($table["header"] as $header) {
                echo("<th>" . $header . "</th>");
            }
            echo("</tr>");
            foreach ($table["body"] as $user_index => $user) {
                echo("<tr>");
                echo("<td>" . ($user_index + 1) . "</td>");
                foreach ($user as $user_info) {
                    echo("<td>" . $user_info . "</td>");
                }
                echo("</tr>");
            }
            echo("</table>");
        ?>
    </body>
</html>