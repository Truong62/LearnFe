<?php
   function check_palindrome($string){
    return ($string == strrev($string)) ? 1 : 0;
}
?>