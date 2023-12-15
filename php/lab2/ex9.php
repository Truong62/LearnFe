<?php 
function is_str_lowercase($str1){
    $sc = 0;
    if($sc<strlen($str1)){
       return (ord($str1[$sc])>= ord("A") && ord($str1[$sc]) <= ord("Z")) ?  false :  $sc++;
    }else{
    return true;
    }
}