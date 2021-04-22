<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $name = $_POST['name'];

   $mailto = 'maruisbae@icloud.com';
   $headers = 'From: '.$mailFrom;
   $txt = 'You have recieved an e-mail from '.$name.'.\n\n'.$message;

   mail($mailTo, $subject, $txt, $headers); 
   header('Location: contact_form.php?mailsend');
}