<?php

function checkAuth($user) {
    if ($user !== 'admin') {
        echo "go away!";
    } else {
        echo "wilkam!";
    }
}

checkAuth('admin');
?>