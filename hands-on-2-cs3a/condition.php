<h1>Condition</h1>

<?php
    $number = 1201920192018;
    if ($number % 2) {
        echo "Odd";
    } else {
        echo "Even";
    }

    $authenticated = true;
    $checkAccess = ($authenticated) ? "access granted" : "access denied";
    echo $checkAccess;
?>