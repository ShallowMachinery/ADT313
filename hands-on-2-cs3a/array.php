<?php
$colors = array(
    "red", 
    "orange", 
    "yellow", 
    "green", 
    "blue", 
    "indigo", 
    "violet"
);

$cars = array(
    "bmw",
    "tesla",
    "motorola"
);

echo($colors[3] . "</br >");
echo $colors[3] . "</br >";
echo $cars[2] . "</br >"; 

$cars2 = array(
    "ford"=>"mustang",
    "mazerati"=>"unknown",
    "bmw"=>"m3",
);
echo $cars2["bmw"] . "</br >";

$user = array(
    "firstname" => "Eleazar James",
    "middlename" => "Suriao",
    "lastname" => "Galope",
);
echo $user["middlename"] . "</br >";

$info = array(
    "user" => array(
        "firstname" => "Eleazar James",
        "middlename" => "Suriao",
        "lastname" => "Galope"
    ),
    "address" => array(
        "province" => "bulacan",
        "municipality" => "bocaue",
        "barangay" => "turo"
    ),
    "isVerified" => true,
    "isLockedAccount" => true
);

echo $info["address"]["barangay"] . "</br >";

$info["user"]["age"] = 21;

echo "<pre>";
print_r($info);
echo "</br >";
var_dump($info);
echo "</pre>";
?>

